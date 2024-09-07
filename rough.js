// let arr = [1,2,3,4,5,6]
// let arr2 = [5,6,7,8,9]
// let newArr =[...arr,...arr2]
// console.log(newArr);


// Spread literals in ARray


// let a ="abdullah";
// console.log(...a);

// Spread (Object literals)

// const data = {
//     email:"abdulaah@nah.com",
//     name: "Abdul"
// }
// const duplcate = {
//     ...data, id:12345
// }
// console.log(duplcate);

// REST Concept

// let arr =["apple","ANaar","banana","orange","kaaju","baadam","light","creta"]
// let [redFruit,yellowFruit,...others]=arr
// console.log(redFruit,"\n",yellowFruit,"\n",...others);

// Question square, sum and average;

// let num = [1,2,3,4,5,6]
// const square = num.map((num)=>num*num)
// console.log(square);
// let sum = square.reduce((sum,el)=>sum+el)
// console.log(sum);
// let avg = sum/num.length
// console.log(Number(avg.toFixed(2)));


// Question: Print the number + 5

// let numbers = [1,2,3,4,5,6,-7]
// console.log(numbers.map((el)=>el+5));

// Question : Print the string in Uppercase

// let string = ["adam","bruce","bob","steve"]
// console.log(string.map((str)=>str.toUpperCase()));

// var a = "this is global scope";
// (function invoke(){
//     var b = "this is invoke funciton var"
//     console.log(b);

// }) ;
// ()
// console.log(b);


// Call by value .

// function changeValue(x) {
//     x = x + 10;
//     console.log("Inside function: " + x);
//   }

//   let num = 5;
// changeValue(num);
// console.log("Outside function: " + num);

// Call by reference >>>>>>>>>>>>>>>>>>>>

// function changeObject(obj) {
//     obj.name = "Rahul";
//     console.log("Inside function: " + obj.name);
//   }

// let person = { name: "Amit" };
// changeObject(person);

// console.log("Outside function: " + person.name);

// Reference by value and refernece

// function changefun(x){
//     x = x +10
//     console.log("inside function",x);

// }
// let num = 5
// changefun(num)
// console.log("outside function",num);


// Exaample by object>>>>>>>>>>>>>>>>
// let obj= {
//     name:"abdul",
//     class: "10th"
// }
// let obj2 = obj
// console.log(obj2);

// console.log(obj);

// function sum(a,b){
//     console.log(a+b);

// }

// setTimeout(()=>{
//     console.log(3*4);

// },2000)

// function sum(callback){
//     callback()
// }
// add((2,3)=>{
//     console.log(2+3);

// })
// ******************* "use strict"  ***********************
// username = "amir"
// console.log(username);


// ****************Do while loop *************

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } 
// while (i < 5);


// ***************** FOR OF LOOP *******************

// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }


// ************** FOR IN LOOP ************************
// let person = ["YELLOW","GREEN","RED","BLACK"];
// for (let key in person) {
//     console.log(person[key]);
// }
// let numbers = ["abdul", 2, 3, 4, 5];
// numbers.forEach(function(number,index) {
//     console.log(index + ":" + number);
// });

// ***********IIFE FUNCTION**********
// const myIIFE = (function() {
//     let counter = 0; // Private variable

//     return {
//         increment: function() {
//             counter++;
//             console.log("Counter: " + counter);
//         },
//         decrement: function() {
//             counter--;
//             console.log("Counter: " + counter);
//         }
//     };
// })();
// myIIFE.increment(3)
// var myName = "abdullah for global"
// (function(){
//     var myName = "abdul for IIFE"
//     console.log(myName);

// })();
// console.log(myName);

// var myName = "abdullah for global";
// function greet(){
//     var myName = "abdul"
//     console.log(myName)
// }
// greet()
// console.log(myName);

// ******************* Anonymous function**************
// let myName = function(){
//     console.log("abdullah");

// }
// myName()

// function greet(name){
//     console.log("Hello "+name );

// }
// greet("abdul")
// let a = function (name){
//     console.log("Hello "+name );

// }
// greet("abdullah")
// let a = (name)=>{
//     console.log("hello "+name);

// }
// a(
//     'dfghj'
// )
// (function(name){
//     console.log('hello'+ name);

// })(" abdulsfafadf")
// setTimeout(function(name){
//     console.log("abdul");
// },2000)
// function sayafd(){
//     console.log("hello");

// }

// function greet(say){
//     say()
//     console.log("abdul");

// }
// greet(say)


// Function TASKS **************************************

// function greet(name){
//     console.log(`Hello  ${name}`);
// }
// greet('abdul')

// function greetDefault(name="Guest"){
//     console.log(`Hello ${name}`);

// }
// greetDefault()

// let greetFunction = function(name){
//     console.log(`Hello ${name}`);

// }
// greetFunction("abdul")
// let greetArrow = (name)=>{
//     console.log(`Helllo ${name}`);
// }
// greetArrow("abdullah")

// ***************Calculate Area **********************

// function calculateArea(width,height){
//     return width*height
// }
// console.log(calculateArea(5,10));

// function calculateDefault(width=1,height=1){
//     return width*height
// }
// console.log(calculateDefault());

// let calculateAreaFunction = function(width,height){
//     return width*height;
// }
// console.log(calculateAreaFunction(5,10));

// let calculateArrow = (width,height)=>{
//     return width*height
// }
// console.log(calculateArrow(5,10));


// ********************High Order and Callback functions **********************

// function higherOrderFunction(number,callback){
//     callback(number)
// }
// function callbackfunc(num){
//     console.log(num*num);
// }
// (higherOrderFunction(6,callbackfunc))
// higherOrderFunction(10,function(num){
//     console.log(num);

// } )
// higherOrderFunction(4,function(num){
//     console.log(num*num);
// })
// function higherOrderFunction(num1,num2,callback){
//     callback(num1,num2)
// }

// higherOrderFunction(3,7,function(numb,number){
//     console.log(numb+number);

// })



// ******************* 38 SIMPLE MATHEMATICAL OPERATIONS ************************8

// function doubleNumber(num){
//     return 2*num;
// }
// function squareNumber(num){
//     return num*num;
// }
// function incrementNumber(num){
//     return num+1
// }

// function performOperation(num,doubleNumber,call){
//     return `${doubleNumber(num)+call(num)}`
// }
// console.log(performOperation(5,squareNumber,doubleNumber));


// ***********************  CALCULATE PAINTING COST FOR DIFFERENT SHAPES ***************

// function areaOfRectangle(length,width){
//             return length*width;
// }
// function areaOfCircle(radius){
//     return 3.14*radius*radius;
// }
// function areaOfTriangle(base,height){
//     return 0.5*base*height;
// }
// function calculatePaintingCost(dimension1,dimension2,calculateArea){
//     let area = calculateArea(dimension1,dimension2)
//     const costPerUnit = 2
//     total = area *costPerUnit
//     return total;
// }
// console.log(calculatePaintingCost(5,10,areaOfRectangle))


// ***********************************  OBJECTS  ******************************
// let person= new Object()
// person.name = "abdul";
// person.age = 35
// person.city = "delhi"
// console.log(person);

// ***************CLASS USING OBJECTS ******************************

// let student = {
//     name:"abdul",
//     email:"abdul@gmail.com",
//     age:32,
//     greet(){
//         console.log(`Hello ${this.name}!`);
//     },

//     address:{
//         country:"India",
//         city:"Basti",
//         pin_code:3454
//     }

// }
// student.age = 10
// console.log(student);
// student.greet()
// console.log(student.address.city)
// console.log(student.address.pin_code=2345678);

// let friend = {
//     name: "abdul",
//     email: "abdul@gmail.com",
//     age: 32,

//     address: {
//         country: "India",
//         city: "Basti",
//         pin_code: 3454
//     },
//     greet() {
//         console.log(`Hello ${this.name}!`);

//     }

// }
// friend.greet();
// console.log(friend);


// let topper = {
//     name:"abdul",
//     age:34,
//     email:"abdul@gmail",
//     address:{
//         country:"India",
//         city:"Basti",
//         pincode:23445
//     },
//     greet(){
//         console.log(`Hello ${this.name}!`)
//     }
// }
// topper.greet()
// console.log(topper)


// **************** STUDENT DATA IN OBJECT ************************

// class Student {
//     constructor(name,email,age,country,city,pincode){
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         this.address = {
//             country:country,
//             city:city,
//             pincode:pincode
//         }
//     }
//     greet(){
//         console.log(`Hello ${this.name}!`);
//     }
//     getFullAddress(){
//         console.log(`${this.address.country},${this.address.city}-${this.address.pincode}`);   
//     }
// }
// let abdul = new Student("Abdul","abdul@gmail.com",18,"India","Gorakhpur",27339)

// abdul.greet()
// abdul.getFullAddress()

//  ***************** EMPLOYEE DATA ***************

// class Employee{
//     constructor(name,email,age,department,position,salary){
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         this.department = department;
//         this.position = position;
//         this.salary = salary;
//     }
//     introduce(){
//         console.log(`Hello, I am ${this.name},${this.position}`);
        
//     }
//     displaySalary(){
//         console.log(`Salary:${this.salary}`);
        
//     }
// }

// let newEmployee = new Employee("Abdul","abdul@gmail",19,"Information Technology","Software Developer",2500)
// // console.log(newEmployee);

// let manager = new Employee("Manager","manager@gmail.com",43,"Info technology","Manager",50000)
// // console.log(manager);
// newEmployee.introduce()
// newEmployee.displaySalary()
// manager.introduce()
// manager.displaySalary()

//  *************** BOOK DATA *********************

// class Book{
//     constructor(title,author,publisher,year,genre){
//         this.title = title;
//         this.author = author;
//         this.publisher = publisher;
//         this.year = year;
//         this.genre = genre;
//     }
//     describe(){
//         console.log(`${this.title}-${this.author}(${this.year})`);
//     }
//     displayGenre(){
//         console.log(`Genre:${this.genre}`);
//     }
// }

// let sciFiBook = new Book("Dune","Frank Herbert", "Chilton Books",1945,"Science Fiction")
// let classicBook = new Book("Pride and Prejudice","Jane Austen", "T. Egerton",1813,"Classic")

// console.log(sciFiBook);
// console.log(classicBook);
// classicBook.describe()
// classicBook.displayGenre()
// sciFiBook.describe()
// sciFiBook.displayGenre()


// $$$$$$$$$$$$$$$$ ARRAYS IN JS $$$$$$$$$$$$$$$444

let colors = ["red","green","blue","black","white"]
// console.log(colors[0]);
// console.log(colors[1]="yellow");
// console.log(colors[colors.length-1]="green");

// *************** For loop ***************

// for(let i = 0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// ******************** While loop **********

// let i =0;
// while(i<colors.length){
//     console.log(colors[i]);
//     i++
// }

//  **************   For of loop ************

// for(color of colors){
//     console.log(color);
// }
// console.log(typeof(colors));
// console.log(colors.length);

// colors.push("reddish");
// console.log(colors);
// colors.pop()
// console.log("removed color",colors);
// console.log(colors.indexOf("white"))

// colors.owner = "Abdul"
// // console.log(colors);

// for(color in colors){
//     console.log(color+ " => "+colors[color]);
    
// }


// ******************** Arrays method Foreach,Map,Filter **************

let numbers = [1,2,3,4,5,6,7,8]
// numbers.forEach(function(number){
//     console.log(number*2);
// })

// let squarednumbers = numbers.map(function(number){
//     return(number*number);
    
// })
// console.log(squarednumbers);
// let squarednumbers = numbers.map((number)=>{
//     console.log(number*number);
// })

// let evenNumbers = numbers.filter(function(number){
//     return(number%2===0);
    
// })
// console.log(evenNumbers);

// &&&&&&&&&&&&&&&&  MANIPULATING TEMPERATURES  &&&&&&&&&&&&&&&&&&&&&&&&&

// let temperatures = [3,-6,34,45,-10]
// temperatures.forEach(function(temp){
//     console.log(temp);
    
// })
// temperatures.forEach((temp)=>{
//     console.log((temp*9/5)+32);
// })

// temperatures.forEach(function(temp){
//     console.log((temp*9/5)+32);
    
// })

// ******************* Using Map() ****************
// tempInFarhenite = temperatures.map(function(temp){
//     return((temp*9/5)+32);
// })
// console.log(tempInFarhenite)

// tempInFarhenite = temperatures.map(function(temp){
//     return((temp*9/5)+32)
// })
// console.log(tempInFarhenite);

// ***************** Using filter ***************88

// let belowFreezing = temperatures.filter(function(temp){
//     return temp<0
// })
// console.log(belowFreezing);


// &&&&&&&&&&&&&&&&&&&&   OPERATIONS ON FRUTS   &&&&&&&&&&&&&&&

let fruits = ["apple","banana","cherry","date","papaya"]
// fruits.forEach(function(fruit){
//     console.log(fruit.toUpperCase() );
    
// })

// fruits.forEach((fruit)=>{
//     console.log(fruit.charAt(0).toUpperCase()+fruit.slice(1));
    
// })

// ************** Calculate the length ********88888
// let totalCharacters = 0
// fruits.forEach(function(fruit){
//     totalCharacters += fruit.length    
// })
// console.log(totalCharacters);

// *********   Modified Array using map ***********8

// let reversedFruits = fruits.map(function(fruit){
//     console.log(fruit.split("").reverse().join(""));
    
// })
// let reversedFruits = fruits.map((fruit)=>{
//     console.log(fruit.split("").reverse().join(""));
    
// })

// **************** using filter ***********
// let longFruits = fruits.filter(function(fruit){
//     return fruit.length >5
// })
// console.log(longFruits);
//  let longFruits = fruits.filter((fruit)=>{
//     return fruit.length>5
//  })
//  console.log(longFruits);
 

// let aFruitUpper = fruits.filter((fruit)=>{
//    return fruit.includes('a')
// }).map((fruit)=>{
//     return fruit.toUpperCase()
// })
// console.log(aFruitUpper);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Custom Array Methods &&&&&&&&&&&&&&


function ForEachArray(array,callback){
    for(let i =0;i<array.length;i++){
        callback(array[i],i,array)
    }
}
// function forEachArray(arr,callback){
//     for(let i=0;i<arr.length;i++){
//         callback(arr[i],i,arr);
//     }

// }

let fruit = ["mango","papaya","apple","watermelon"]
ForEachArray(fruit,function(el,ind){
    console.log(el,ind);
    
})