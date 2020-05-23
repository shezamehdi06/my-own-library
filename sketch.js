var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(200,500,30,40);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(350,250,40,30);
  object2.shapeColor = "green";
  object2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  
  bounceOff(movingRect,fixedRect);

  object2.x=mouseX;
  object2.y=mouseY;

  if(isTouching(object1,object2)){
    object1.shapeColor="red";
    object2.shapeColor="red";
  }

  else{
    object1.shapeColor="green";
    object2.shapeColor="green";
  }
  drawSprites();
}


