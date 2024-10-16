let myButton;
let r;
let g;
let b;
let myPicture;
let myInput;
let theirQuestion;
let myAnswer = "I'll answer your question here."
let possibleAnswer = [
  "hard yes",
  "no way",
  "are you kidding me, there is no way!",
  "sure"
];
let myFont

function setup() {
  r=100;
  g=100;
  b=100;
  createCanvas(400, 400);
  myButton = createButton("click")
  myButton.mousePressed(randomizeBackground)
  myPicture = new Pictures(100,100,75,75,"peter.jpg")
  myInput = createInput();
  myInput.position(0,175)
  theirQuestion = "Your question will show here."
  myFont = loadFont("sixtyFour.ttf")
}//end setup
function draw() {
  background(r,g,b);
  myPicture.display();
  myButton.position(0,200) 
  text(theirQuestion, 0,250)
  text(myAnswer,0,275)
  textStuff()
}//end draw

function textStuff(){
  push()
  textSize(30)
  fill("yellow")
  textFont(myFont)
  text("Ask Peter", 50, 50)
  pop()
  push()
  fill("red")
  text("Type a yes/no question, in the input box.\n Click the button, and Peter will give you an answer",50,75)
  pop()
}
function answerQuestion(){
  let rndNumb = random(4);
  rndNumb = Math.floor(rndNumb)
  myAnswer = possibleAnswer[rndNumb]
}//end answerQuestion
function randomizeBackground(){
   //this is going to randomly pick a number 
   //between 0 and 255
   r= random(255)
   g= random(255)
   b= random(255)
  theirQuestion = ">> " + myInput.value();
  answerQuestion();
 }//end randomizeBackground
