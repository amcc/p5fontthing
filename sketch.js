let myFont;
function preload() {
  myFont = loadFont('fonts/MajorMonoDisplay-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 10);
  textFont(myFont);
  textSize(mouseX*2);
  textAlign(CENTER, CENTER)
  text('AabBcC', width/2,height/2)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}