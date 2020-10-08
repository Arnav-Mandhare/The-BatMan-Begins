const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var drop = [];

function preload(){
    
}

function setup(){
    createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;
    
    boy = new Umbrella(350,350,100,100);
}

function draw(){

    background("black");

    boy.display();

    if(frameCount%5==0){
        drop.push(new Drops(random(width/2-30, width/2+30), 10,10));
        
      }
    
     for (var j = 0; j < 400; j++) {
      
       drop[j].display();
      }
    
}   

