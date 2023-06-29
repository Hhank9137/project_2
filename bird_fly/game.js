const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const gameContainer = document.getElementById("game-container");

const flappyImg = new Image();
flappyImg.src = './flappy_dunk.png';

 // Bird場景大小變數(Variables)
 const FLAP_SPEED = -3;  
 const BIRD_WIDTH = 40;
 const BIRD_HEIGHT = 30;
 const PIPE_WIDTH = 50;
 const PIPE_GAP = 125;

//  Bird變量(Variables)
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;       //  Velocity 速度
let birdAcceleration = 0.1; //  Acceleration 加速

// Pipe變量(Variables)
let pipeX = 400;
let pipeY = canvas.height -200; 

// 分數 & 最高分數 的變量(Variables)
let scoreDiv = document.getElementById("score-display");
let score = 0;
let highScore = 0;

let scored = false;
// 監聽按下空白鍵
document.body.onkeydown = function(e){
    if(e.code == 'Space'){
        birdVelocity = FLAP_SPEED;
        // console.log(birdVelocity, FLAP_SPEED)   
    }
}
// 監聽按下reset按鈕
document.getElementById("restart-button").addEventListener("click", function(){
    resetGame();
    hideEndMenu();
    loop();
}) 

// 分數(函式) 
function increaseScore(){   // increase(增加)
    if (birdX > pipeX + PIPE_WIDTH && 
        (birdY < pipeY + PIPE_GAP || birdY + BIRD_HEIGHT > pipeY + PIPE_GAP) && !scored){
        score ++;
        scoreDiv.innerHTML = score;
        scored = true;
    }
    if (birdX < pipeX + PIPE_WIDTH){
        scored = false;
    }
}

// 碰撞到(函示) 
function collisionCheck(){  //collision(碰撞)
    // Create bounding Boxes for the bird and the pipes
    // 設定鳥、pipe的邊框大小
     const birdBox = {
        x: birdX,
        y: birdY,
        width: BIRD_WIDTH,
        height: BIRD_HEIGHT
     }

     const topPipeBox = {
        x: pipeX,
        y: pipeY - PIPE_GAP + BIRD_HEIGHT,
        width: PIPE_WIDTH,
        height: pipeY
     }

     const bottomPipeBox = {
        x: pipeX,
        y: pipeY + PIPE_GAP + BIRD_HEIGHT,
        width: PIPE_WIDTH,
        height: canvas.height - pipeY - PIPE_GAP

     }
    //  Check for collision with upper pipe box
    // 檢查是否與上管碰撞
    if (birdBox.x + birdBox.width > topPipeBox.x &&
        birdBox.x < topPipeBox.x + topPipeBox.width &&
        birdBox.y < topPipeBox.y + 50){
        // console.log('this 1');
        return true;
    }

    // Check for collision with lower pipe box
    // 檢查是否與下管碰撞
    if(birdBox.x + birdBox.width > bottomPipeBox.x && 
        birdBox.x < bottomPipeBox.x + bottomPipeBox.width && 
        birdBox.y + birdBox.height >  bottomPipeBox.y - 50){
        // console.log('this 2',birdBox.y ,birdBox.height,  bottomPipeBox.y); 
        return true;
    }

    

    // Check if bird hits boundaries
    // 檢查是否碰到上下邊界
    if(birdY < 0 || birdY + BIRD_HEIGHT > canvas.height){
        // console.log('this 3'); 
        return true;
    }
    return false;
    
}

//隱藏結束畫面(函示) 
function hideEndMenu(){
    document.getElementById('end-menu').style.display='none';
    gameContainer.classList.remove('backdrop-blur');

}

// 結束畫面(函示)
function showEndMenu(){
    // TODO:
    document.getElementById("end-menu").style.display='block';
    gameContainer.classList.add('backdrop-blur');
    document.getElementById("end-score").innerHTML = score;
    // 判斷是否為最高分數
    if(score > highScore){
        highScore = score;
    }
    document.getElementById("best-score").innerHTML = highScore;
}

// 重新開始(函式)
function resetGame(){
   
    birdX = 50;
    birdY = 50;
    birdVelocity = 0;      
    birdAcceleration = 0.1;

    pipeX = 400;
    pipeY = canvas.height -200;
    score = 0;
    // reset網頁下方分數
    scoreDiv.textContent="0";
}

// 結束遊戲(函式)
function endGame(){
    showEndMenu();
}

// 
function loop(){
    //  reset the ctx after every loop iteration
    ctx.clearRect(0, 0, canvas.width, canvas.height) 

    // Draw Flappy Bird
    ctx.drawImage(flappyImg, birdX, birdY)

    // Draw Pipes
    ctx.fillStyle = '#333';
    // top Pipe
    ctx.fillRect(pipeX, -50 , PIPE_WIDTH, pipeY);
    // bottom Pipe
    ctx.fillRect(pipeX, pipeY + PIPE_GAP, PIPE_WIDTH, canvas.height - pipeY)

    

    if(collisionCheck()){
        endGame();
        return;
    };

    // 增加遊戲困難度
    var i = score * 0.3;
    pipeX -= 1.5 + i
   
    
    // if the pipe moves out of the frame we need to reset the pipe
    // 如果牆超過螢幕會重新製造一到牆
    if(pipeX < -50){
        pipeX = 400;
        pipeY = Math.random() * (canvas.height - PIPE_GAP) + PIPE_WIDTH;

        console.log(score)
    }

    // apply gravity to the bird and let it move
    birdVelocity += birdAcceleration;    
    // console.log(birdVelocity, birdAcceleration)

    birdY += birdVelocity;  
    // console.log(birdY)
    increaseScore()
    requestAnimationFrame(loop);
}
loop();