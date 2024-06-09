var numbers = [19, 30, 62, 89, 45, 78,25, 56, 91, 37];

function setup() {
 createCanvas(800, 400);
 colorMode(HSB, 360, 100, 100, 100);
 background(0, 0, 100);
 noStroke();

// Sorting the numbers in descending order
 numbers = numbers.sort(function(a,b) {
 return b - a;
 });

 for (var i = 0; i < numbers.length; i++) {
   var n = numbers[i];
   var x = map(i, 0, numbers.length,0, width);
   var w = width / numbers.length;
   var h = map(n,0, max(numbers), 0, height);
   var y = height - h;
   var c = random(0, 360);  
   var saturation =map(n, 0, max (numbers), 50, 100);
   var brightness =map(n, 0, max (numbers), 50, 100); // Vary brightness based on value
 fill(c, saturation, brightness);
 rect(x, y, w, h);
   }
 } 

