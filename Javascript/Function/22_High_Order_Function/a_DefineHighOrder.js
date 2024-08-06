function higherOrderFunction(num,callback){
    callback(num)
}

// b Define Callback Function and Call Higher Order Function:

function callbackFunction(num){
    console.log(num*num);
    
}
higherOrderFunction(5,callbackFunction)
