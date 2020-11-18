const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World= Matter.World

var engine;
var world;
var particles = []
var plinkos=[]
var bounds=[]
var b1,b2;
var particle
var plinko
var rows=10;
var cols=11;

function setup() {
  createCanvas(700,800);
  // createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world = engine.world;
  newparticle();
  world.gravity.y=2;
  var spacing = width/cols
  for(j = 0 ; j < rows ; j++){
    for(i = 0 ; i < cols + 1 ; i++ ){
      var x = i * spacing
      if( j % 2 === 0){
        x += spacing/2
      }
      var y = spacing + j * spacing 
      plinko = new Plinko(x , y , 10)
      plinkos.push(plinko)
    }
  }

  b1 = new Boundary(width/2,height+50,width,100);
  bounds.push[b1]
 
  for(i = 0 ; i < cols + 1 ; i++ ){
  var x = i*spacing-5
  var h = 100
  var w = 10
  var y = height - h/2
  b2 = new Boundary(x , y , w ,h)
  bounds.push(b2)
  }
  
}

function newparticle(){
  particle = new Particles(270,50,13);
  particles.push(particle)
}

function draw() {
  background("black");  
  if(frameCount % 60 === 0){
  newparticle();    
  }
  Engine.update(engine);
  for(i=0 ; i<particles.length ; i++){
  particles[i].display();
  }
  for(i=0 ; i<plinkos.length ; i++){
    plinkos[i].display();
    }
    for(i=0 ; i<bounds.length ; i++){
      bounds[i].display();
      }
  // b.display();  
  drawSprites();
}
