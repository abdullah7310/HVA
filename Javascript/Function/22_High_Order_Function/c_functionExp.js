function higherOrderFunction(num,callback){
    callback(num)
}
higherOrderFunction(140,function(num){
    console.log(num);
    
})
