var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(550,550);
  
  monkey = createSprite(80,400,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
  
  
  
}


function draw() {
  
  background(250);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score, 380, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time :" + survivalTime, 180, 50);
  
  ground = createSprite(400,435,600,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  if(keyDown("space") && monkey.y >= 389 ) {
    monkey.velocityY = -18;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  drawSprites();
}

function food() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(200, 280));
    banana.velocityX = -8;
    banana.lifetime = 69;
    foodGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount % 100 === 0) {
    var stone = createSprite(400,392,20,20);
    stone.addImage(obstacleImage);
    stone.scale = 0.2;
    stone.velocityX = -12;
    stone.lifetime = 46;
  }
}






