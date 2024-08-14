function forEachArray(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i],i,arr);
    }

}

let fruit = ["mango","papaya","apple","watermelon"]
forEachArray(fruit,function(el){
    console.log(el);
    
})