function addListItem(){
    let ul = document.getElementById("list");
    let newLi = document.createElement("li");
    let count = ul.children.length +1
    newLi.textContent = "New Item " + count;
    ul.appendChild(newLi)
    console.log(count);
    

}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click",()=>{
    addListItem()
})

function removeLastListItem(){
    let ul = document.getElementById("list");
    let lastItem = ul.lastElementChild;

    if(lastItem){
        ul.removeChild(lastItem);
    }

}

let removeButton = document.getElementById("removeButton");
removeButton.addEventListener('click',()=>{
    removeLastListItem()
})
