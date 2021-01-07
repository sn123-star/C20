var canvas,fixedRect,movingRect;

function setup()
{
 canvas=createCanvas(600,600);
 fixedRect=createSprite(200,200,50,50);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;

 movingRect=createSprite(300,200,50,50);
 movingRect.shapeColor="green";
 movingRect.debug=true;

}

function draw()
{
 background("gold");

 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2)
 {
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
 }
 else
 {
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
 }
 drawSprites();
}