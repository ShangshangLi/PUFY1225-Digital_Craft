//The codes of the 3D primitives are from the examples of p5.js.;
//Here is the link:https://p5js.org/examples/form-3d-primitives.html;

function setup() {
  createCanvas(500, 500,WEBGL);
}

function draw() {
  background("white");
  noFill();
  //fill(0);
  
  for(var x = 0; x < width; x += 100){
    push();
    translate(0, 0);
    rotateY(10+x);
    rotateX(-1+x);
    box(100+x);
    pop();
  }
  

}
