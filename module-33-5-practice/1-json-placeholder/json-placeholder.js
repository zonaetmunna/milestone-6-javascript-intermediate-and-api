function loadPost() {
     fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(data => displayLoadPost(data))
}

loadPost();

const displayLoadPost = posts => {
     // console.log(posts);
     const jsonpost = document.getElementById("json-post");
     posts.forEach(post => {
          const div = document.createElement("div");
          div.classList.add("post");
          div.innerHTML = `
          <div onclick="loadSinglePost(${post.id})">
             <h3>${post.title}</h3>
             <p>${post.body}</p>
          </div>
          `;
          jsonpost.appendChild(div);

     });

}

const loadSinglePost = postId => {
     const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
     fetch(url)
          .than(res => res.json())
          .than(data => displaysinglePost(data[0]));

}

const displaysinglePost = post => {
     console.log(post);
}