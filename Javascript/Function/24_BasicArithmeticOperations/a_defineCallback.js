function addNumbers(num1,num2){
    return num1+num2;
}
function multiplyNumbers(num1,num2){
    return num1*num2;
}
function subtractNumbers(num1,num2){
    return num2-num1;
}
function divideNumbers(num1,num2){
    if(num2===0){
        console.log("error");
        return null;
        
    }
    return num1/num2;
}

// b Define performArithmetic Function:
function performArithmetic(num1,num2,operation){
    return operation(num1,num2);
}

// c Call performArithmetic with Callback Functions:

let result = performArithmetic(5,3,addNumbers)
console.log(result);

let multiply = performArithmetic(5,3,multiplyNumbers)
console.log(multiply);

let division = performArithmetic(5,3,divideNumbers)
console.log(division);

let subtract = performArithmetic(5,3,subtractNumbers)
console.log(subtract);

