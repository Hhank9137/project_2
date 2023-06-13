// keydown 按下鍵盤觸發
// keyup  放開鍵盤觸發

// document.querySelector() 靜態:出來的值不能被改變
// document.getElementById() 動態:出來的值能被改變


// ES6 tamplate string
(function(){
     window.addEventListener('keydown',playHandler)
        function playHandler(e){
            // play music

            const sudio =  document.querySelector("audio[data-key='${e.keyCode}"]')

            // dom style
        }
     
})()
