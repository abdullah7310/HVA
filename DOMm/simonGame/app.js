let gameSeq =[]
let userSeq = []
let highScore = 0;

let btns = ["yellow", "red" , "purple" , "green"]

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp()
        
    }
    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash")
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level - ${level}`;


    let randomIndx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIndx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn)
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1500);
        }
        console.log("same value");
        
    }else{
        if(level > highScore){
            highScore = level;
        }
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Your high score is ${highScore}<br>Press any key to start again.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        reset()
    }
}

function btnPress () {
    // console.log(this);
    let btn = this;  
    userColor = btn.getAttribute("id");
    console.log(userColor);
    

    userSeq.push(userColor)
    // console.log(userSeq);
    
    userFlash(btn)
    checkAns( userSeq.length - 1)
    
}

let allBtn = document.querySelectorAll(".btn");
for(button of allBtn){
    button.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}