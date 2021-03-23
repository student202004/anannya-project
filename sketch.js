var ship1,ship2;
var bgImage;

var score=0;
var score1=0;


function preload(){
 bgImage=loadImage("images/background.jpg");
 shipImage=loadImage("images/SC.png");
}

function setup(){
createCanvas(400,400);

    ship1=new Ship(100);
    ship2=new Ship(300);
   
}

function draw(){
    background(bgImage);

    if(ship1.y===20){
        ship1.x=100;
        ship1.y=350;
        score++;
    }

    if(ship2.y===20){
        ship2.x=300;
        ship2.y=350;
        score1++;
    }

    ship1.display();
    ship2.display();

    text("score:" + score,100,390);
    text("score:" + score1,300,390);
    AsteroidsSpawn();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        console.log("hello");
        ship1.y=ship1.y-5;
    }
    if(keyCode=== DOWN_ARROW){
        ship1.y=ship1.y+5;
    }

    if(keyCode===RIGHT_ARROW){
        ship1.x=ship1.x+10;
    }
    if(keyCode=== LEFT_ARROW){
        ship1.x=ship1.x-10;
    }



    if(keyCode===87){
        ship2.y=ship2.y-10;
    }

    if(keyCode=== 83){
        ship2.y=ship2.y+10;
    }

    if(keyCode=== 65){
        ship2.x=ship2.x-10;
    }

    if(keyCode === 68){
        ship2.x=ship2.x+10;
    }
}
 