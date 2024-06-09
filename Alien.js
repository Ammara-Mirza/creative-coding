
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw alien body
  fill(255, 153, 255); // green color
  ellipse(200, 300, 200, 200); // body
  
  // Draw alien head
  fill(150, 150, 200); // blue color
  ellipse(200, 200, 100, 100); // head
  
  // Draw alien eyes
  fill(255); // white color
  ellipse(180, 180, 30, 30); // left eye
  ellipse(220, 180, 30, 30); // right eye
  
  // Draw alien pupils
  fill(0); // black color
  ellipse(180, 180, 15, 15); // left pupil
  ellipse(220, 180, 15, 15); // right pupil
  
  // Draw alien mouth
  noFill(); // no fill
  stroke(0); // black color
  arc(200, 220, 50, 40, 0, PI); // mouth
  
  }
