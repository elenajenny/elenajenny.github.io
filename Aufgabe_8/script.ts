var Kick;
var Beat: string[] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/snare.mp3"];
var music: boolean = false;
window.addEventListener("load", function (): void {
    document.querySelector("#kick").addEventListener("mousedown", function (): void { playSample("assets/kick.mp3"); });
    document.querySelector("#snare").addEventListener("mousedown", function (): void { playSample("assets/snare.mp3"); });
    document.querySelector("#hihat").addEventListener("mousedown", function (): void { playSample("assets/hihat.mp3"); });
    document.querySelector("#ftone").addEventListener("mousedown", function (): void { playSample("assets/F.mp3"); });
    document.querySelector("#gtone").addEventListener("mousedown", function (): void { playSample("assets/G.mp3"); });
    document.querySelector("#atone").addEventListener("mousedown", function (): void { playSample("assets/A.mp3"); });
    document.querySelector("#ctone").addEventListener("mousedown", function (): void { playSample("assets/C.mp3"); });
    document.querySelector("#vocal1").addEventListener("mousedown", function (): void { playSample("assets/laugh-1.mp3"); });
    document.querySelector("#vocal2").addEventListener("mousedown", function (): void { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", playBeat);
    document.querySelector("#record").addEventListener("click", recordBeat);
    document.querySelector("#delete").addEventListener("click", deleteBeat);
});

function playSample(myMP3: string): void {
    var sound: HTMLAudioElement = new Audio(myMP3);
    sound.play();
    if (music == true) {
        Beat.push(myMP3);
    }
}
function playBeat(): void {
    var index: number = 0;
    /*start*/
    if
        ( document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");
        Kick = setInterval(myBeat, 300);
        music = false;
    }
    /*stop*/
    else {
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(Kick);
    }
    /*beat*/
    function myBeat () {
        playSample(Beat [index]);
        index += 1;
        if (index > (Beat.length - 1)) index = 0;
    }
}
function recordBeat (): void {
    music = true;
}
function deleteBeat (): void {
    Beat.length = 0;
}






