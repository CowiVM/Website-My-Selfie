SpeechRecognition = window.webkitSpeechRecognition;

recognise = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognise.start();
}

recognise.onresult = function (event) {

    console.log(event);

    Content = event.results[0][0].transcript;

    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    if (Content == "take my selfie") {
        console.log("take my selfie----------");
        speak();
    }
}

function speak() {
    synth = window.speechSynthesis;

    speakdata = "Taking Your Selfie in 5 seconds"
    //speakdata = document.getElementById("textbox").value

    utterThis = new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function () {
        snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");

function snapshot(){
    Webcam.snap( function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='" + data_uri + "'/>"        
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image");
    link.href = image;
    link.click();
}