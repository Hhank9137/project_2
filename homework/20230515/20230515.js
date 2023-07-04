let answer = Math.trunc(Math.random() * 101);
    console.log(answer, typeof(answer));
    let range1 = 1, range2 = 99;


    while (true) {
        var playr = Number(prompt("請輸入數字" + range1 + "-" + range2 , "1"));
        console.log(playr, typeof (playr));

        if (playr === answer) {
            alert("輸入正確，數字為：" + answer);
            break;
        } else if (playr != answer) {
            if (playr > answer) {
                range2 = playr;
                
            } else if (playr < answer) {
                range1 = playr;
            }
            alert("數字在"+ range1 + "-"+ range2+ "之間!");

        }
    }