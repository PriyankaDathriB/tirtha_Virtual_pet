var dog,sadDog,happyDog, database;
var foodObj;

//create feed and lastFed variable here


function preload(){
sadDog = loadImage("Dog.png");
happyDog = loadImage("happy dog.png");
}

function setup() {

  database=firebase.database();
  createCanvas(1000,400);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food();

  //create feed the dog and Add Food buttons here
  

}

function draw() {
  background(46,139,87);
  
  foodObj.display();

  
  drawSprites();
}




 //write code here to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
 
}

//function to add food in stock
function addFoods(){
  database.ref('/').update({
    Food:foodS
  })
}
