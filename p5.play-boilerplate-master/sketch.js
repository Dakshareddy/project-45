var dragonn,dragonImage1,dragonImage2;
var backgroundImage,bg;

  
function preload(){

  //background
  backgroundImage = loadImage("background.jpg")
  //dragon
  dragonImage1 = loadAnimation("dragon1.png")
  dragonImage2 = loadAnimation("dragon2.png")
}

function setup() {
  createCanvas(1500,700);
  //background
  bg = createSprite(750, 250);
  bg.addImage("backgroundImage",backgroundImage);
  bg.scale = 2.4
  //dragon
dragon1 = createSprite(230,480, 50, 50);
dragon1.addAnimation("drgonImage1",dragonImage1);
dragon1.scale = 0.7


dragon2 = createSprite(1175,480, 50, 50);
dragon2.addAnimation("drgonImage2",dragonImage2);
dragon2.scale = 0.8
  
}

function draw() {
  
  background("yellow");


  drawSprites();
}
