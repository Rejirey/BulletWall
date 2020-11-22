var bullet, wall;
var thickness;
var weight, speed;
var damage;


  
  
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83)

  bullet = createSprite(50,200,50,5);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey";

  bullet.velocityX = speed;
  bullets = 0.5 * weight * speed * speed;
  wallness= thickness * thickness * thickness;
}

function draw() {
  background(1,1,1);  
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0
    if(bullets / wallness > 10){
      wall.shapeColor = "green";
    }
    if(bullets / wallness < 10){
      wall.shapeColor = "red";
    }
  }
  
  drawSprites();
}