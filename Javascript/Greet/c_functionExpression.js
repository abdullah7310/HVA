const input = require("readline-sync")

const greetFunction = function(name){
    return`Hello, ${name}`;
}
let name = input.question("Enter the name >> ")
console.log(greetFunction(name));
