var cname = ['Bob' , 'Hank' , "Steve"]
console.log(cname)
// .map() 會回傳上去陣列的值
// var result = [上續陣列名稱].map(function([原陣列的處理的元素]))
var result = cname.map(function(nname){
    console.log(nname);
    // return 用意是：陣列都需要回傳值才會有內容
    return nname + ' is very well to exam';
})
console.log(result);
const n1 = [1,4,6,9];
const n2 = n1.map(function(x){
    return x * x;
})
console.log(n2);
