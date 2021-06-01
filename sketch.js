var bunny 
var carrot
var obs1
var obs2
var obs3
var obs4
var obs5
var edges
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  bunny=createSprite(50,550,21,20);
  carrot=createSprite(570,40,41,40);
  carrot.shapeColor="pink";
  obs1=createSprite(100,300,140,20);
  obs1.shapeColor="brown";
  obs2=createSprite(300,300,140,20);
  obs2.shapeColor="brown";
  obs3=createSprite(500,300,140,20);
  obs3.shapeColor="brown";
  obs4=createSprite(150,400,140,20);
  obs4.shapeColor="brown";
  obs5=createSprite(450,400,140,20);
  obs5.shapeColor="brown";
  obs4.velocityX=3;
  obs5.velocityX=-3;
  edges=createEdgeSprites()
}

function draw() {
  background("green");
  if (keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if (keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if (keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if (keyDown("right")){
    bunny.x=bunny.x+3;
  }
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  obs5.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]);
  if(bunny.isTouching(carrot)){
    text("You Won",200,200);
  }
  if(bunny.isTouching(obs1)){
    text("You Lose",200,200);
    bunny.x=50;
    bunny.y=550;
  }
  if(bunny.isTouching(obs2)){
    text("You Lose",200,200);
    bunny.x=50;
    bunny.y=550;
  }
  if(bunny.isTouching(obs3)){
    text("You Lose",200,200);
    bunny.x=50;
    bunny.y=550;
  }
  if(bunny.isTouching(obs4)){
    text("You Lose",200,200);
    bunny.x=50;
    bunny.y=550;
  }
  if(bunny.isTouching(obs5)){
    text("You Lose",200,200);
    bunny.x=50;
    bunny.y=550;
  }



  
  drawSprites() 
  
}
