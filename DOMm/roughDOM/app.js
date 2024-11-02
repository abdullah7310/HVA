// let para1 = document.createElement('p');
// para1.innerText = "Hi, I'm red para.";
// document.querySelector('body').append(para1);
// para1.classList.add('red')
// let h3 = document.createElement('h3');
// h3.innerText = "hey, I am h3."
// document.querySelector('body').append(h3)
// h3.classList.add('blue')

// let div = document.createElement('div')
// let h1 = document.createElement('h1')
// let p = document.createElement('p')

// h1.innerText = " I am in a div.";
// p.innerText = "Me too";
// div.append(h1)
// div.append(p)
// div.classList.add('box')
// document.querySelector('body').append(div)

let btn = document.createElement('button')
let input = document.createElement('input')
btn.innerText = "Click me "
document.querySelector('body').append(btn)
document.querySelector('body').append(input)
btn.setAttribute("id","clikbtn")
input.setAttribute("placeholder","write ur name")
let button = document.querySelector("#clikbtn")
button.classList.add('button')
let h1 = document.createElement('h1')
h1.innerText = "DOM practice"
h1.classList.add('h1-style')
document.querySelector('body').append(h1)
let para = document.createElement('p')
para.innerHTML = "It's my <b> DOM </b> practicee"
document.querySelector('body').append(para)