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
