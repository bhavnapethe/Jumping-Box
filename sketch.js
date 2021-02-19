var FirstRect, SecondRect, ThirdRect, FourthRect;
var FifthRect, SixthRect;
var Box, music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    FirstRect = createSprite(200,570,300,30);
    FirstRect.shapeColor = "green";
    FirstRect.debug = true;
    
    SecondRect = createSprite(400,20,700,30);
    SecondRect.shapeColor = "pink";
    SecondRect.debug = true;
    
    ThirdRect = createSprite(710,564,115,30);
    ThirdRect.shapeColor = "orange";
    ThirdRect.debug = true;
    
    FourthRect = createSprite(500,570,300,30);
    FourthRect.shapeColor = "blue";
    FourthRect.debug = true;
    
    FifthRect = createSprite(24,300,39,555);
    FifthRect.shapeColor = "red";
    FifthRect.debug = true;
    
    SixthRect = createSprite(780,300,35,580);
    SixthRect.shapeColor = "yellow";
    SixthRect.debug = true;

    Box = createSprite(350,350,20,20);
    Box.shapeColor = "black";
    Box.velocityY = +2;
    Box.velocityY = -2;
    Box.velocityX = +2;
    Box.velocityX = -2;

}

function draw() {
    background(rgb(169,169,169));
    
    Box.bounceOff(FirstRect);
    Box.bounceOff(SecondRect);
    Box.bounceOff(ThirdRect);
    Box.bounceOff(FourthRect);
    Box.bounceOff(FifthRect);
    Box.bounceOff(SixthRect);

    Box.bounce(FirstRect);
    Box.bounce(SecondRect);
    Box.bounce(ThirdRect);
    Box.bounce(FourthRect);
    Box.bounce(FifthRect);
    Box.bounce(SixthRect);

    if(isTouching(Box,FifthRect)){
        
    }
    
    drawSprites();
    }