const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body 
var my_engine, my_world, ball, rect1, rect2, rect3, rect4 
function setup(){
    var canvas = createCanvas(800,400)
    my_engine = Engine.create()
    my_world = my_engine.world
    var stat_option={
        isStatic:true,
    }
    var stat_option2={
        isStatic:true,
        angle:-60
    }
    var jump_option={
        restitution:1.3,
    }
    rect1 = Bodies.rectangle(200,300,40,70)
    World.add(my_world, rect1)
    rect2 = Bodies.rectangle(300,300,40,70)
    World.add(my_world, rect2)
    rect3 = Bodies.rectangle(width/2,height-10,width,30,stat_option)
    World.add(my_world, rect3)
    rect4 = Bodies.rectangle(450,350,20,30, stat_option2)
    World.add(my_world, rect4)
    ball = Bodies.circle(450,100,20, jump_option)
    World.add(my_world, ball)
}
function draw(){
    background("lightgreen")
    Engine.update(my_engine)
    fill("yellow")
    rectMode(CENTER)
    rect(rect1.position.x,rect1.position.y,40,70)
    fill('red')
    rect(rect2.position.x,rect2.position.y,40,70)
    fill('brown')
    rect(rect3.position.x,rect3.position.y,width,30)
    fill('red')
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y, 13)
    console.log(rect1)
    push()
    fill('blue')
    rectMode(CENTER)
    angleMode(DEGREES)
    translate(rect4.position.x,rect4.position.y)
    rotate(-15)
    rect(0,0,50,10)
    pop()
}