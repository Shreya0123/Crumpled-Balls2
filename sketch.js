var paperImg, DustbinImg
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;
//var paperImg, trashImg;

function preload()
{
	paperImg = loadImage("sprites/paper.png");
	DustbinImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	ground = new Ground(400,370,800,20);
	//stroke("white");

	ball = new Ball(80,350,30);

	rectangle1 = new Rectangles(600,270,135,200);
	//stroke("red");
	//rectangle2=new RedRectangle(550,319,30,40);
	//stroke("red");
	//rectangle3=new RedRectangle(650,319,30,40);
	//stroke("red");
	
	//ball.isStatic  false

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 
	 var render = Render.create(
		 { element: document.body,
			 engine: engine,
			  options: { width: 1600, height: 700, wireframes: false }
			 });
     
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  ball.display();
  rectangle1.display();
  //rectangle2.display();
  //rectangle3.display();

//keyPressed();

  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === "UP_ARROW"){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});
		
	}
}


