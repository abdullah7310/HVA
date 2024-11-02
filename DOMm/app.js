// ******************************** HTML COLLECTION AND NODELIST DIFFERENCE*************************************


// let btn = document.getElementsByClassName('demo')
// console.log(btn);

// let newBtn = document.createElement('div')
// newBtn.classList.add("demo")
// newBtn.innerText = "I am new";
// document.body.appendChild(newBtn);
// console.log(btn);

//***************************************  NODELIST  *********************************************** 

// let btn = document.querySelectorAll('.demo');
// console.log(btn);

// let newbtn = document.createElement('div');
// newbtn.classList.add('demo');
// newbtn.innerText = "i am new node";
// document.body.appendChild(newbtn)
// console.log(btn);

// ****************************  CALLSTACK *********************************************************


// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans = two()+one();
//     console.log(ans);
    
// }
// three()



// ***************************  CALLBACK HELL *********************************************************

// let h1 = document.querySelector("h1")
// function changeColor (color,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//        if (nextColor) nextColor();
//     },delay)
// }

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("aqua",1000)
//         })
//     })
// })


// setTimeout(()=>{
//     h1.style.color = "red";
// },1000)

// setTimeout(()=>{
//     h1.style.color = "green";
// },2000)

// setTimeout(()=>{
//     h1.style.color = "blue";
// },3000)

// function colorChange(color,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         nextColor();
//     },delay)
// }

// colorChange("red",1000,()=>{
//     colorChange("green",1000,()=>{
//         colorChange("blue",1000,()=>{
//             colorChange("orange",1000)
//         })
//     })
// })


// ************************* AN EXAMPLE OF CALLBACK HELL ********************************


// function saveData(data,success,failure){
//     let speed = Math.floor(Math.random()*10)+1;
//     if(speed>4){
//         success(data,speed)
//     }else{
//         failure(data,speed)
        
//     }
// }
// saveData("Abdullah Ahmad",(name,connection)=>{
//     console.log(`your data ${name} is saved with the speed of ${connection}`);
//     saveData("abdullah ahmad",()=>{
//         console.log("succes2 is saved");
        
//     },()=>{
//         console.log("faliure2 data NOT saved");
        
//     })
    
// },(name,connection)=>{
//     console.log(`your data ${name} is NOT saved with the speed of ${connection}`);
    
// })


// *****************************  PROMISES   &  PROMISE CHAINING ***********************************************************

// function saveData(data){
//     return new Promise((resolved,rejected)=>{
//         let speed = Math.floor(Math.random()*10)+1;
//         if(speed>4){
//            resolved("data submission done")
            
//         }else{
//             rejected("data submission failed . ")
            
//         }
//     })
// 


// saveData("Abdullah Ahmad").then(()=>{
//     console.log("Data saved successfully");
//     return saveData("Abdulllll")
    
// })
// .then(()=>{
//     console.log("Abdulllll: saved successfully");
//     return saveData("Ahmadddd : saved Successfully")
    
// })
// .then(()=>{
//     console.log("Ahmaddd : saved successfully");
    
// })
// .catch(()=>{
//     console.log("Server is not working properly");
    
// })



// ***********************  Promise Example with two new parmeters ERROR and RESULT *******************************



// function saveData(data){
//     return new Promise((resolved,rejected)=>{
//         let speed = Math.floor(Math.random()*10)+1;
//         if(speed>4){
//             resolved("Success: Data submission successful.")
//         }else{
//             rejected("Failure: Data Submission rejected!")
//         }

//     })
// }

// (saveData("Abdullah Ahmad")).then((result)=>{
//     console.log("data submission successful..");
//     console.log(result);
    
//     return saveData("ahmadd abdull...")
    
// })
// .then((result)=>{
//     console.log("ahmadd abdulll data saved...");
//     console.log(result);
    
    
// })
// .catch((error)=>{
//     console.log("data submission failed....");
//     console.log(error);
    
    
// })


// **************************** Let's try change color example with promise *********************88
// let h1 =document.querySelector("h1");
// function colorChange(color,delay){
//     return new Promise((resolved,rejected)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolved("color has been changed.")
//         },delay)
//     })
// }

// console.log(colorChange("red",1000));

// colorChange("red",1000).then(()=>{
//     console.log("it is red");
//     return colorChange("green",1000);
    
// })
// .then(()=>{
//     console.log("it is green.");
//     return colorChange("blue",1000);
    
    
// }).then(()=>{
//     console.log("it is blue");
    
// })
// .catch(()=>{
//     console.log("may be somehting errror......");
    
// })

//  ******************************* ASYNC AND AWAIT *****************************************************8888

// let h1 = document.querySelector("h1");
// function colorChange(data,delay){
//     return new Promise((resolved,rejected)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolved("color has changed....")
//         },1000)
//     })
// }

// async function color(){
//     // throw "eror 404"
//     return("abdullah");
// }

// color().then((result)=>{
//     console.log("program run successfully....",result);
    
// }).catch((error)=>{
//     console.log("programm did'nt run successfully",error);
// })

