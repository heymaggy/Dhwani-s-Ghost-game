
    var ruinsBgSp;
    var ghost, ghostSp;
    var ground;
    var obs, obsGroup,obsImg,evGroup;
    var edges;
    var p = 0;
    var points, pointGroup;
    var livess = 3;
    var gameState = 0;
    var goImg
    var end, en;
    var spawn, eviGroup;
    var pImg;
    var scyImg;
    var myAudio = new Audio ('uwa.mp3');

function preload(){
ruinsBgSpI = loadImage("ruinsBg.png")
   ghostSp = loadImage("ghost3.png")
   obsImg = loadImage("obs3.jpg")
   goImg = loadImage("gameOver.png")
   pImg = loadImage("soul.png")
   scyImg = loadImage("scythe.png");
   //myAudio = loadSound('uwa.mp3');

}




function setup(){
    createCanvas(2000,1000);
   createEdgeSprites();
    p=0;
    life=0
    ruinsBgSp = createSprite(width/2,height/2,width,100);
    ruinsBgSp.addImage(ruinsBgSpI);
    ruinsBgSp.velocityX = -6;
    ghost = createSprite(170,170,70,70);
    ghost.addImage(ghostSp);
    ghost.scale = 0.1
    ground = createSprite(width/2,height,width,10);
    ground.visible = false;

    en = createSprite(1000,500,3000,3000)
    en.shapeColor= "black"
    end = createSprite(1000,500,3000,3000)
    end.addImage(goImg);
    
    obsGroup = createGroup();
    pointGroup = createGroup();
    evGroup = createGroup();
    eviGroup = createGroup();
    edges = createEdgeSprites();
   /* if(gameState === 0){
        var myAudio = new Audio('uwa.mp3');
        myAudio.play();
    }
    */
}


function draw(){
background("black")
ghost.velocityY = ghost.velocityY + 1
//ghost.depth = ruinsBgSp.depth
//ghost.depth = ghost.depth + 1
ghost.collide(edges[2])
ghost.collide(edges[0])
ghost.collide(edges[1])


if(gameState === 0){

    //myAudio.play(); 
    //myAudio.play();

    en.visible = false;
    end.visible = false;

    if(ruinsBgSp.x<0){
        ruinsBgSp.x= ruinsBgSp.width/2;
    }
    
    if(keyDown("space")){
        ghost.velocityY = -10;
    }
    
    
    if(keyDown(RIGHT_ARROW)){
        ghost.x = ghost.x+8;
    }
    
    if(keyDown(LEFT_ARROW)){
        ghost.x = ghost.x-8;
    }

if(ghost.isTouching(pointGroup)){
    p = p + 1;
    pointGroup.destroyEach();
    
}

if(ghost.isTouching(evGroup)){
    livess = livess - 1;
    evGroup.destroyEach();
    
}
if(ghost.isTouching(eviGroup)){
    livess = livess - 1;
    eviGroup.destroyEach();
    
}

if(ghost.y > 910 ){

    ghost.y = 100;  
    ghost.velocityY=0;
    livess = livess - 1
}
    obstacles();
    score();
    ev();
    eevi();


      
if(livess === 0){
    gameState = 1;
}

}
 else if(gameState === 1){
    obsGroup.destroyEach();
    pointGroup.destroyEach();
    evGroup.destroyEach();
    eviGroup.destroyEach();
    en.visible = true;
    end.visible = true;

   

    if(keyDown("r")){
        console.log(gameState)
        livess = 4;
        p = 0;
       gameState = 0;
    }
}

    //ghost.collide(ground);
    drawSprites();
    fill("white");
    textSize(30);
    text("Score: " + p, 30,50)

    fill("white")
    textSize(30);
    text("Lives: " + livess, 30,100)
if(gameState === 1){
    fill("white");
    textSize(30);
    text("press r to restart", 910,650);
   
}
    ghost.collide(obsGroup);
    //ghost.collide(edges[2]);
     
}

function obstacles(){
    if(frameCount % 55 === 0){
        var obs = createSprite(2000,random(700,900),70,20)
        obs.velocityX = -6
        obsGroup.add(obs);
        obs.lifetime  = 2000/6;
        obs.scale = 0.5
        obs.addImage(obsImg)
        

    }
    
}
function score(){
    if(frameCount % 210 === 0){
        
        points =  createSprite(2000,random(100,700),20,20)
        points.addImage(pImg)
        points.scale = 0.05
        points.velocityX = -6
        points.lifetime  = 2000/6;
        console.log("points created")
        pointGroup.add(points)
        

    }
    
}
function ev(){
    if(frameCount % 240 === 0){
        spawn = createSprite(2000,random(100,900),10,10)
        spawn.velocityX = -6
        evGroup.add(spawn);
        spawn.lifetime  = 2000/6;
        //ev.scale = 0.5
        spawn.addImage(scyImg)
        spawn.scale = 0.5
        spawn.setCollider("rectangle", 0, 0,200,200);
       // spawn.debug = true;
        

    }
    
}

function eevi(){
    if(frameCount % 240 === 0){
        spawner = createSprite(2000,random(100,900),10,10)
        spawner.velocityX = -6
        eviGroup.add(spawner);
        spawner.lifetime  = 2000/6;
        //ev.scale = 0.5
        spawner.addImage(scyImg)
        spawner.scale = 0.5
        spawner.setCollider("rectangle", 0, 0,200,200);
      //  spawner.debug = true;
        

    }
    
}
