const input = require("readline-sync")
let number = input.questionInt("enter the a >> ")
let number2 = input.questionInt("enter the b >> ")

function averageFunction(number,number2){
    let k = (number + number2)/2;
    console.log(k);
    
}
averageFunction(number,number2)