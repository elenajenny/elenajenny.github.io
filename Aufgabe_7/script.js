window.addEventListener("load", function (myMP3) {
    document.querySelector("#kick").addEventListener("mousedown", function () { playSample("assets/kick.mp3"); });
    document.querySelector("#snare").addEventListener("mousedown", function () { playSample("assets/snare.mp3"); });
    document.querySelector("#hihat").addEventListener("mousedown", function () { playSample("assets/hihat.mp3"); });
    document.querySelector("#ftone").addEventListener("mousedown", function () { playSample("assets/F.mp3"); });
    document.querySelector("#gtone").addEventListener("mousedown", function () { playSample("assets/G.mp3"); });
    document.querySelector("#atone").addEventListener("mousedown", function () { playSample("assets/A.mp3"); });
    document.querySelector("#ctone").addEventListener("mousedown", function () { playSample("assets/C.mp3"); });
    document.querySelector("#vocal1").addEventListener("mousedown", function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector("#vocal2").addEventListener("mousedown", function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector(".play").addEventListener("click", StartBeat);
});
function playSample(myMP3) {
    var sound = new Audio(myMP3);
    sound.play();
}
function StartBeat() {
    var Kick = setInterval(myBeat, 300);
    var index = 0;
    var Beat = ["assets/hihat.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/snare.mp3"];
    function myBeat() {
        var mySound = new Audio(Beat[index]);
        mySound.play();
        index += 1;
        if (index > 3)
            index = 0;
        console.log(Beat[index]);
    }
}
//# sourceMappingURL=script.js.map