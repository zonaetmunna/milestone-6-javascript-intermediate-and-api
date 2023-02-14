function loadComment() {
     fetch('https://jsonplaceholder.typicode.com/comments')
          .then(res => res.json())
          .then(data => displayComment(data));
}

const displayComment = comments => {
     const commentsContainer = document.getElementById("comments-container");
     comments.forEach(comment => {
          const div = document.createElement("div");
          div.innerHTML = `
          
              <h1>${comment.name}</h1>
              <p>${comment.body}</p>
              <p>email:${comment.email}</p>
              
          `;
          commentsContainer.appendChild(div);

     });
}