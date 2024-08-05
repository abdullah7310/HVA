function higherOrderFunction(num,callback){
    callback(num)
}
higherOrderFunction(4,function(num){
    console.log(num*num);
    
})