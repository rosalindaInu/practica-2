var pelotac;

function setup(){
  var canvas = createCanvas(500,200);
pelotac =new pelota();
pelotac.x=100;
pelota2=new pelota();






  
}

function draw(){
  background("pink")
  fill("red")
pelotac.display();
fill("black")
pelota2.display();

}

