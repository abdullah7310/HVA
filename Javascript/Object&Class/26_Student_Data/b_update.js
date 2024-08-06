let student = {
    name:"Abdul",
    email : "abdul@youtube.com",
    age : 22
}

student.age = 10
student.greet = function(){
    console.log(`Hello, ${this.name}`);
    
}
student.greet()

student.address = {
    country:"India",
    city:"Bastii",
    pin_code:"2345"
};
console.log(student.address.pin_code);
student.address.pin_code ="12345";
console.log(student.address.pin_code);



