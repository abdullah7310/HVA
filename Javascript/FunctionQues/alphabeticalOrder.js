// const input = require("readline-sync")
// let alphabet = input.question("enter the word >> ")

// function alphabetOrder(alphabet){
//     let word = alphabet.split("")
//     word = word.sort().join("")
//     return word;
// }
// console.log(alphabetOrder(alphabet));

function alphabet(word){
    let words = word.split("").sort().join("")
    return words;
}
console.log(alphabet("webmaster"));
