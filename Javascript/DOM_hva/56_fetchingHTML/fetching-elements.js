let div = document.getElementById("myDiv");
console.log(div.textContent);
let myclass = document.getElementsByClassName("myClass");
for(let i = 0;i<myclass.length; i++){
    console.log(myclass[i].textContent);
    
}
let para = document.getElementsByTagName('p');
// console.log(para.textContent);
for(let i = 0;i<para.length;i++){
    console.log(para[i].textContent);
}
let span = document.querySelectorAll("span");
for(let i = 0; i<span.length;i++){
    console.log(span[i].textContent);
}
