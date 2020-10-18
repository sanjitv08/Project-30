const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, polygon_img, Polygon, stand, stand1, SlingShotObj;
var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, blockk10, blockk11, blockk12, blockk13, blockk14, blockk15, blockk16;

function preload(){
  polygon_img=loadImage("polygon1.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1000,400);
 // createSprite(400, 200, 50, 50);

  ground=new Ground(width/2,390,width,20)
  
     stand=new Stand(390,350,250,10);  
     
    //LEVEL 1
     block1=new Box(300,275,30,40,"lightblue");
     block2=new Box(330,275,30,40,"lightblue");
     block3=new Box(360,275,30,40,"lightblue");
     block4=new Box(390,275,30,40,"lightblue");
     block5=new Box(420,275,30,40,"lightblue");
     block6=new Box(450,275,30,40,"lightblue");
     block7=new Box(480,275,30,40,"lightblue");
     
     
     //LEVEL 2 
      block8=new Box(330,235,30,40,"pink");
      block9=new Box(360,235,30,40,"pink");
      block10=new Box(390,235,30,40,"pink");
      block11=new Box(420,235,30,40,"pink");
      block12=new Box(450,235,30,40,"pink");
     
     
      //LEVEL 3
      block13=new Box(360,195,30,40,"rgb(0,250,200)");
      block14=new Box(390,195,30,40,"rgb(0,250,200)");
      block15=new Box(420,195,30,40,"rgb(0,250,200)");
     
    
     //LEVEL 1
      block16=new Box(390,155,30,40,"gray");

      stand1=new Stand(630,200,200,10);
     
     
      //LEVEL 2 
       blockk8=new Box(560,125,30,40,"rgb(50,100,100)");
       blockk9=new Box(590,125,30,40,"rgb(50,100,100)");
       blockk10=new Box(620,125,30,40,"rgb(50,100,100)");
       blockk11=new Box(650,125,30,40,"rgb(50,100,100)");
       blockk12=new Box(680,125,30,40,"rgb(50,100,100)");
     
      
       //LEVEL 3
       blockk13=new Box(590,80,30,40,"rgb(0,155,200)");
       blockk14=new Box(620,80,30,40,"rgb(0,155,200)");
       blockk15=new Box(650,80,30,40,"rgb(0,155,200)");
      
      
      //TOP
       blockk16=new Box(620,35,30,40,"rgb(100,100,0)");
     
      
     Polygon=Matter.Bodies.polygon(50, 200, 6, 20);
     World.add(world,Polygon);
     
     SlingShotObj=new SlingShot(this.Polygon,{x:100,y:250});
     Engine.run(engine);
   
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  
  ground.display();
  
     imageMode(CENTER);
     
     image(polygon_img,Polygon.position.x,Polygon.position.y,40,40); 
  
   
  //first pyramid
  stand.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //second pyramid
  stand1.display();
  blockk8.display();
  blockk9.display();
  blockk10.display();
  blockk11.display();
  blockk12.display();
  blockk13.display();
  blockk14.display();
  blockk15.display();
  blockk16.display();

  strokeWeight(4)
  fill ("WHITE");
  textSize(16);
  text("Drag and release the HEXAGON to hit the boxes. Press SPACEBAR to have another try!!!",10,30);
  
 
 SlingShotObj.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(this.Polygon, {x:100,y:300})
		SlingShotObj.attach(this.Polygon);
	}
}
function mouseDragged()
{
	Matter.Body.setPosition(this.Polygon, {x:mouseX, y:mouseY}) 
}


function mouseReleased()
{
  SlingShotObj.fly();
 
}