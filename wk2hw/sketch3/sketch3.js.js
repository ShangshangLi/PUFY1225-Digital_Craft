//The code of the mouse press effect from the examples of p5.js.;
//Here is the link:https://p5js.org/zh-Hans/examples/input-mouse-press.htmll;
function setup() {
  createCanvas(900,900);
  background("black");
  strokeWeight(1);
}

function draw() {
  if (mouseIsPressed) {
    stroke("white");
  } else {
    stroke(98, 213, 249);
  }
  line(mouseX - 20, mouseY, mouseX + 35, mouseY);
  line(mouseX, mouseY - 45, mouseX, mouseY + 30);
}
