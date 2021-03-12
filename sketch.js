var PLAY = 1;
var END = 0;
var gameState = PLAY;


var car,carImage;
var score ;
var ground,grImg,backImg;
var carsGroup;
var obstaclesGroup,obs1,obs2,obs3;


function preload() {
  carImage = loadImage("car2.png");
  grImg = loadImage("track.jpg");
  obstacle1 = loadImage("obs1.png");
  obstacle2 = loadImage("obs2.png");
  obstacle3 = loadImage("obs3.png");
}

function setup() {
  createCanvas(1200,800);
  ground = createSprite(100,390,800,10);
  ground.addImage(grImg);
   ground.x = ground.width/2; 
car = createSprite(100,400);
car.y = 270;
car.addImage(carImage);

  score = 0;
}

function draw() {
  background(0); 
  textSize(30);
  textFont("serif");
  text("SCORE : " + score,500,30 )

  if(gameState === PLAY) {

  score = score + Math.round(getFrameRate()/60);

if(keyDown("RIGHT_ARROW")){
  car.x = car.x +8;

}

if(keyDown("LEFT_ARROW")){
  car.x = car.x -8;
}
ground.velocityX = -8;
if(ground.x < 0) {
  ground.x = ground.width/2;
}

if(keyDown("UP_ARROW")) {
  car.y = car.y -8; 
}


if(keyDown("DOWN_ARROW")) {
  car.y = car.y +8; 
}
spawnObstacles();
}
  drawSprites();
 }

 function spawnCars() {
   
 }
 function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(1250,165,10,40);
    obstacle.y = Math.round(random(200,500));
    obstacle.velocityX = -(9 + score/70);
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
    // obstaclesGroup.add(obstacle);
  }
 }