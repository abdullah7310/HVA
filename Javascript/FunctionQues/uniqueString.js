let str = "abcdabttcdefzzgggh";
// function uniqueFun(str){
//     let ans =""
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//         ans += currChar;
//         }
//         }
//         return ans
// }


// console.log(uniqueFun(str))
// // console.log(str.indexOf("d"));
function uniqueFunc(str){
    newStr = ""
    seenchar = {}
    for(let i = 0;i<str.length;i++){
        current = str[i]
        if(!seenchar[current]){
            newStr += current
            seenchar[current]=true
        }
    }
    console.log(newStr);
    
}
console.log(uniqueFunc(str));

