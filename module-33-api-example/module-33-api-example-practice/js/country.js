function loadCountries() {
     fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
     console.log(countries);
     const countriesDiv = document.getElementById("countries");
     for (const country of countries) {
          const div = document.createElement("div");
          div.classList.add("country");
          div.innerHTML = `
          <h3>${country.name}</h3>
          <p>${country.capital}
          <button onclick="loadCountryByName('${country.name}')">details</button>
          `;
          countriesDiv.append(div);
     }
}

const loadCountryByName = name => {
     const url = `https://restcountries.eu/rest/v2/name/${name}`;
     fetch(url)
          .then(res => res.json())
          .then(data => loadCountryDetails(data[0]));
}

const loadCountryDetails = country => {
     const countryDetails = document.getElementById("country-details");
     countryDetails.innerHTML = `
     <h5>${country.name}</h3>
     <p>population:${country.population}</p?
     <img width="200px" src="${country.flag}">
     `;
}