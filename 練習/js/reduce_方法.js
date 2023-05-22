
// reduce()方法 讓陣列做運算(全部)
var nn = [1,2,3,5,6,7,8,10,11,13,14,15];
var nsum = nn.reduce(function(sum,x){
    sum += x;
    return sum;
},0)
console.log(nsum)

// reduce()方法 for迴圈版本(運算)

var x = 0;
for (var i = 0; i < nn.length ; i++){

    x += nn[i];
    console.log(x);
}

// ES6 (const、let)
// var 作用域在 function
// let、const 作用域在 {}


// let 
// const


var i = 0;
for (let i =0; i<10; i++){
    i += i;
}
console.log(i)