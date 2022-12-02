let guess = document.getElementsByClassName('guess')[0];
let error = document.getElementsByClassName('wrong')[0];
let lives = document.getElementsByClassName('heart')[0];
let quote = document.getElementsByClassName('quote1')[0];
let success = document.getElementsByClassName('success')[0];
let field = document.getElementsByClassName('field')[0];
let playAgain = document.getElementsByClassName('btn2')[0];
let rand = Math.floor(Math.random() * 1000 +1);
let numGuess = 1;
let array = ['😹','🤒' ,'🤕' ,'🤑', '🤠', '😈' ,'👿', '👹', '👺', '🤡', '💩 ','👻' ,'💀',' ☠️' ,'👽']
error.innerHTML="";
console.log(rand);


guess.addEventListener('click', ()=>{
    let emoji = Math.floor(Math.random() * 15)
    let ans = document.getElementsByClassName('ans')[0];
    let temp = ans.value;
    
    test: if(temp < 0 || temp > 1000){
        error.innerHTML="Sorry Please Enter A Valid Number";
        error.classList.toggle('active',temp < 0 || temp > 1000);
        ans.value = "";
        break test;
    }
    else if (temp < rand){
        error.innerHTML="Sorry, Guess Higher";
        error.classList.toggle('high',temp < rand);
        ans.value = "";
        numGuess++;
        lives.innerHTML += array[emoji];
        }
    else if (temp > rand){
        error.innerHTML="Sorry, Guess Lower";
        error.classList.toggle('high',temp > rand);
        ans.value = "";
        numGuess++;
        lives.innerHTML += array[emoji];
    }
    else if(temp == rand){
        quote.innerHTML='You got it right in '+numGuess+" guesses!";
        field.classList.toggle('active');
        success.classList.toggle('active');
        ;
    }

})

playAgain.addEventListener('click', ()=>{
    window.location.href="../../src/index.html"
})

