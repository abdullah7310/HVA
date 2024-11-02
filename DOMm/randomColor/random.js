let btn = document.querySelector("div")
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3")
    let randombtn = getrandomColor();
    h3.innerText = randombtn;
    let divcolor = document.querySelector("div")
    divcolor.style.backgroundColor = randombtn
    
})

function getrandomColor (){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    let color = `rgb(${red},${green},${blue})`
    return color
}  