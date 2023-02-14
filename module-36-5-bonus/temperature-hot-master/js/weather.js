const apiKey = 'f082e9da330f62858d0b8d079837ba3e';

const searchTem = () => {

     const cityNameField = document.getElementById("city-name");
     const cityNameText = cityNameField.value;
     // console.log(cityNameText);
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameText}&appid=${apiKey}&units=metric`;
     console.log(url);
     fetch(url)
          .then(res => res.json())
          .then(data => displayWeatherResult(data))
}

const displayWeatherResult = tempaature => {
     console.log(tempaature);
     const cityName = document.getElementById("city")
     cityName.innerText = tempaature.name;

     const temp = document.getElementById("temp");
     temp.innerText = tempaature.main.temp;

     const condition = document.getElementById("condition");
     condition.innerText = tempaature.weather[0].main;

     const url = `https://openweathermap.org/img/wn/${tempaature.weather[0].icon}@2x.png`
     const image = document.getElementById("image");
     image.setAttribute('src', url);

}