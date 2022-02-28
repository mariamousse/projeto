var backImg;
var nave, naveImg;
var laser, laserG;
var tiros = 1;
var enemy, enemyG;
var gamestate = "play";
var score = 0;
function preload(){
//fundoImg = loadImage("");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 //fundo = createSprite();
 nave = createSprite(120,200, 102, 102);
 laserG = new Group(); 
 enemyG = new Group();


}

function draw() {
 background("black")
 drawSprites()

 //movimento da nave;
 if(keyDown("up") && gamestate == "play"){
     nave.y = nave.y - 10;
 }
 if(keyDown("down") && gamestate == "play"){
     nave.y = nave.y + 10;
 }
//gerar laser
 if(keyDown("space") && tiros > 0){
     GerarL();
     tiros = tiros - 1;
 }
 if(frameCount % 100 == 0 && tiros < 1 && gamestate == "play"){
     tiros = tiros + 1;
 }
 if(frameCount % 150 == 0 && gamestate == "play"){
 GerarE();  
}

if(laserG.isTouching(enemyG)&&gamestate == "play"){
    laserG.destroyEach();
    enemyG.destroyEach();
    score = score + 1;
}
if(enemyG.isTouching(nave)){
    gamestate = "end";
}


 //fundo.scale = 
 text(x =  mouseX, 120,20);
 text(y =  mouseY, 120,50);
 text(tiros, 400,50);
 text(score, 500,50);
 if(gamestate == "end"){
     text("Fim de Jogo", windowWidth/2, windowHeight/2);
 }
 //nave.x = mouseX;
 //nave.y = mouseY


 
}
function GerarL(){
 //gerar os lasers
 laser = createSprite(nave.x + 30, nave.y, 100,20);
 laser.velocityX = 30;
 //laser.addImage();
 laser.lifetime = 90;
 laserG.add(laser);
}
function GerarE(){
 //gerar os inimigos
 enemy = createSprite(1500, random(0, windowHeight), 50,50);
 enemy.velocityX = -10;
 enemy.lifetime = 200;
 enemyG.add(enemy);

}