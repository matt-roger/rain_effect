class Rain{

  constructor(){
    this.x = random(width);
    this.y = random(-200, -100);
    this.yspeed = random(4,10);
    this.r = random(1,4);
  }//end of constructor
  
  render(){
    stroke('white');
    strokeWeight(this.r)
    line(this.x,this.y,this.x,this.y+10);
  }//end of render
  
  fall(){
    this.y = this.y + this.yspeed;  
    this.yspeed = this.yspeed + gravity
    
    if(this.y > random(height-(height/6),height-(height/7)) + this.r){
      this.y = random(-200, -100);
      this.yspeed = random(4,10)
    }//end of if
  }//end of fall

}