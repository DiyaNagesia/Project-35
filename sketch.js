var database, position;
var balloon,balloonImage1,balloonImage2;


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function setup() {
  database=firebase.database();
  console.log(database)
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.04;

  var ballonPosition = database.ref("balloon/height")
  ballonPosition.on("value",readPositon,showError)

}


function draw() {
  background(bg);
  
  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0)
    balloon.addAnimation("HotAirBallon",balloonImage2)

  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0)
    balloon.addAnimation("HotAirBalloon",balloonImage2)

  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10)
    balloon.addAnimation("HotAirBalloon",balloonImage2)
    balloon.scale = ballon.scale -0.01
 
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,10)
    balloon.addAnimation("HotAirBalloon",balloonImage2)
    balloon.scale = balloon.scale +0.01

  }

  drawSprites();
}

function undateHeight(x,y){
  database.ref("balloon/height").set({
    "x" : height.x + x,
    "y" : height.y + y
  })
}
function readHeight(data){
  height = data.val()
  console.log(height)
  balloon.x = height.x
  ballon.y = height.y
}
function showError(){
  console.log("Error in writing to the database")
}
