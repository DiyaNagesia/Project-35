var database, position;
var balloon,balloonImage1,balloonImage2,background;


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function setup() {
  database = firebase.database();
  console.log(database)
  createCanvas(1500,700);

  balloon=createSprite(550,450,450,450);
  balloon.addAnimation("balloon",balloonImage1);
  balloon.scale= 0.60;

  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value",readPosition, showError);

}


function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale +0.01
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale -0.01
   
  }
    else if(keyDown(RIGHT_ARROW)){
      balloon.x = balloon.x+10
      balloon.addAnimation("hotAirBalloon",balloonImage2);
    }
     
    
  drawSprites();
}

function updateHeight(x,y){
  database.ref('balloon/Height').set({
    'x' : height.x + x ,
    'y' : height.y + y
  })
}

function readHeight(data){
  height = data.val()
  balloon.x = height.x;
  balloon.y = height.y;
}   

function readPosition(){
}

function showError(){
  console.log("Error in writing to the database")
}
