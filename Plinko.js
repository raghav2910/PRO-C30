class Plinko{
       constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.5,
            friction:0
        }   
        // x+=random(1,-1)
        this.body=Bodies.circle(x,y,r,options)
           World.add(world,this.body)
           this.r=r;
        }
    display(){
        fill(0,255,0)
        stroke(0,255,0)
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        ellipse(0,0,this.r*2)
        pop();
    }
}