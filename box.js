class Box 
{
  constructor(x, y, w, h) 
  {
    let options = {
      friction: 0.3,
      
//add the restitution to the box as it does not bounce.

      restitution: 
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    //add the translate function to the body 
    translate();
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
}