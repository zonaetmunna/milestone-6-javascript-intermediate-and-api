/* fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then(json => console.log(json.userId)) */

function loadData() {
     fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
}

// loadData();

// user
function loadUser() {
     fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => displayPost(data))
}
/* function displayUser(data) {
     for (const user of data) {
          console.log(user.id);

     }
} */


// post
function loadPost() {
     fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => displayPost(data))
}

function displayPost(data) {
     const ul = document.getElementById('users');
     for (const post of data) {
          const li = document.createElement('li');
          // li.innerText = post.name;
          // or dynamic string
          li.innerText = `name:${post.name}`;
          ul.appendChild(li);

     }
}