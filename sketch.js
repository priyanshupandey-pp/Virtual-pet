//Create variables here
var dog;
var Food;
var foodS;
var foodStock;
var dog1;
var addFood;
function preload(){
  dog1=loadImage("images/dogimg.png");
 dog2=loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog=createSprite(400,350,30,20)
  dog.addImage(dog1)
  dog.scale=0.3
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  foodStock.set(20)
}


function draw() {  
  background("green")

  fill ("white")
textSize(15)
text("food remaining: "+foodS,170,200)
text("press up arrow to feed the dog: ",130,10,300,20)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dog2)
  }
  drawSprites();
  


  //add styles here
}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  if(x<0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}