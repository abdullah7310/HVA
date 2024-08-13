let fruits = ["apple", "banana", "cherry", "date"];
// let longFruits = fruits.filter(function(fruit){
//     if(fruit.length>5){
//         return fruit
//     }
// })
// console.log(longFruits);

let longFruits = fruits.filter((fruit)=>{
    if(fruit.length<=5){
        return fruit;
    }
})
console.log(longFruits);

