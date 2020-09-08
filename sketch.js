function setup() {
  createCanvas(800,400);
 fix= createSprite(400, 200, 50, 50);
 moving=createSprite(200,200,50,50);
}

function draw() {
  background(0,0,0);
  moving.y=World.mouseY;
  moving.x=World.mouseX;
  if ((moving.x-fix.x<=moving.width/2+fix.width/2)&&(fix.x-moving.x<=moving.width/2+fix.width/2)&&(moving.y-fix.y<=moving.height/2+fix.height/2)&&(fix.y-moving.y<=moving.height/2+fix.height/2)){
    moving.shapeColor="red";
    fix.shapeColor="green";
  }
  else{
    moving.shapeColor="gray";
    fix.shapeColor="gray";
  }
  drawSprites();
}