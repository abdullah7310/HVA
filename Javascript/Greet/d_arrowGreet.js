const input = require("readline-sync")

const greetFunction = (name)=> {
    return `Hello,${name}`;
}

let name = input.question("enter the name >>> ")
console.log(greetFunction(name));
