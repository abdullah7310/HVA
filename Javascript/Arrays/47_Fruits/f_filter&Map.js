let fruits = ["apple", "banana", "cherry", "date"];

let aFruit = fruits.filter((fruit)=>{
    return fruit.includes('a')
})
console.log(aFruit);
let aFruitUpper = aFruit.map((fruit)=>{
    return fruit.toUpperCase() 
})
console.log(aFruitUpper);
