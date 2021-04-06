var fixedRect, movingRect;
var o1,o2,o3,o4;
var b3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1=createSprite(300,300,40,90);
  o1.shapeColor="blue";

  o2=createSprite(500,400,40,40);
  o2.shapeColor="red";

  o3=createSprite(600,600,60,100);
  o3.shapeColor="white";

  o4=createSprite(400,300,50,50);
  o4.shapeColor="purple";

  b3=createSprite(0,300,40,90);
  b3.velocityX=2;
  b3.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(b3,o1)
if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="brown";
  
}
 else{
  movingRect.shapeColor="pink";
  fixedRect.shapeColor="orange";
 } 
 if(isTouching(movingRect,o1)){
   movingRect.shapeColor="cyan";
   o1.shapeColor="cyan";
 }
 else{
  movingRect.shapeColor="pink";
  o1.shapeColor="tomato";
 }
 if(isTouching(movingRect,o2)){
  movingRect.shapeColor="indigo";
  o2.shapeColor="indigo";
}
else{
 movingRect.shapeColor="pink";
 o2.shapeColor="tomato";
}
if(isTouching(movingRect,o3)){
  movingRect.shapeColor="indigo";
  o3.shapeColor="indigo";
}
else{
 movingRect.shapeColor="pink";
 o3.shapeColor="tomato";
}
if(isTouching(movingRect,o4)){
  movingRect.shapeColor="indigo";
  o4.shapeColor="indigo";
}
else{
 movingRect.shapeColor="pink";
 o4.shapeColor="tomato";
}

  drawSprites();
}
