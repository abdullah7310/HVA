let topper = {
    name:"topper",
    email:"topper@gmail.com",
    age:"23",
    address:{
        country:"India",
        pincode:"45678",
        city:"Mumbai"
    },
    greet:function(){
        console.log( `Hello,${this.name} ,`)
        console.log( `${this.address.country}`);
        
    }
}
topper.greet()
// console.log(topper);






