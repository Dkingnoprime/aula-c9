var quadrado 

function setup() {
  createCanvas(400, 400);
  quadrado=createSprite(200,200,30,30);
}

function draw() {
  background("black");
  if (keyDown("w")) {
    quadrado.y=quadrado.y -2
  }
  if (keyDown("a")) {
    quadrado.x=quadrado.x -2
  }
  if (keyDown("s")) {
    quadrado.y=quadrado.y +2
  }
  if (keyDown("d")) {
    quadrado.x=quadrado.x +2
  }
  drawSprites();
}