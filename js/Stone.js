class Stone {
constructor(x,y,radius){
var options={
    density:0.0001
};
       
       this.body = Bodies.circle(x, y,radius,options);
       this.radius=radius;
       this.image=loadImage("./assets/stone.png")
       World.add(world, this.body);
       


}
show(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(RADIUS);
    image(this.image,0,0, this.radius,this.radius);
    pop();

}
}