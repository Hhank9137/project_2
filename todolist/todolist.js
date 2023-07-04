let btn = document.querySelector("#btn");
var Date = new Date();

btn.addEventListener('click', (e)=>{
    console.log(Date)
    

    let section = document.querySelector('section');

    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoYear = form.children[1].value;
    let todoMonth = form.children[2].value;
    let todoDate = form.children[3].value;

    // 如果輸入值為空字串跳出回圈
    if(todoText === ""){
        alert("請輸入事項")
        return;
    }
    if(todoYear ===""){
        todoYear = Date.getUTCFullYear();
        console.log(todoYear);
    }
    if(todoMonth ===""){
        todoMonth = Date.getUTCMonth();
    }
    if(todoDate ===""){
        todoDate = Date.getUTCDate();
        console.log(todoDate)
    }

    // console.log(todoText, todoYear, todoMonth, todoDate)
    e.preventDefault();

    let todo = document.createElement("div");
    todo.classList="todo";

    let toText = document.createElement('p');
    toText.classList = "toText";
    toText.innerHTML = todoText;
    console.log(toText);

    let toDate = document.createElement('p');
    toDate.classList = "toDate";
    toDate.innerHTML = todoYear + '/' + todoMonth + '/' +todoDate;
    console.log(toDate);

    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'

    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'



    // 先把資料放進去todo裡
    todo.appendChild(toText);
    todo.appendChild(toDate);
    todo.appendChild(completeButton);
    todo.appendChild(trashButton);

    // 再把todo放到section標籤裡
    section.appendChild(todo);
    
    // 加入新增資料的特效 
    todo.style.animation='scaleUp 0.3s forwards';

    // 測試
    // console.log(section);

    // 點擊完成的特效
    completeButton.addEventListener('click',(e) => {
        let todoItem = e.target.parentElement;
        todoItem.classList.add('done')
        // todoItem.style.animation='all 0.1s ease';
        // console.log('complete')
        console.log(todoItem)
    })
    // 點擊垃圾桶刪除動畫、特效
    trashButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;
        todoItem.addEventListener("animationend", () => {
            // 刪除localStorage資料。
            let text = todoItem.children[0].innerText;
                let myListArray = JSON.parse(localStorage.getItem("list"));
                myListArray.forEach((item, index) => {
                    if (item.todoText == text) {
                        myListArray.splice(index, 1);
                        localStorage.setItem("list", JSON.stringify(myListArray));
                    }
                });
            todoItem.remove();
        });
        todoItem.style.animation = "scaleDown 0.3s forwards";
    });

    // 新增完清單後清空輸入列
    form.children[0].value = "";
    form.children[1].value = "";
    form.children[2].value = "";
    form.children[3].value = "";

    let myTodo = {
        todoText : todoText,
        todoYear : todoYear,
        todoMonth : todoMonth,
        todoDate : todoDate,
    }

    let myList = localStorage.getItem("list");
    if(myList == null) {
        localStorage.setItem("list", JSON.stringify([myTodo]));      
    }else{
        let myListArray= JSON.parse(myList);
        myListArray.push(myTodo);
        localStorage.setItem("list", JSON.stringify(myListArray))
    }
    console.log(JSON.parse(localStorage.getItem("list")))    
})

// 重新開啟網頁時讀取localStorage資料。
function loadData() {
        let myList =localStorage.getItem("list");
        if (myList !== null) {
            let myListArray = JSON.parse(myList);
            myListArray.forEach(item => {
                let todo = document.createElement("div");
                todo.classList.add("todo");
    
                let text = document.createElement("p");
                text.classList.add("todo-text");
                text.innerText = item.todoText;
    
                let time = document.createElement("p");
                time.classList.add("todo-time");
                time.innerText = item.todoYear + " / " + item.todoMonth + " / " + item.todoDate;
                todo.appendChild(text);
                todo.appendChild(time);
    
                let completeButton = document.createElement("button");
                completeButton.classList.add("complete");
                completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
                // 監聽已完成觸發
                completeButton.addEventListener("click", e => {
                    let todoItem = e.target.parentElement;
                    todoItem.classList.toggle("done");
                });
    
                let trashButton = document.createElement("button");
                trashButton.classList.add("trash");
                trashButton.innerHTML = '<i class="fa-sharp fa-regular fa-circle-xmark"></i>'
                // 設定移除動畫與特效。
                trashButton.addEventListener("click", e => {
                    let todoItem = e.target.parentElement;
                    todoItem.addEventListener("animationend", () => {
                        // 刪除localStorage資料。
                        let text = todoItem.children[0].innerText;
                        let myListArray = JSON.parse(localStorage.getItem("list"));
                        myListArray.forEach((item, index) => {
                            if (item.todoText == text) {
                                myListArray.splice(index, 1);
                                localStorage.setItem("list", JSON.stringify(myListArray));
                            }
                        });
                        todoItem.remove();
                    });
                    todoItem.style.animation = "scaleDown 0.3s forwards";
                });
    
                todo.appendChild(completeButton);
                todo.appendChild(trashButton);
    
                todo.style.animation = "scaleUp 0.3s forwards";
    
                section.appendChild(todo);
            });
        };    
    }
    
    
    // 比較函式(順序排列)。
    function mergeTime(arr1, arr2) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (Number(arr1[i].todoYear) > Number(arr2[j].todoYear)) {
                result.push(arr2[j]);
                j++;
            } else if (Number(arr1[i].todoYear) < Number(arr2[j].todoYear)) {
                result.push(arr1[i]);
                i++;
            } else if (Number(arr1[i].todoYear) == Number(arr2[j].todoYear)) {
                if (Number(arr1[i].todoMonth) > Number(arr2[j].todoMonth)) {
                    result.push(arr2[j]);
                    j++;
                } else if (Number(arr1[i].todoMonth) < Number(arr2[j].todoMonth)) {
                    result.push(arr1[i]);
                    i++;
                } else if (Number(arr1[i].todoMonth) == Number(arr2[j].todoMonth)) {
                    if (Number(arr1[i].todoDate) > Number(arr2[j].todoDate)) {
                        result.push(arr2[j]);
                        j++;
                    } else {
                        result.push(arr1[i]);
                        i++;
                    }
                }
            }
        }
        while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
        }
        while (j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
        return result;
    }
    
    function mergeSort(arr) {
        if (arr.length === 1) {
            return arr;
        } else {
            let middle = Math.floor(arr.length / 2);
            let right = arr.slice(0, middle);
            let left = arr.slice(middle, arr.length);
            return mergeTime(mergeSort(right), mergeSort(left));
        }
    }
    
    let sortButton = document.querySelector("div.sort button");
    sortButton.addEventListener("click", () => {
    
        let sortedArray = mergeSort(JSON.parse(localStorage.getItem("list")));
        localStorage.setItem("list", JSON.stringify(sortedArray));
    
        let len = section.children.length;
        for (let i = 0; i < len; i++) {
            section.children[0].remove();
        }
    
        loadData();
    });
    
    