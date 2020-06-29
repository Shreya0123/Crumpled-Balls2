class Ball  {
    constructor(x, y,radius) {
      var options = {
          
          'restitution':0.3,
          'friction':3.0,
          'density':2.5,
           'isStatic' : true
      }

      this.image = loadImage("sprites/paper.png");
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x,y,(this.radius-20)/2, options);
      
      //this.height = 50;
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      
      //strokeWeight(4);
      stroke("purple");
      fill("purple");
      image(this.image,0, 0,this.radius, this.radius);
      pop();
      //circle(100,670, this.radius);
    }
  };
  