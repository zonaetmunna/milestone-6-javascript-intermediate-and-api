document.getElementById("comment-button").addEventListener('click', function () {
     fetch('https://jsonplaceholder.typicode.com/comments')
          .then(res => res.json())
          .then(data => displayLoadComment(data))
});

const displayLoadComment = comments => {
     // console.log(comments);

     const commentaddContainer = document.getElementById("commentadd-container")
     for (const comment of comments) {
          // console.log(comment.body);


          const div = document.createElement("div");
          div.classList.add("comment");
          div.innerHTML = `
          <h3>${comment.name}</h3>
          <h5>Email:${comment.email}</h5>
          <p>${comment.body}</p>
          `
          commentaddContainer.appendChild(div);
     }
}

