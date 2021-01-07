const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball, dustleft, dustright, dustdown, groundline;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
    
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//Create the Bodies Here.
	paperball = new Paper(250,100,25);
	groundline = new Ground(500,390,1000,10)
	dustleft = new Dustbin(680,326.5,20,95);
	dustdown = new Dustbin(797,375,250,20)
	dustright = new Dustbin(914,326.5,20,95)

	keyPressed();
}


function draw() {
 // rectMode(CENTER);
  background(0);
  paperball.display();
  groundline.display();
  dustright.display();
  dustleft.display();
  dustdown.display();
 }

 function keyPressed(){
	 if (keyCode === 38){
		 Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
	 }
 }



