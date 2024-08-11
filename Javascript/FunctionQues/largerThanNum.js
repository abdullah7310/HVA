let arr = [2,3,4,5,6,9,8]
let num = 5

function greatorThanNum(arr,num){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);            
        }
    }
}
greatorThanNum(arr,num)