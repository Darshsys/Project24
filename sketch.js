var binSide1,binSide2,binGround;
var ground,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	binSide1=createSprite(550,610,20,100,{isStatic:true});
	binSide2=createSprite(750,610,20,100,{isStatic:true});
	binGround=createSprite(650,650,200,20,{isStatic:true});
	binSide1.shapeColor=rgb(255);
	binSide2.shapeColor=rgb(255);
	binGround.shapeColor=rgb(255);

	ground=createSprite(width/2, height-35, width,10);
	ground=shapeColor=rgb(255,255);
	paper=createSprite(ellipse(100,600,55,55));


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  binSide1.display();
  binSide2.display();
  binGround.display();
  paper.display();
  
  keyPressed(); 
}


function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paperObject.body.position,{x:85,y:85});
	}


}