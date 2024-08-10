// const input = require("readline-sync")
// let n = input.questionInt("enter the number >> ")
// function tableFunction(n){
//     let tabel =10;
//     let tabell;
//     for(let i = 1;i<=tabel;i++){
//         console.log(n*i);
//     }

// }
// tableFunction(n)

let greet = "namaste";
function outerGreet(){
    console.log(greet);
    let anotherGreet = "namaste babe";
    function innerGreet(){
        console.log(anotherGreet);
        
    }
    innerGreet()
}
outerGreet();

