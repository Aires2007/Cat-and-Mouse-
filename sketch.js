var cat;
var catAnimation;
var mouse;
var mouseAnimation;
var bckgrnd;
var bckImg; 

function preload() {

bckImg = loadImage("garden.png")
catAnimation = loadAnimation("cat2.png", "cat3.png");
mouseAnimation = loadAnimation("mouse2.png", "mouse2.png");
catImg1 = loadImage("cat1.png");
catImg2 = loadAnimation("cat4.png");
mouseImg1 = loadImage("mouse1.png");
mouseImg2 = loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    bckgrnd = createSprite(0,0,1000,800);
    bckgrnd.setAnimation(bckImg);
    bckgrnd.scale = 1.5

    cat = createSprite(20,20,800,400);
    cat.addImage(catImg);
    cat.scale = 0.1

    mouse = createSprite(20,20,200,400);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1

}

function draw() {
    background(255);

    if(keyWentDown("LEFTARROW")){
        cat.setAnimation(catAnimation);
        cat.velocityX = -2;
        mouse.setAnimation(mouseAnimation);
    }

    if(keyWentUp("LEFTARROW")){
       cat.addImage(catImg);
       mouse.addImage(mouseImg);
    }

    if(cat.isTouching(mouse)){
     cat.changeAnimation(catImg4);
     mouse.changeAnimation(moouseImg4);
    }
    drawSprites();
}