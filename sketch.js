var radius = 50;
var angle = 0;
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0;
var angle5 = 0;
var angle6 = 0;
var angle7 = 0;
var pspeed = 1;

var centerX = 790;
var centerY = 375;

function setup() { 
  createCanvas(1580, 730);
}

function draw() { 
  background(40);
  drawSprites();
  console.log(World.frameRate);
  World.frameRate =45;
  //Sun
  fill(255,255,0);
  ellipse(centerX, centerY, frameCount);
  //Mercury
  var x = centerX + radius * cos(angle);
	var y = centerY + radius * sin(angle);
  fill(219,206,202);
  ellipse(x, y, 10);
  angle = angle + pspeed;
  //Venus
   var x = centerX + (radius+40) * cos(angle1);
   var y = centerY + (radius+40) * sin(angle1);
   fill(125,139,20);
   ellipse(x, y, 15);
   angle1 = angle1 + (pspeed-1.8);
   //Earth
   var x = centerX + (radius+80) * cos(angle2);
   var y = centerY + (radius+80) * sin(angle2);
   fill(88,66,37);
   ellipse(x, y, 15);
   angle2 = angle2 + (pspeed-0.3);
   //Mars
   var x = centerX + (radius+120) * cos(angle3);
   var y = centerY + (radius+120) * sin(angle3);
   fill(125,35,45);
   ellipse(x, y, 13);
   angle3 = angle3 + (pspeed-0.4);

   //Jupiter
   var x = centerX + (radius+160) * cos(angle4);
   var y = centerY + (radius+160) * sin(angle4);
   fill(255,204,0);
   ellipse(x, y, 25);
   angle4 = angle4 + (pspeed-0.5);
   //Saturn
   var x = centerX + (radius+200) * cos(angle5);
   var y = centerY + (radius+200) * sin(angle5);
   fill(67,37,29);
   ellipse(x, y, 23);
   angle5 = angle5 + (pspeed-0.6);
   //Uranus
   var x = centerX + (radius+240) * cos(angle6);
   var y = centerY + (radius+240) * sin(angle6);
   fill(5,59,72);
   ellipse(x, y, 19);
   angle6 = angle6 + (pspeed-0.7);
   //Neptune
   var x = centerX + (radius+280) * cos(angle7);
   var y = centerY + (radius+280) * sin(angle7);
   fill(0,42,50);
   ellipse(x, y, 20);
   angle7 = angle7 + (pspeed-0.8);
   
} 
