var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  thickness=random(22,83);
  speed=random(223,321)
  weight=random(30,52)

  bullet=createSprite(50,200,30,30);
  bullet.velocityX = speed;
 bullet.shapeColor=0;
 

 wall=createSprite(600,200,thickness,height/2);
 wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255); 
  drawSprites(); 

  
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);

    }

  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
  
  }
  
  
}

function hasCollided(lbullet, lwall)
  {
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }

    return false;

  }