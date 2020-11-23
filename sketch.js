//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var body1;
var ball, ground;

function setup() {

  createCanvas(400,400);

  //Create our Physics engine
  myEngine = Engine.create();  //myEngine.world

  //Create our game world
  myWorld = myEngine.world;

  //Create a rectangular body
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  //Add the body to our world
  World.add(myWorld,ground);
 
  console.log(ground);
  
  var ball_options = {
    restitution:0.8
  }
  ball=Bodies.circle(200, 100, 20, ball_options);  
  World.add(myWorld,ball);
}
  

function draw() {
  background("black");  

  Engine.update(myEngine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20); 

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20,20);
}

