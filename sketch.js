
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var paper,
//var ground,
var side1,side2,side3
var dustbin,waste


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	paper = new Paper(100,500,20)
	ground = new Ground(400,680,800,20)
	//side1 = new Dustbin(750,610,20,70)
	//side2 = new Dustbin(600,610,20,70)
	//side3 = new Dustbin(675,655,170,20)
	dustbin = new Dustbin(600,493,190,180)
	
	
	

	

//waste = createSprite(964,520,10,10)
//waste.addImage(dustbinImg)
//waste.scale = 0.45

	
	

	//dustbinImg = new Dustbin(600,610,10,10)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
 // side1.display()
  //side2.display()
 // side3.display()
  ground.display()
  paper.display()
  dustbin.display()
  //waste.display()
  
  
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-95})
	}
}


