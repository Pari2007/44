
var Beginform, database,episode1,episode2,episode3,episode4,end,backimage,restartimg,restart,gameoverimg,gameover;
var timer1 = 100;
var score = 0;
function preload(){
    backimage= loadImage("scorefinal.png");
    restartimg = loadImage("restart.png");
    gameover = loadImage("gameover.png");
}

function setup() {
    console.log("abcd")
    database = firebase.database();
    var canvas = createCanvas(displayWidth,displayHeight);
    Beginform = new Beginning();



   
    
    
}
function draw() {
    background(backimage);
    Beginform.display();
    begintimeforEpisodes();
        textSize(26);
        text(score, displayWidth/2+400, displayHeight/2-360); 
    
 }
  
 function begintimeforEpisodes(){
        textSize(26);
        text(timer1, displayWidth/2+650, displayHeight/2-360); 
        if (frameCount % 60 == 0 && timer1 > 0) {
        // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
         timer1--; } 
        if (timer1 == 0) {
        text("GAME OVER,TRY AGAIN!", width / 2, height * 0.7);
        }
     }

