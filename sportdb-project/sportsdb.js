function searchSports() {
     const searchField = document.getElementById("search-field");
     const searchText = searchField.value;

     searchField.value = '';

     const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displaySearch(data));
}

const displaySearch = data => {
     const tems = data.teams;
     // console.log(tems);
     const searchResult = document.getElementById("search-result");
     // searchResult.textContent = '';

     for (const team of tems) {
          const div = document.createElement("div");
          div.classList.add("col");
          div.innerHTML = `
          <div>
               <img src="${team.strTeamLarge}" class="card-img-top fluid" width="200" alt="...">
               <div class="card-body">
                    <h5 class="card-title">${team.strAlternate}</h5>
                    <p class="card-text">${team.strDescriptionEN.slice(0, 100)}</p>
                    <p class="card-text">${team.strCountry}</p>
                    <p class="card-text">${team.strLeague}</p>
                    <button onclick="loadSigleTeam(${team.idAPIfootball})">club details</button>
               </div>
          </div>
                    
          
          `;
          searchResult.appendChild(div);


     };
}


const loadSigleTeam = teamId => {
     console.log(teamId);
     const url = `https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchteams.php?sname=${teamId}`
     fetch(url)
          .then(res => res.json())
          .then(data => displaySingleTeam(data[0]))
}

const displaySingleTeam = team => {
     const singleTeam = document.getElementById("single-team");
     const div = document.createElement("div");
     div.classList.add("card");
     div.innerHTML = `
     <img src="${team.strTeamBadge}" class="card-img-top w-50" >
                    <div class="card-body">
                         <h5 class="card-title">Card title</h5>
                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                              the
                              card's content.</p>
                         <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
     `
     singleTeam.appendChild(div);
}