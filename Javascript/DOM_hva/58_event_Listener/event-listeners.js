let button = document.querySelector("button");
button.addEventListener("click",()=>{
    console.log("Button click event executed");
    
})

let div = document.querySelector("div");
div.addEventListener("mouseover",()=>{
    console.log("Mouseover event on div executed");
    
})

let input = document.querySelector("input");
input.addEventListener('input',()=>{
    console.log("Input event executed");
    
})