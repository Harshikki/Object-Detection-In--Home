img = "";

function draw(){

   image(img, 0, 0, 640, 420);
   
if(status != ""){
  for(i = 0; i < objects.length; i++){
    document.getElementById("status").innerHTML = "Status : Object Detected";
    fill('#FF0000');
    stroke('#FF0000');
    noFill();
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height); 
  }
}

}

status = "";
objects = [];

function preload(){

  img = loadImage("bedroom 2.jpg");

}

function setup(){
  
  canvas = createCanvas(640, 420);
  canvas.center();
  object_detector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded(){
  console.log("Model Loaded!");
  status = true;
  object_detector.detect(img, gotResults);
}

function gotResults(error, results){
if(error){
  console.error(error);
}
else{
console.log(results);
objects = results;

}

}