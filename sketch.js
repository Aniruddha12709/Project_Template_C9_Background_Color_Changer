var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  btn_red = createbutton("RED);
  btn_red.position(100,50);  
  btn_red.mousePressed(red_bag);
  
  
  btn_green = createbutton("GREEN);
  btn_green.position(250,50);  
  btn_green.mousePressed(green_bag);
}

function draw() {
  background(r,g,b);
}

function red_bag();
{
  r = 255;
  g = 0;
  b = 0;
}

function green_bag();
{
  r = 0;
  g = 255;
  b = 0;
}
  
