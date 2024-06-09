function setup() {
  createCanvas(400, 400);
  //colorMode(HSB,360,100,100)
  background (0);
  noStroke();
  for (var i=0; i < 10; i+=1) { 

    fill(36*i, 100, 100);

    rect(width/10*i, 0, width/10, height); 

}
}


