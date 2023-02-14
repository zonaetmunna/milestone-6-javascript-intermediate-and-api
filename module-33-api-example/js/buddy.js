const loadbBuddies = () => {
     fetch('https://randomuser.me/api/?results=5')
          .then(res => res.json())
          .then(data => displayBuddies(data))
}
loadbBuddies();

const displayBuddies = data => {
     const buddies = data.results;
     const buddiesContainer = document.getElementById("buddies-container");
     for (const buddy of buddies) {
          console.log(buddy.email);
     }
}

