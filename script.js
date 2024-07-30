const buttons = document.querySelector(".buttons");

const screen = document.querySelector(".screen");

const audio = document.querySelector("audio");

buttons.addEventListener('click', (e) =>{
    audio.play();
})