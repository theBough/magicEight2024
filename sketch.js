let myButton;
let r;
let g;
let b;
let myPicture;

function setup() {
  r=0;
  g=0;
  b=0;
  
  createCanvas(400, 400);
  myButton = createButton("click")
  myButton.mousePressed(randomizeBackground)
  myPicture = new Pictures(100,100,75,575,"peter.jpg")
}//end setup

function draw() {
  background(r,g,b);
  myPicture.display();
  myButton.position(0,200) 
  
}//end draw
 function randomizeBackground(){
   //this is going to randomly pick a number 
   //between 0 and 255
   r= random(255)
   g= random(255)
   b= random(255)
 }//end randomizeBackground

function Corbin(){
  
}
