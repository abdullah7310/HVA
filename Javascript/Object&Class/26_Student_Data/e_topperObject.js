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
        return `Hello,${this.name}`
    }
}
console.log(topper.greet())
console.log(topper);






