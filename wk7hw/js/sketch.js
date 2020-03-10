var pup;
var scribble;

function preload(){
  scribble = loadModel('../assets/tinker.obj', true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  translate(0, 0);
  lx = mouseX - height/2;
  ly = mouseY - width/2;
  noStroke();
  box(50, 50, 50);
}