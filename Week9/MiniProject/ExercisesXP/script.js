const form = document.forms[0]
const city = document.getElementById('city')
const button = document.getElementById('show_weather')

form.addEventListener('submit', function getCityName(e) {
    e.preventDefault();
    const cityName = city.value;
    getWeatherData(cityName)
})

// function getCityName(e) {
//     e.preventDefault();
//     const cityName = city.value;


//     getWeatherData(cityName)
// }

function getWeatherData(city) {
    const API_KEY = '6bc236fa8bd5e7e03f83fd8cea3eac74'
    const CITY = city
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`
    
    const xhr = new XMLHttpRequest();
    if (city) {
        xhr.open('GET', URL);
        xhr.send();

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.response);
                retriveCityInfo(response)
            } else {
                alert(`Error. Please try again.`)
            }
          };
    } else {
        alert('Please write the city name and try again')
    }
};


function retriveCityInfo(data) {

    
    cityData.push(data);
  }





//   const keys = [0, 1, 2];
//   const values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];
   
//   const keyValuePairs = keys.map((key, index) => [key, values[index]]);
//   const object = Object.fromEntries(keyValuePairs);
   
//   console.log(object);


function addCityInfo (data) {
    console.log(data);

    const cityName = data.name;
    const temp = data.main.temp;
    const icon = data.weather[0].icon
    const description = data.weather[0].description;

}

function displayWeather () {
    const weatherDiv = document.createElement('div');
    const container = document.getElementById('weather_container')
    weatherDiv.classList.add('card')

    weatherDiv.innerHTML = `
    <h4>${cityName}</h4>
    <h3>${temp}</h3>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
    <h4>${description}</h4>`

    container.appendChild(weatherDiv)
}


function deleteCard () {

}

