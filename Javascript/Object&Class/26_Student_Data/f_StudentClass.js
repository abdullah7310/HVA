
class Student{
    constructor(name,email,age,country,city,pin_code){
        this.name = name;
        this.age = age;
        this.email = email;
        this.address ={
             country :country,
            city : city,
            pin_code : pin_code,
        }
    }
    greet(){
        console.log(`Hello,${this.name}`);
        
    }
    getFullAddress(){
        return`${this.address.country}, ${this.address.city}- ${this.address.pin_code}`;
    }
}

let student = new Student("Abdul","abdul@yt.com","22","India","Basti","272002")
let student2 = new Student("Abdullah","abdullah@yt.com","22","Pakistan","Basti","85702")
let student3 = new Student("mahavir","mahavir@yt.com","22","India","Indore","2456002")

console.log(student);
student.greet();
console.log(student.getFullAddress());
student2.greet();
console.log(student2.getFullAddress());
student3.greet()
console.log(student3.getFullAddress());

