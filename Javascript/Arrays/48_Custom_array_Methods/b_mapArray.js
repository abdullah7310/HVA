function mapArray(arr,callback){
    let result = []
    for(let i =0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr));
    }
    return result;
}
let number = [1,2,3,4,5]

let numbers = mapArray(number,function(el){
    return el*2;
})
console.log(numbers);
