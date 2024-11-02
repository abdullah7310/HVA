let ul_1 = document.getElementById("list1");
console.log(ul_1);

let firstChild = ul_1.firstElementChild
console.log(firstChild);

let nextChild = firstChild.nextElementSibling;
console.log(nextChild.textContent);
while(nextChild){
    console.log(nextChild.textContent);
    nextChild = nextChild.nextElementSibling;
    
}

let ul_2 = document.getElementById("list2");
console.log(ul_2);

let lastElement = ul_2.lastElementChild;
console.log(lastElement);

while(lastElement){
    console.log(lastElement.textContent);
    lastElement = lastElement.previousElementSibling;
    
}

let ul_3 = document.getElementById('list3');
let childElement = ul_3.children;
console.log(childElement);

for(let item of childElement){
    console.log(item.textContent);
    
}
