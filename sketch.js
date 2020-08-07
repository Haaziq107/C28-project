//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var world,engine;
var paperball;
var box4;
var chain;
function preload() {
    
}

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,680,800,20);
	//Create the Bodies Here.
	box1 = new Box(600,570,200,10);
	box2 = Bodies.rectangle(525,570,20,200,{isStatic:true});
	World.add(world,box2);
	box3 = Bodies.rectangle(675,570,20,200,{isStatic:true});
	World.add(world,box3);
	box4 = Bodies.rectangle(640,660,80,20,{isStatic:true});
	World.add(world,box4);
    paperball= new Paperball(50,660,25);
	chain = new Chain(paperball.body,{x : 200, y : 300 });
	//ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
    //World.add(world, ground);
	Engine.run(engine);
	
	
}


function draw() {
  background(180);
  Engine.update(engine);
  rectMode(CENTER);
  paperball.display();
  ground.display();
  rect(box2.position.x,box2.position.y,20,200);
  rect(box3.position.x,box3.position.y,20,200);
  rect(box4.position.x,box4.position.y,80,20);
  box1.display();
  chain.display();
  drawSprites();
 
}

function  keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:100,y:-100});
}
}

function mouseDragged(){
    Matter.Body.setPosition(paperball.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    chain.fly();
}
