const input = require("readline-sync")

let random = input.questionInt("guess the number >> ")
let number = Math.floor(Math.random()*100)+1;

while(True){
    if(random=="quit"){
        console.log("user quit the game!");
        
    }
    if(random == number){
        console.log("Hurrah! You guess the right number!",number);
    }else if(random< number){
        console.log("YOur guess is two low");
        
    }else{
        console.log("your guess is very high");
        
    }
}