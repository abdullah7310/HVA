let number = [1,2,3,4,5,6,7,8,9]
// let evenNumbers = number.filter(function(el){
//     return(el %2 ==0);
    
// })
// console.log(evenNumbers);

// **********ARROW FUNCTION ****************

let evenNumbers = number.filter((el)=>{
    return (el %2!=0);
})
console.log(evenNumbers);

