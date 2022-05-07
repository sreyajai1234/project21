var ghost,ghostImg
var tower,towerImg
var woodImg,woodsGroup,wood
var gameState = "play"
var invisibleBlockGroup, invisibleBlock;

function preload(){
  ghostImg=loadImage("ghost.png")  
  towerImg=loadImage("tower.png")
  woodImg=loadImage("wood.png")

}

function setup() {
  createCanvas(600,600);
  tower = createSprite(300,300);
 tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,20,20);
  ghost.scale = 0.1;
  ghost.addImage("ghost", ghostImg);

  woodsGroup = new Group()
  invisibleBlockGroup = new Group();

  score=0;
 
}

function draw() {
  background(255);
  textSize(20)
  fill("black")
  text("Score: "+ score,30,50);
  if(tower.y > 400 ){
       tower.y = 300
     } 

     if (gameState === "play"){
       if (keyDown("left_arrow")){
         ghost.x=ghost.x-2
       }
       if(keyDown("right_arrow")){
         ghost.x=ghost.x+2
       }
       if(keyDown("space")){
       ghost.velocityY=-5 }
       
       ghost.velocityY = ghost.velocityY + 0.5;
      spawnWoods()


      if(woodsGroup.isTouching(ghost)){
        ghost.velocityY = 0
      }

      if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
        ghost.destroy()
        gameState = "end"
      }
      
      drawSprites()
}
if (gameState === "end"){
  stroke("red");
  fill("red");
  textSize(40);
  text("Game Over", 220,250)
  
}
}
function spawnWoods()
 {
if (frameCount % 260 === 0) {
  var wood = createSprite(100, -50);
  var invisibleBlock = createSprite(100,40);
  invisibleBlock.width = wood.width;
  invisibleBlock.height = 2;
  wood.x=Math.round(random(120,400));
 invisibleBlock.x=wood.x
  wood.addImage(woodImg);
  wood.scale=0.5

  wood.velocityY=1
  invisibleBlock.velocityY=1

  ghost.depth=wood.depth
  ghost.depth=1
  

  wood.velocityY = 1;
  invisibleBlock.velocityY = 1;




wood.lifetime=(300)
invisibleBlock.lifetime=(300)


woodsGroup.add(wood)
invisibleBlock.debug=true
invisibleBlockGroup.add(invisibleBlock)
}
 }
