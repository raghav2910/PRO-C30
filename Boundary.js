class Boundary{
       constructor(x,y,w,h){
           var options={
          isStatic:true,
          friction:2     
        }
           this.body=Bodies.rectangle(x,y,w,h,options)
           World.add(world,this.body)
           this.w=w;
           this.h=h;
        }
    display(){
        fill(255)
        stroke(255)
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop();
    }
}