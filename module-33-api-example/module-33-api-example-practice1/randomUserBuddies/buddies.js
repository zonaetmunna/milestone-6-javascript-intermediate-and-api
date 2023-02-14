const loadBuddies = () => {
     fetch('https://randomuser.me/api/?results=500')
          .then(res => res.json())
          .then(data => displayBuddies(data))


}
loadBuddies();

const displayBuddies = data => {
     // console.log(data.results);
     const buddies = data.results;

     const buddiesElement = document.getElementById("buddies");
     for (const buddy of buddies) {
          // console.log(buddy);
          const div = document.createElement("div");
          div.classList.add('buddy');
          div.innerHTML = `
          <div onlcick="loadSingleBuddy('${buddy.gender}')">
          <h3>${buddy.name.first}</h3>
          <p>${buddy.email}</p>
          <img src="${buddy.picture.large}" width="100">
           </div>
          
          `;
          buddiesElement.appendChild(div);
     }
}

const loadSingleBuddy = gender => {
     console.log(gender);
     const url = `https://randomuser.me/api/?gender=${gender}`;
     console.log(url);
}