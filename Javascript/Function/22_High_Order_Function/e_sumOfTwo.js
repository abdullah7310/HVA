function newHigherOrderFunction(num1,num2,callback){
    callback(num1,num2);
}
newHigherOrderFunction(3,7,function(numA,numB){
    console.log(numA+numB);
    
})