let temperature = [-3,14,22,5,-10]
// let belowFreezing = temperature.filter(function(temp){
//     if(temp <0){
//         console.log(temp);
        
        
//     }
// })

let belowFreezing = temperature.filter((temp)=>{
    if(temp>0){
        return temp;
    }
})
console.log(belowFreezing);

