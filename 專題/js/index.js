//照片logo 監聽事件
var img = document.getElementById("img");        
// 滑鼠碰到 img
img.addEventListener("mouseover", function(){
    // console.log("img碰到");
    this.style.animation="img_h 1.5s ";  
    this.style.translate="rotate(180deg) ";

})
// 滑鼠離開 img
img.addEventListener("mouseout", function(){
    
    this.style.animation="img_o 2s  1s";
})
//nav li_ 監聽事件
var li_1 = document.getElementById("li_1");
var li_2 = document.getElementById("li_2");
var li_3 = document.getElementById("li_3");
var li_4 = document.getElementById("li_4");

//nav li_ _ul 監聽事件

var li_1_ul = document.getElementById("li_1_ul");
var li_2_ul = document.getElementById("li_2_ul");
var li_3_ul = document.getElementById("li_3_ul");
var li_4_ul = document.getElementById("li_4_ul");

// 滑鼠碰到 li_1
li_1.addEventListener("mouseover", function(){
    li_1_ul.style.display="block"; 
})
// 滑鼠離開 li_1
li_1.addEventListener("mouseout", function(){
    li_1_ul.style.display="none";
})

// 滑鼠碰到 li_2
li_2.addEventListener("mouseover", function(){
    li_2_ul.style.display="block";
})
// 滑鼠離開 li_2

li_2.addEventListener("mouseout", function(){
    li_2_ul.style.display="none";
})

// 滑鼠碰到 li_3
li_3.addEventListener("mouseover", function(){
    li_3_ul.style.display="block"; 
})
// 滑鼠離開 li_3
li_3.addEventListener("mouseout", function(){
    li_3_ul.style.display="none";
})

// 滑鼠碰到 li_4
li_4.addEventListener("mouseover", function(){
    li_4_ul.style.display="block";
   
})
// 滑鼠離開 li_4
li_4.addEventListener("mouseout", function(){
    li_4_ul.style.display="none";
})
