let button = document.getElementById('changeText');


button.addEventListener('click',()=>{
    let para = document.querySelector('#para');
    para.textContent = "Text has been changed!"
    
})

let div  = document.querySelector("#hover");
div.addEventListener('mouseover',()=>{
    div.style.backgroundColor = "red";
    div.style.color = "white";
})

let insertHTMLbutton = document.getElementById('insertHTMLbutton');
let htmlDiv = document.getElementById('htmlContent');

insertHTMLbutton.addEventListener('click',()=>{
    htmlDiv.innerHTML = '<h2>Inserted Heading </h2> <p>This is innerHTML paragraph.</p>';
})

let toggleButton = document.getElementById("toggleButton");
let toggleText = document.getElementById("toggleText");

toggleButton.addEventListener('click',()=>{
    if(toggleText.style.display === "none"){
        toggleText.style.display = 'block';
    }else{
        toggleText.style.display = 'none';
    }
});