// find()方法 找到第一個符合條件的值，並回傳
var nnum = [1,2,3,4,5,6,7,8,9,0,1,2]
var newnum = nnum.find(function(x){
    return x === 2;
})
console.log(newnum)