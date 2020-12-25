
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var  circle1,ground;	
var world,sling;

var score = 0;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
    ground= new Ground(600,400,230,20)
 	World.add(world, ground);

box1= new Box(510,370,30,40);
box2= new Box(540,370,30,40);
box3= new Box(570,370,30,40);
box4= new Box(600,370,30,40);
box5= new Box(630,370,30,40);
box6= new Box(660,370,30,40);
box7= new Box(690,370,30,40);
box8= new Box(540,330,30,40);
box9= new Box(570,330,30,40);
box10= new Box(600,330,30,40);
box11= new Box(630,330,30,40);
box12= new Box(660,330,30,40);
box13= new Box(570,290,30,40);
box14= new Box(600,290,30,40);
box15= new Box(630,290,30,40);
box16= new Box(600,250,30,40);

circle1= new Circle(100,200,50);
	
sling = new SlingShot (circle1.body,{x:130,y:200});

Engine.run(engine);
	
  
}


function draw() {
	background("grey");
Engine.update(engine);


  
  circle1.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  ground.display();


  drawSprites();
  textSize(20);
  text("score: " + score, 750, 40);

 
}

function keyPressed() {

  	if (keyCode === 32) {

		Matter.Body.applyForce(circle1,circle1.position,{x:55,y:-75});
		slingshot.attach(circle1.body);
    
  	}


	
	else if (keyCode === LEFT_ARROW) {
  
		boxleftSprite.x=boxleftSprite.x-20;  
		boxrightSprite.x=boxrightSprite.x-20;
		boxBase.x=boxBase.x-20;
	  translation={x:-20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	  
   
 	} else if (keyCode === RIGHT_ARROW) {
		boxleftSprite.x=boxleftSprite.x+20;  
		boxrightSprite.x=boxrightSprite.x+20;
		boxBase.x=boxBase.x+20;
		translation={x:20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	}
  }
	 
   
  function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	
  }

