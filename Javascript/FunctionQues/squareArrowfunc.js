const input = require("readline-sync")
let n = input.questionInt("enter the number >> ")
const square = (n)=>{
    return n*n;
}
console.log(square(n));
