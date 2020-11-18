class Particles{
       constructor(x,y,r){
           var options={
               restitution:0.5,
               friction:0
           }
        //    x += random(1,-1)
           this.body=Bodies.circle(x,y,r,options)
           this.color=color(random(0,255),random(0,255),random(0,255))
           World.add(world,this.body)
           this.r=r;
        }
    display(){
        fill(this.color)
        // stroke(255)
        var pos=this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r)
        pop();
    }
}