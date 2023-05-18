// filter()方法 回傳陣列，會在函式內用判斷式(如果結果等於trun，會回傳全部的值)
var arr = [1,2,3,4,5,6,7,8,9,0];
var a = arr.filter(function(x){
    return (x < 5) && (x > 1);
})
console.log(a)

// 可用來過濾 值 ex:
var movie = [
    {name:"與龍共舞", long:120},
    {name:"整人之霸", long:130},
    {name:"美人魚", long:105},
    ]
var c = movie.filter(function(b){
    // return b.name === "美人魚";
    // return b.long > 105;
    // return b.long >= 105;
    return b.long < 120;
})
console.log(c)