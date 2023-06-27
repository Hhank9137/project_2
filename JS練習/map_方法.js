// map()方法，API
// 會回傳整個陣列，需要宣告新的變數給map存放回傳的陣列
var cname = ['Hank', 'Bob', 'Steven'];
var nname = cname.map(function(x){
    // console.log(x);
    return  x + 'is good'
})
console.log(nname)

// map()方法，細部分解、for迴圈用法(資料結構)

var i = 0;
var a =[]
console.log(a)
var cname = ['Hank', 'Bob', 'Steven'];
for (i ; i < cname.length ; i++){
    var cn = cname[i] + ' is  good!'
    // 原本 a 陣列裡面是空值，用.push()方法把資料放進去
    a.push(cn);
} console.log(a)


// map()方法，細部分解、函示用法
var pppp = ['bbbb' , 'ffff' , '132456']
function cname2(cname){
    var a = []
    for (var i=0 ; i<cname.length; i++){
        var cn2 = cname[i] +' is very well!';
        a.push(cn2);
    }
    return a;
}