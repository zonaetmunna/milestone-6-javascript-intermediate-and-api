function loadUser() {
     fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => displayPsot(data))
}
function displayPsot(data) {
     const ul = document.getElementById('users');
     ul.style.backgroundColor = 'blue';
     ul.style.color = "black";
     // console.log(data);
     for (const users of data) {
          li = document.createElement('li');
          li.style.backgroundColor = "yellow";

          // li.innerText = users.name;
          li.innerText = `name of user:${users.name} and email:${users.email}`
          ul.appendChild(li);
     }
}