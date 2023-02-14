function loadComment() {
     fetch('https://jsonplaceholder.typicode.com/comments')
          .then(res => res.json())
          .then(data => displayComment(data));
}

loadComment();

const displayComment = comments => {
     const commentsContainer = document.getElementById("comments-container");
     comments.forEach(comment => {
          const div = document.createElement("div");
          div.innerHTML = `
          <div onclick="loadSignleComment(${comment.id})">
              <h1>${comment.name}</h1>
              <p>${comment.body}</p>
              <p>email:${comment.email}</p>
              </div>
          `;
          commentsContainer.appendChild(div);

     });
}

const loadSignleComment = commentId => {
     const url = `https://jsonplaceholder.typicode.com/comments`;
     fetch(url)
          .then(res => res.json())
          .then(data => displaySingleComment.id[0]);
}

const displaySingleComment = comment => {
     const singleComment = document.getElementById("single-comment");
     const div = createElement("div");
     div.innerHTML = `
     <h1>${comment.name}</h1>
     <p>eamil:${comment.email}</p>
     `;
     singleComment.appendChild(div);
}