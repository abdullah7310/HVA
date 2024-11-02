let button = document.querySelector("button");

button.addEventListener('click',async ()=>{
    let userId = document.getElementById('userId').value ;
    let div = document.getElementById('posts');
    div.innerHTML = '';

    try{
        let allPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        let respnse = await allPosts.json()
        console.log(respnse);

       
        for(res of respnse){
        let postDiv = document.createElement('div');
        postDiv.innerHTML = `

            <h2> Your Posts </h2>
            <p> id : ${res.id}</p>
            <p> body : ${res.body}</p>
            <p> title : ${res.title}</p>
            <p> userId : ${res.userId}</p>
            <h3> Comments : </h3>
            <ul id="comments-${res.id}"></ul>
            <hr>

        `
        div.appendChild(postDiv)
        let comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${res.id}`);
        let commentData = await comments.json();
        console.log(commentData);
        let commentUL = document.getElementById(`comments-${res.id}`);
        commentData.forEach(comment =>{
            let commentlist = document.createElement('li');
            commentlist.innerHTML = `
                <b> name: </b>${comment.name} <b>:</b> <br><br> <b>comment -></b> ${comment.body}<br>
        `;
        commentUL.appendChild(commentlist);
        });
       
        }

    } catch(er){
        console.log("this is error ",er);
        
    }
})