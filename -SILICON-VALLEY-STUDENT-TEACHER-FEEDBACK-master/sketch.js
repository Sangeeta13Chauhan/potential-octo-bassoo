var king;
var kinganimation,kingimage,kinganimation2;
var ground;
function preload(){
  kinganimation =loadAnimation("Images/MY GAME FILES/ninja1.png","Images/MY GAME FILES/ninja2.png","Images/MY GAME FILES/ninja3.png","Images/MY GAME FILES/ninja4.png","Images/MY GAME FILES/ninja5.png","Images/MY GAME FILES/ninja6.png");
kingimage = loadImage("Images/MY GAME FILES/ninja7.png")
kinganimation2 = loadAnimation("Images/MY GAME FILES/ninja8.png","Images/MY GAME FILES/ninja9.png","Images/MY GAME FILES/ninja10.png","Images/MY GAME FILES/ninja11.png","Images/MY GAME FILES/ninja12.png")
}

function setup() {
  createCanvas(1200,600);
  king = createSprite(200, 500, 50, 50);
  ground=createSprite(600,590,1200,10);
  king.addImage("king",kingimage);
  king.scale =1.5;
}

function draw() {
  background("black"); 
  edges = createEdgeSprites();

  if(keyWentDown(RIGHT_ARROW)){
    king.addAnimation("king",kinganimation);
  
king.scale =0.9;
  }
  if(keyWentUp(RIGHT_ARROW)){
    king.addImage("king",kingimage);
    king.scale = 1.5;
  }

if(keyDown(UP_ARROW)){
  king.velocityY = -10;
}
  edges = createEdgeSprites();
  king.collide(ground);
 // king.bounceOff(edges[3]);
king.velocityY = king.velocityY +  0.5; 
  drawSprites();
}