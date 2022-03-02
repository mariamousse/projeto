var backImg;
var nave, naveImg;
var laser, laserG;
var tiros = 1;
var enemy, enemyG;
var pdc, pdcG;
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
 pdcG = new Group();


}

function draw() {
 background("darkblue")
 drawSprites()

 //movimento da nave;

 if(keyDown("up") && gamestate == "play"){
     nave.y = nave.y - 15;
 }
 //if(keyDown("down") && gamestate == "play"){
 //    nave.y = nave.y + 10;
 //}
 nave.velocityY = 2.5;
 nave.velocityX = 0;
 if(keyDown("right") && gamestate == "play"){
     nave.x = nave.x + 7.5;
 }
 if(keyDown("left") && gamestate == "play"){
     nave.x = nave.x - 7.5;
 }
 if(nave.x < 0){
     nave.x = 0;
 }
 if(nave.x > windowWidth){
     nave.x = windowWidth;
 }
 if(nave.y < -102){
     gamestate = "end";
 }
 if(nave.y > windowHeight + 102){
     gamestate = "end";
 }

 //gerar laser
 if(keyDown("space") && tiros > 0){
     GerarL();
     tiros = tiros - 1;
 }
 if(frameCount % 50 == 0 && tiros < 1 && gamestate == "play"){
     tiros = tiros + 1;
 }
 //gerar pedaço
 if(frameCount % 500 == 0){
     GerarP();
 }
 //gerar inimigos
 if(frameCount % 150 == 0 && gamestate == "play"){
 GerarE();  
 }

 //collide/istouching
 if(laserG.isTouching(enemyG) && gamestate == "play"){
    laserG.destroyEach();
    enemyG.destroyEach();
    score = score + 1;
}
 if(enemyG.isTouching(nave)){
    gamestate = "end";
 }

 nave.collide(pdcG);

 //fundo.scale = 
 //text(x =  mouseX, 120,20);
 //text(y =  mouseY, 120,50);
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
 enemy = createSprite(1500, random(50, windowHeight - 50), 50,50);
 enemy.velocityX = -10;
 enemy.lifetime = 200;
 enemyG.add(enemy);

}

function GerarP(){
 pdc = createSprite(1500, random(100, windowHeight - 50), 200,150);
 pdc.velocityX = -5;
 pdc.lifetime = 400;
 pdcG.add(pdc);
}