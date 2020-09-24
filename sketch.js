var drop = [];
var gravity;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //create 500 drops
  for(var i = 0; i < 500; i++){
    drop.push(new Rain());
  }
  
  gravity = 0.03;
}//end of setup

function draw() {
  background(0);
  
  //ground
  stroke(0);
  fill(80);
  ground = rect(0,height-(height/6),width,height-(height/6));
  
  //render drops
  for(var pel of drop){
    pel.render();
    pel.fall();
  }
}//end of draw