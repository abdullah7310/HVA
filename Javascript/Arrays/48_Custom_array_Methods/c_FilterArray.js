// function filterArray(array,callback){
//     let result = []

//     for(let i =0;i<array.length;i++){
//         if(callback(array[i],i,array)){
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
// let number = [1,2,3,4,5,6,7,8]
// let numbers = filterArray(number,function(el){
//     return el %2!=0
// })
// console.log(numbers);


// **********************************For each METHOD ***********

// function forEachArray(arr,callback){
//     for(let i =0;i<arr.length;i++){
//         callback(arr[i],i,arr)
//     }
// }
// let color = ["red","yellow","green"]

// forEachArray(color,function(f,g,h){
//     console.log(f,g,h);
    
// })


//  ********************************* ForMap method ***************************

// function forMapArray(arr,callback){
//     let result =[];
//     for(let i = 0;i<arr.length;i++){
//         result.push(callback(arr[i],i,arr));
//     }
//     return result;
// }
// let color = ["red","green","bulue"]
// let colors = forMapArray(color,function(el){
//     return el;
// })
// console.log("colors: ",colors);

// ****************************ForFilter Method *****************

function filterArray(arr,callback){
    let result = []
    for(let i =0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            result.push(arr[i])
        }
    }
    return result;
}
let number = [1,2,4,5,6,7,8,10]
let numbers = filterArray(number,function(el){
    return el % 2 == 0;
})
console.log(numbers);
