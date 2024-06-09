let car;// variable to hold the car object

function setup() {
  createCanvas(800, 600);
  car = new Car (width / 2, height / 2);
}

function draw() {
  background(200); // grey bg
  car.display();
  car.update();
}

class Car {
  constructor (x,y) {
    this.x=x;
    this.y=y;
    this.speed = 2;
  }
  
  
  update() {
    if (keyIsDown(LEFT_ARROW)) {
    this.x -= this.speed;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
    this.x += this.speed;
    }
    
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    
    if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
        }
  }
  
  display() {
    // draw the car body
    stroke(0);
    strokeWeight(2);
    fill(0, 0, 255);
    beginShape();
    vertex(this.x,this.y);
    vertex(this.x + 140, this.y);
    vertex(this.x + 150, this.y + 20);
    vertex(this.x + 150, this.y + 60);
    vertex(this.x, this.y + 60);
    endShape(CLOSE);
    
    //the car roof
    fill(0, 0, 200);
    beginShape();
    vertex(this.x + 20, this.y);
    vertex(this.x + 120, this.y);
    vertex(this.x + 100, this.y - 30);
    vertex(this.x + 40, this.y - 30);
    endShape(CLOSE);
    
    // draw the car windows
    fill(135,206,250);
    beginShape();
    vertex(this.x + 30, this.y);
    vertex(this.x + 110, this.y);
    vertex(this.x + 100, this.y - 20);
    vertex(this.x + 40, this.y - 20);
    endShape(CLOSE);
    
    // draw the shiney bumpers
    fill(192, 192, 192);
    rect(this.x - 10, this.y + 20, 10,30,5); // front bumper
    rect(this.x + 150, this.y + 20, 10, 30, 5); // rear bumper
    
    // draw the wheels
    fill(0);
    ellipse(this.x + 30, this.y + 70, 30, 30);
    ellipse(this.x + 120, this.y +70, 30, 30);
    
    //draw rims
    fill(192, 192, 192);
    ellipse(this.x + 30, this.y +70, 15, 15);
    ellipse(this.x + 120, this.y + 70, 15, 15);
   
    // add headlight
    fill(255, 255, 0);
    ellipse(this.x, this.y + 20, 10, 10);
    ellipse(this.x, this.y + 40, 10, 10);
    
    //add taillights
    fill(255, 0, 0);
    ellipse(this.x, this.y + 20, 10, 10);
    ellipse(this.x, this.y + 40, 10, 10);
    
    // add highlight for better visibility 
    fill(255, 255, 255, 150);
    rect(this.x + 5, this.y + 5, 130, 5, 5);
    rect(this.x + 5, this.y, 5, 5, 50, 5);
    
    //add shadows for depth
    fill(50, 50, 50, 150);
    noStroke();
    rect(this.x + this.y +60, 130, 10, 10);
    
     }
  }
    
    
    
    
