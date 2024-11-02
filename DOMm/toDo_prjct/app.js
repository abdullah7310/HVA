let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let delbtn = document.createElement("button");
    item.innerText = inp.value;
    delbtn.classList.add("delete");
    delbtn.innerText = "Delete";
    item.appendChild(delbtn);
   
    ul.appendChild(item)
    inp.value = ""
    
})

ul.addEventListener("click",function(event){
    console.dir(event.target);
    
    if(event.target.nodeName == "BUTTON"){
        let liParent = event.target.parentElement;
        liParent.remove()
    }
})

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){ 
//     delbtn.addEventListener("click",function(){
//         console.log("element deleted");
//         let para = this.parentElement;
//         console.log(para);
//         para.remove()
        
        
//     })
// }