let temperature = [-3,14,22,5,-10]
// let tempinFarhenite=temperature.map(function(temp){
//     return (temp*9/5)+32;
// })
// console.log(tempinFarhenite);

let tempinFarhenite = temperature.map((temp)=>{
    return (temp*9/5)+32;
})
console.log(tempinFarhenite);
