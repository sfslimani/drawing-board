var xx = 10
var yy = 100
var zz = 20

function setup() {
  createCanvas(1500, 500);
}

function draw() {
  
  //pen
  fill(xx, yy, zz)
  noStroke()
  ellipse(mouseX, mouseY, 15);
  
  xx = xx + .3
  yy = yy - .3
  zz = zz + .3
  
  if (xx >= 255) {
    xx = xx - 0.5;
  }
  
  if (xx <= 10){
    xx = 255;
  }
  
  if (mouseIsPressed){
    fill(255, 255, 255);
    stroke(255, 255, 255);
    ellipse(mouseX, mouseY, 20);
  }  
  
}




