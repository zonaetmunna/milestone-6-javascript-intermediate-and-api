function loadUser() {
     fetch('https://randomuser.me/api/?results=55')
          .then(res => res.json())
          .then(data => displaybuddies(data))
}

loadUser();

const displaybuddies = data => {
     const buddies = data.results;
     console.log(buddies);
     const buddiesResult = document.getElementById("buddies-result");
     buddies.forEach(buddy => {
          const div = document.createElement("div");

          div.innerHTML = `
          <div class="bg-info border rounded-3">
          <img class="img-fluid" src="${buddy.picture.large}">
              <h5>${buddy.gender}</h3>
              <h3>${buddy.name.title}</h3>
              <h4>${buddy.email}</h3>
              <p>strrat number:${buddy.location.street.number}</p >
               <h4>${buddy.phone}</h4>
              
          </div >

     `;
          buddiesResult.appendChild(div);

     });
}