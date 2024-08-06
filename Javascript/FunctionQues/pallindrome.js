const input = require('readline-sync')
let n = input.question("enter the number >> ")

function pallindrome(n){
    let i ;
    pal=n
    let rev = ""
    for(i =0;i<n.length;i++){
       rev+=n[n.length-i-1]

    }
    if(n==rev){
        console.log("yes");
        
    }else{
        console.log("No");
        
    }
}
pallindrome(n)