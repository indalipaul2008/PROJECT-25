class Paper{
    constructor(x,y,radius){
    var options = {
        isStatic:false,
        restitution: 0.2,
        friction:0.3,
        density:1.2, 
    }
    //this.body = Bodies.circle(250,540,20,options)
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius
    //this.width = -33
    this.image = loadImage("images/paper.png")
    World.add(world,this.body)

}

display(){
var pos = this.body.position
//var angle = this.body.angle
imageMode(CENTER)
fill("magenta")
//rotate(angle)
//ellipse(this.body.position.x,this.body.position.y,this.radius)
image(this.image,pos.x,pos.y,this.radius*3,this.radius*3)
}
}