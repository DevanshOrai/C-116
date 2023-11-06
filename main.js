nose_x=0;
nose_y=0;

function preload(){
nose= loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("POSENET IS INITIALIZED")
}

function gotPoses(results){
if(results.length>0){
    console.log(results)
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose_x =" + nose_x);
    console.log("nose_y =" + nose_y);
}
}

function draw(){
image(video, 0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
image(nose,nose_x-25,nose_y,50,35);
}

function capture(){
    save('MyFilter.png');
}