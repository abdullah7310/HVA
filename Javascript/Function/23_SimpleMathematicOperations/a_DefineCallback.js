function doubleNumber(num){
    return num*2;
}
function squareNumber(num){
    return num*num;
}
function incrementNumber(num){
    return num+=1;
}

// b Define performOperation Function:
function performOperation(num,operation){
    return operation(num);
}

// c Call performOperation with Callback Functions:

let result = performOperation(50,doubleNumber)
console.log(result);

let square = performOperation(5,squareNumber)
console.log(square);

let increment = performOperation(5,incrementNumber)
console.log(increment);




