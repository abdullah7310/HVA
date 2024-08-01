
function reverse(n){
    let k,reverse=0;
    for(let i =0;n>0;i+=1){
        k = n%10
        reverse = reverse*10+k
        n = Math.floor(n/10)
    }
    console.log(reverse);
}
const input = require("readline-sync")
let n = input.questionInt("enter the number >> ")
reverse(n)