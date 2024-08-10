const input = require("readline-sync")
let word = input.question("enter the number >> ")

function wordUppercase(word){
    let words = word.split(" ")
    for(let i =0;i<words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(" ")
}
console.log(wordUppercase(word));
