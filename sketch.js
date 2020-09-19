var cow, moon, zone, go = false,
    ground, space, space2, space3;
var cowPic, moonPic, spacePic;
var moonGroup, cowGroup, gameState = "play";
var score = 0;

function preload() {
    cowPic = loadImage("cow_still.png");
    moonPic = loadImage("moon.png");
    spacePic = loadImage("space.jpg");
}

function setup() {

    createCanvas(600, 400);

    //sprites
    space = createSprite(300, 300, 800, 400);
    space2 = createSprite(600, 300, 800, 400);
    space3 = createSprite(900, 300, 800, 400);
    //image
    space.addImage(spacePic);
    space2.addImage(spacePic);
    space3.addImage(spacePic);
    //height

    cow = createSprite(50, 365, 50, 50);
    cowGroup = createGroup();

    cow.addImage(cowPic);

    ground = createSprite(20, 420, 70, 40);

}

function draw() {
    background(0);

    if (gameState === "play") {
        space.velocityX = -5 - score / 100;
        space2.velocityX = -5 - score / 100;
        space3.velocityX = -5 - score / 100;
        space.scale = 600 / space.height;
        space2.scale = 600 / space2.height;
        space3.scale = 600 / space3.height;
        if (space.x < -(space.width / 2)) {
            space.x = space.width * 1.5;
        }
        if (space2.x < -(space.width / 2)) {
            space2.x = space2.width * 1.5;
        }
        if (space3.x < -(space.width / 2)) {
            space3.x = space.width * 1.5;
        }
        cow.velocityY += 0.9;
        cow.scale = 0.2;
        cow.collide(ground);
        moons();
        //zone = createSprite(cow.x, cow.y, cow.width, cow.height);
        //zone.scale = cow.scale;
        if (keyDown("space") && (cow.y > 350)) {
            cow.velocityY = -20;
        }
        /* if (cow.isTouching(moon)) {
             space.velocityX = 0;
             space2.velocityX = 0;
             space3.velocityX = 0;
             cow.velocityY = 0;
         }*/
        if (frameCount % 15 === 0) {
            score += 1;
        }

    }
    textSize(23);
    fill("gold");
    drawSprites();

    text("Score: " + score, 360, textSize());

    if (keyDown("space") === false && go === false) {
        textSize(30);
        textAlign(CENTER);
        text("Press \'Space\' to jump", 300, 200);
    }
    if (keyDown("space")) {
        go = true;
    }
}
//other functions
function moons() {
    if (frameCount % 100 === 0) {
        //moon
        moon = createSprite(600, 340, 40, 20);
        moon.addImage(moonPic);
        moon.scale = 70 / moon.height;
        moon.velocityX = space.velocityX - 5;
        moon.lifetime = canvas.width / abs(space.velocityX);
        //

        /*zone = createSprite(moon.x, moon.y, moon.width, moon.height);
        zone.scale = moon.scale;
        zone.velocityX = moon.velocityX;
        zone.visible = false;*/


    }
}