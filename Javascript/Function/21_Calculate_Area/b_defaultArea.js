const input = require("readline-sync")
function calculateAreaWtihDefaults(width=1,hieght = 1){
    return width * hieght;
}
console.log(calculateAreaWtihDefaults());
console.log(calculateAreaWtihDefaults(5,10));