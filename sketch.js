function setup() {
  createCanvas(800,400);
  fixed=createSprite(200, 200, 50, 80);
  moving=createSprite(400, 200, 80, 30);
  fixed.shapeColor="green"
  moving.shapeColor="green"
  fixed.debug=true
  moving.debug=true
}

function draw() {
  background("black"); 
  moving.x=World.mouseX
  moving.y=World.mouseY
  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
    fixed.x-moving.x<moving.width/2+fixed.width/2&&
    moving.y-fixed.y<moving.width/2+fixed.width/2&&
    fixed.y-moving.y<moving.width/2+fixed.width/2){

    moving.shapeColor="red"
    fixed.shapeColor="red"
  }
  else{
    moving.shapeColor="green"
    fixed.shapeColor="green"
  }
  drawSprites();
}