/* const cityDisplayId = document.getElementById('city');
const tempId = document.getElementById('deg');
const cloudsId = document.getElementById('clouds');
const windSpeedId = document.getElementById('wind-speed')
const humidityId = document.getElementById('humidity')
const pressureId = document.getElementById('pressure')
const weatherContainer = document.getElementById('weather-status'); */




const searchLocation = () => {
     const inputField = document.getElementById("weather-input-field");
     ipLocation().then(location => {
          const defaultLoaction = location;
          const searchInputText = inputField.value;
          inputField.value = '';
          if ((inputField.value == inputField.value) || (defaultLoaction == inputField.value)) {
               const locationCity = searchInputText || defaultLoaction;
               // cityDisplayId.inn

               const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?q=${locationCity}&appid=f082e9da330f62858d0b8d079837ba3e`;
               fetch(weather_api_url)
                    .then(res => res.json())
                    .then(data => displayLoaction(data))
          }
     })
}

const displayLoaction = weather => {
     // console.log(weather);
     const temp = Math.floor(weather.main.temp - 273.15);
     const icon = weather.weather[0].icon;
     const country = weather.sys.country;
     const clouds = weather.all;
     const wind = weather.wind.speed;
     const pressure = weather.main.pressure;
     const humidity = weather.main.humidity;
     console.log(country);


     const weatherStatus = document.getElementById("weather-container");
     // console.log(weatherStatus);
     const div = document.createElement("div");
     div.innerHTML = `
     <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt=""/>
     <h1>${temp}</h1>
     <h1>${country}</h1>
     <h1>${clouds}</h1>
     <h1>${wind}</h1>
     <h1>${pressure}</h1>
     <h1>${humidity}</h1>

     `;

     weatherStatus.appendChild(div);


}

/* ip finder all location fetch */
const ipLocation = async () => {
     const ip_api_url = `https://freegeoip.app/json/`;
     const res = await fetch(ip_api_url);
     const data = await res.json()
     const city = await data.city;
     return city;
}
