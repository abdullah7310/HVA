// let btns = document.querySelector('button')
// console.dir(btns);
// btn.onclick = function(){
//     console.log("button was clicked");
// }

// function changeColor(){
//     this.style.backgroundColor = "blue"
//     this.style.color = "white"
// }
// let para = document.querySelector('p')
// let h1 = document.querySelector('h1')
// let h3 = document.querySelector('h3')


    

//     para.addEventListener("click", changeColor);

    

    // h1.addEventListener("click",changeColor);

    

    // h3.addEventListener("click", changeColor); 

    



// function sayHello(){
//     console.log("hello world");
//      this.style.backgroundColor = "black"
//         this.style.color = "white"
// }


// let inp = document.querySelector("input")
// inp.addEventListener("keyup",function(event){
//     console.log(event);
//     console.log(event.code);
//     console.log(event.key);
    
    
    
//     console.log("key is up");
    
// })
let body = document.querySelector("body")
window.addEventListener("scroll", function(){
    body.style.backgroundColor = 'aqua';
})
let inp = document.querySelector('input');
let div = document.querySelector('div');

inp.addEventListener('keyup', function () {
    console.log('Key is Up');
});

let btn = document.querySelector('#btnn')
btn.addEventListener('click', function(){
    btn.style.backgroundColor = 'green';
    console.log("clicked");
    
})