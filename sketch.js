const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var soundp;
var drops=[]
var maxDrops=100
var thu,thug
var thu1,thu2,thu3,thu4
function preload(){
    thu1=loadImage("thunderbolt/1.png")
    thu2=loadImage("thunderbolt/4.png")
    thu3=loadImage("thunderbolt/3.png")
    thu4=loadImage("thunderbolt/2.png")
    soundp=loadSound("thunder2.mp3")
    rain=loadSound("rain-03.mp3")
}

function setup(){
    canvas=createCanvas(displayWidth,1000)
    engine = Engine.create();
    world = engine.world;
   boy=new umbrella(displayWidth/2,displayHeight-30)
   Matter.Body.scale(boy.body,0.05,0.8)
   for(var i=0;i<maxDrops;i++){
    drops.push(new drop(random(0,1000),random(0,100)))
   
    thug=new Group()
}
}

function draw(){
    background("black")
textSize(22)

    text("PRESS CTRL+ALT+I ENJOY",200,20)
    text("THATS i",200,980)
    Engine.update(engine);
 thunder();
    drawSprites()
    boy.display()
    for(var i=0;i<maxDrops;i++){
        drops[i].display()
        drops[i].update();
    }
}   
function thunder(){
    if(frameCount%150===0){
        thu=createSprite(random(0,1200),random(0,100))
        var rand = Math.round(random(1,4));
        var srand=Math.round(random(1,3));
       
soundp.play()
switch(rand){
    case 1:thu.addImage(thu1)
    case 2:thu.addImage(thu4)
    case 3:thu.addImage(thu3)
    case 4:thu.addImage(thu2)
}
switch(srand){
    case 1:soundp=loadSound("thunder.mp3")
    case 2:soundp=loadSound("thunder2.mp3")
    case 3:soundp=loadSound("thunder3.mp3")
}
thu.lifetime=10
thug.add(thu)
    }
}
