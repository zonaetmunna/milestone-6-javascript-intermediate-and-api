const loadcountries = () => {
     fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(data => displayConties(data))
}

loadcountries();
const displayConties = countries => {
     console.log(countries);
     const countriesContent = document.getElementById("countries");
     countries.forEach(country => {
          console.log(country);
          const div = document.createElement("div");
          div.classList.add("country");
          div.innerHTML = `
          <h2>Name:${country.name}</h2>
          <p>Capital:${country.capital}</p>
          <img width="100" src="${country.flag}">
          <button onclick="loadDisplayCountry('${country.name}')">show Details</button
          `;
          countriesContent.appendChild(div);
     });


}

const loadDisplayCountry = name => {
     const url = `https://restcountries.eu/rest/v2/name/${name}`
     fetch(url)
          .then(res => res.json())
          .then(data => displayCountryDetail(data[0]))

}
const displayCountryDetail = country => {
     // console.log(country);
     const countryDiv = document.getElementById("country-details");
     countryDiv.innerHTML = `
     <h5>${country.name}</h5>
     <p>popuation:${country.population}</p>
     <p>time zones:${country.timezones}</p>
     <p>capial:${country.capital}</p>
     <p>region:${country.region}</p>
     <img width="200" src="${country.flag}">
     `


}