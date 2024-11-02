// let url = "https://jsonplaceholder.typicode.com/posts";

// async function getdata(){
//     let response = await fetch(url)
//     console.log(response);
//     let data = await response.json();
//     console.log(data)
//     // console.log(data[0]);

// }
// let div = document.querySelector("posts");
// // div.textContent = 


let mydiv = document.getElementById('posts')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(el => {
            let myapidata = document.createElement('div')
            myapidata.style.border = "2px solid red";
            myapidata.style.padding = "10px";
            myapidata.style.marginBottom = '10px';
            myapidata.innerHTML = `
    <p> <b> my userid</b> ..... <b>${el.userId}</b></p>
     <p> my id ..... ${el.id}</p>
      <p> title ..... ${el.title}</p>
      <p> body ..... ${el.body}</p>
      

    
    `;
    mydiv.appendChild(myapidata)
        })



    })
    .catch(err => {
        console.log("this is my error",err);
        
    })