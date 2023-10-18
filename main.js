function preload() {
    song = loadSound("Survivor - Eye Of The Tiger.mp3")

}
narizX = 0
narizY = 0

function setup() {
    canvas = createCanvas(720, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(720, 480);
    video.hide();
    classifier = ml5.poseNet( video, console.log("modelo carregado"));
    classifier.on('pose',getPoses)
}
function getPoses(results) {
    narizX = results[0].pose.nose.x;
    narizY = results[0].pose.nose.y;
    console.log(results)
}   
function draw() {

    image(video, 0, 0, 720, 480);
    circle(narizX,narizY,20);
    song.setVolume(narizY/250); 
    document.getElementById("volume").innerHTML = "Volume =" + narizY/250;
    song.rate(narizX/250); 
    document.getElementById("speed").innerHTML = "Velocidade =" + narizX/250;

}
var reproduzir = false;
function play() {

    if (reproduzir == false) {
        song.play();
        song.setVolume(1);
        song.rate(1);
        reproduzir = true;
    };
}