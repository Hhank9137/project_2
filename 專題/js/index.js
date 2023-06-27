let singerli = document.querySelector("#li_1");
let bandli = document.querySelector("#li_2");
let iframe = document.querySelector("#iframe");







singerli.addEventListener('mouseup',changeiframe);

function changeiframe(){ 
    iframe.src = '../singer.html';
    console.log(iframe);
 
}