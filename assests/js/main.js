let btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click',()=>{
    //add var inside function so the value is not defined before the user click continue
    //IE: it would be "easy" when var is global
    let level = document.getElementById("levels");
    let value = level.value;

    if (value == 'easy'){
        window.location='easyIntro.html';
    }
    else if(value == 'medium'){
        window.location='medIntro.html';
    }
    else if(value == 'hard'){
        window.location='hardIntro.html';
    }
    else if(value == 'impossible'){
        window.location='impossIntro.html';
    }
});