function loadPost() {
     fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => displayPost(data))
}

loadPost();

function displayPost(posts) {
     const postcontainer = document.getElementById('posts');
     for (const post of posts) {
          const div = document.createElement("div");
          div.classList.add('post');
          
          div.innerHTML = `<h>${post.title}</h3>
          <p>${post.body}</p>
          `;
          postcontainer.appendChild(div);
     }
}