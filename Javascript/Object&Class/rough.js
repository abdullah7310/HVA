// let trial = {
//     name: "Abdul",
//     age: 27,
//     study: "intermediate",
//     getMoreInfo(){
//         console.log(`${this.name}'s age is ${this.age} `)
        
//         let moreInfo= {
//             stram: "PCM",
//             school : "Alam Higher Secondary School",
//             address : "Basti,Uttar Pradesh"
//         }
//         return moreInfo
//     }
// }
// console.log(trial.getMoreInfo().stram);



// **********************8 TRY AND CATCH *******************8888    

// console.log("hello ");
// console.log("hello 3");
// try{
//     console.log(a);
    
// }catch(err){
//     console.log('a is not defined');
//     console.log(err);
    
    
// }
// console.log("hello 8");
// console.log("my Name is ");

// let id = setInterval(function(){
//     console.log("hello abdul");
    
// },2000)

// setTimeout(function(){
//     clearInterval(id)
// },5000)

let rough = {
    name:"abdul",
    class: "12th",
    sub: "Maths",
    getInfo(){
        console.log(`My name is ${rough.sub} ,I read in class class `);
        return this.sub;
        
    }
    
}
console.log(rough.getInfo())