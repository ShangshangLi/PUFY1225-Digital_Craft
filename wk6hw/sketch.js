function setup() {
  createCanvas(960, 540);
}

function draw() {
  background(0);
  for(var i=0; i<width;i++)
    {
      rect(i,i,i,i,random(50,200),random(50,200),random(50,200));
    }
}