class Box {
  constructor(x, y, width, height,color) {
    var options = {
        'restitution':0,
        'friction':1.0,
        'density':1.0,

      }

    this.width = width;
    this.height = height;
    this.color=color; 
    this.body = Bodies.rectangle(x, y, width, height,color, options);
    this.Visibility=255;
    
    //this.image = loadImage("box.png");
    World.add(world, this.body);
  }
  display(){
    
    if (this.body.speed<6){
    var angle=this.body.angle;  
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(this.color);
    
    rect(0,0, this.width, this.height);
    pop();
    
     
  }
 else{
    
    World.remove(world,this.body);

    push();
    this.Visibility=this.Visibility-5;
    tint(255,this.Visibility);
   // imageMode(CENTER);
    //image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
    rectMode(CENTER);
    rect(999,999,this.width,this.height);
    
    pop();
    
  }
  
  
}
 

};
