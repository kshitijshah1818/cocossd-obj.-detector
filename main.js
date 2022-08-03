img="";
status="";
objects= [];
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function modelLoaded(){
    console.log('model is loaded');
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}
function draw(){
    image(img,0,0,640,420);
   
    if(status !=""){
        for(i=0; i<objects.length;i++){

            document.getElementById("status").innerHTML="STATUS: Objects detected";
            fill("#z3cd09");
            accuracy=floor(objects[i].confidence*100);
            noFill();
            text(objects[i].label+" "+ accuracy+"%", objects[i].x+15, objects[i].y+15);
            stroke("#z3cd09");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    } 

}