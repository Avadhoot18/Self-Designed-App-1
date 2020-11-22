var form;
var name,email;
var paper1,paper2,paper3,paper4;

function setup() {
  createCanvas(800,400);
  form = new Form();
}

function draw() {
  background(255,255,255);  
  form.display();
  drawSprites();
}