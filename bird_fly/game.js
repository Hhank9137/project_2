const canvas = document.getElementById("game-canvas");
const ctx = document.getContext("2d");

const gameContainer = document.getElementById("game-container");

const flappyImg = new Image();
flappyImg.src = './flappy_dunk.png';

 // Bird場景大小變數(Variables)
 const FLAP_SPEED = -5;
 const BIDR_WIDTH = 40;
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
let highscore = 0;

// 監聽按下空白鍵
document.body.onkeyup = function(e){
    if(e.code == 'Space'){
        birdVelocity = FLAP_SPEED;
    }
}
// 分數(函式) 
function increaseScore(){   // increase(增加)
    // TODO:
}

// 碰撞到(函示) 
function collisionCheck(){  //collision(碰撞)
    // TODO:
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
}

// 重新開始(函式)
function resetGame(){
    // TODO:
}

// 結束遊戲(函式)
function endGame(){
    // TODO:

}