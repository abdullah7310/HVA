// const input = require("readline-sync")
// let sentence = input.question("enter the sentence >> ")

// function longestString(sentence){
//     let word = sentence.split(" ")
//     let longest = ""
//     for(let i = 0;i<word.length;i++){
//        if(word[i].length>longest.length){
//         longest = word[i]
//        }
//     }
//     return longest
// }
// console.log(longestString(sentence));


// **************** RANDOM NMBER ***************


const input = require("readline-sync")


let number = Math.floor(Math.random()*100)+1;

while(true){
    let random = input.question("guess your number >> ")
    if(random==="quit"){
        console.log("user quit the game!");
        break
        
    }
    if(random == number){
        console.log("Hurrah! You guess the right number!",number);
        break
    }else if(random< number){
        console.log("YOur guess is two low");
        
        
    }else{
        console.log("your guess is very high");
    
        
    }
}


