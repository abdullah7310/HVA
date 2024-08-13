// Define the fruits array
let fruits = ["apple", "banana", "cherry", "date"];

// let reversedFruits = fruits.map(function(fruit){
//     return(fruit.split("").reverse().join(""));
    
// })
// console.log(reversedFruits);

let reversedFruits= fruits.map((fruit)=>{
    return(fruit.split("").reverse().join(""))
})
console.log(reversedFruits);
