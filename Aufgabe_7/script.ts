window.addEventListener("load", function(){
});

function kick (){
    var sound:HTMLAudioElement = new Audio('assets/kick.mp3'); /*hier muss man den sound hinterlegen*/
    sound.play(); /* das einfach damit es abspielt wenn man drauf klickt*/
}
window.addEventListener("load" , function (){ /* muss immer rein um die reihe zu "lesen"*/
    document.querySelector("#kick").addEventListener("click", kick) 
});
function snare () {
    var sound:HTMLAudioElement = new Audio ('assets/snare.mp3');
    sound.play();
}
window.addEventListener("load" , function (){
    document.querySelector("#snare").addEventListener("click" , snare)
});
function hihat() {
    var sound:HTMLAudioElement = new Audio ('assets/hihat.mp3');
    sound.play();
}
window.addEventListener("load" , function (){
    document.querySelector("#hihat").addEventListener("click" , hihat)
});
function ftone(){
    var sound:HTMLAudioElement = new Audio ('assets/F.mp3');
    sound.play();
}
window.addEventListener("load" , function () {
    document.querySelector("#ftone").addEventListener("click" , ftone)
});
function gtone(){
    var sound:HTMLAudioElement = new Audio ('assets/G.mp3');
    sound.play();
}
window.addEventListener("load" , function () {
    document.querySelector("#gtone").addEventListener("click" , gtone)
});
function atone(){
    var sound:HTMLAudioElement = new Audio ('assets/A.mp3');
    sound.play();
}
window.addEventListener("load" , function () {
    document.querySelector("#atone").addEventListener("click" , atone)
});
function ctone(){
    var sound:HTMLAudioElement = new Audio ('assets/C.mp3');
    sound.play();
}
window.addEventListener("load" , function () {
    document.querySelector("#ctone").addEventListener("click" , ctone)
});
function vocal1(){
    var sound:HTMLAudioElement = new Audio ('assets/laugh-1.mp3');
    sound.play();
}
window.addEventListener("load" , function () {
    document.querySelector("#vocal1").addEventListener("click" , vocal1)
});
function vocal2(){
    var sound:HTMLAudioElement = new Audio ('assets/laugh-2.mp3');
    sound.play();
}
window.addEventListener("load" , function () {
    document.querySelector("#vocal2").addEventListener("click" , vocal2)
});

function playBeat (myBeat: string){
    var sound:HTMLAudioElement = new Audio ("assets/" + myBeat);
    sound.play();
}
function StartBeat (){
    var Kick = setInterval(myBeat , 400)
    var index:number = 0;
    var Beat : string [] = ["assets/hihat.mp3", "assets/kick.mp3" , "assets/kick.mp3" , "assets/snare.mp3" , "assets/kick.mp3" , "assets/snare.mp3" , "assets/G.mp3" , "assets/F.mp3" , "assets/C.mp3"];
    function myBeat (){
        var myMusic:HTMLAudioElement = new Audio (Beat[index]);
        myMusic.play();
        index += 1;
        if (index>9) index = 0;
    
    }
}
window.addEventListener("load" , function(){
    document.querySelector(".play").addEventListener("click", StartBeat)
})








