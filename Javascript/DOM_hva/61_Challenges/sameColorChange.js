let mainDiv = document.querySelector(".container");

let buttons = document.querySelectorAll("button");

buttons.forEach((el)=>{
    el.addEventListener('click',()=>{
        let buttonText = el.textContent;
        mainDiv.style.backgroundColor = buttonText

    })
})