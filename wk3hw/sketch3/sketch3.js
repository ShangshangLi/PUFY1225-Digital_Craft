function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(0,0,255,0.2*100);
    for(var x = 0; x < width/2; x += 10){
      ellipse(100,100,x,x);
  }
  fill(255,100,200,0.2*100);
    for(var x = 0; x < width-100; x += 10){
      ellipse(300,150,x,x);
  }

  fill(50,100,255,0.2*100);
    for(var x = 0; x < width/3; x += 5){
      ellipse(260,300,x,x);
  }
}
