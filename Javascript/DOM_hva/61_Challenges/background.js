let div = document.querySelectorAll('.boxes')
div.forEach((el)=>{
    el.addEventListener('click',()=>{
        if(el.style.backgroundColor === 'red'){
            el.style.backgroundColor = 'white';
        }else{
            el.style.backgroundColor = 'red';
        }
    })
})