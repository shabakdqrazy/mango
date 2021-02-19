class Stone{
    constructor(x,y,width,height){
     var options={
        isStatic:false,
        restitution:0,
        friction:1,
        desity:1.2
     }
     this.body = Bodies.rectangle(x,y,width,height)
     this.width = width
     this.height = height
     this.image = loadImage("image/stone.png")
     World.add(world, this.body);

     

     

    }   
}