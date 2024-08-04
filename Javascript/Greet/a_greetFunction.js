const input = require("readline-sync")
function greet(we){
    return `hello,${we}!`
    
}
let name= input.question("enter the name >> ")
console.log(greet(name));
