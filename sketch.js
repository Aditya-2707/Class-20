var rect1,rect2



function setup() {
  createCanvas(800,400);
 rect1= createSprite(20, 200, 50, 50);
 rect1.shapeColor="red"
 rect1.velocityX=5
 rect2= createSprite(400, 200, 50, 50);
 rect2.shapeColor="green"
 rect2.velocityX=-5

}

function draw() {
  background(0); 
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect1.width/2+rect2.width/2){
  rect1.velocityX*=(-1)
  rect2.velocityX*=(-1)
  }
  drawSprites();
}