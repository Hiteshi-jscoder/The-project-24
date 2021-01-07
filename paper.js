class Paper{
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
      //  push();
      //  translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill(255,0,254);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
      //  rotate(angle);
      //  pop();
      }
}