let lvl = document.getElementById("level")[0];
let btn = document.getElementsByClassName("btn1")[0];
let value = lvl.value;
let start = document.getElementsByClassName("intro")[0];
let easy = document.getElementsByClassName("instructions_easy")[0];


btn.addEventListener("click", ()=>{
    if (value == "easy"){
        easy.classList.toggle('active');
        start.classList.toggle('active');
    }
})

let btn2 = document.getElementsByClassName("btn2")[0];
let first = document.getElementsByClassName("first")[0];
btn2.addEventListener("click", ()=> {
    easy.classList.toggle('active');
    first.classList.toggle('active');
})