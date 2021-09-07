var path,boy
var pathImg,boyImg




function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png")

}


function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg)
  path.velocityY=4;
  path.scale=1.2;
  
  boy=createSprite(100,340)
  boy.addAnimation("boy",boyImg)
  boy.scale=0.1
  
}


function draw(){

  background(0);
  if(path.y>400){
    path.y=height/2;
    
      
      
      
      edges= createEdgeSprites();
      boy.collide(edges);
  }
  boy.x = World.mouseX;
  drawSprites()
}



  
  


