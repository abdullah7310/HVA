let student ={
    name:"Abdul",
    age:"19",
    email:"abdul@youtube.com",
    greet : function(){
        return (`Hello,${student.name}`);
        
    },
    address:{
        country: "India",
        city:"Mumbai",
        pincode: "123456"
    }
}

// console.log(student.greet());
// console.log(student);
let friend = {
    name:"Mahaveer",
    age:"20",
    email:"mahaveer@chatgpt.com",
    greet:function(){
        return`Hello,${this.name}`
        
    },
    address:{
        country:"India",
        city:"Delhi",
        pincode:"110010"
    }
};

console.log(friend.greet())
console.log(friend);



