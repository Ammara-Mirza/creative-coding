let mic;
let colors = [
  //array of bright colors
   "#ff5733",
   "#ffb033",
   "#dbff33",
   "#75ff33",
   "#33ff57",
   "#009933",
   "#3375ff",
   "#5733ff",
   "#bd33ff"
  ];

function setup() {
  createCanvas(800, 600); //canvas size
  background("#e0ffff") // bright bg color
  mic = new p5.AudioIn(); // audio from mic
  mic.start();
}

function draw() {
let micLevel = mic.getLevel() * height * 3;
// audio  increases 
 fill(random(colors));  
 noStroke();
 square(mouseX, mouseY, micLevel);
}
