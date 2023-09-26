const button = document.getElementById('submit');
const container = document.getElementById('container');
const characterDiv = document.createElement('div');

const xhr = new XMLHttpRequest();

button.addEventListener('click', retriveRandomCharacterData);

function retriveRandomCharacterData(e) {
    e.preventDefault()
    container.innerHTML = `
    <div class="fa-3x">
    <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
    <h5>Loading...</h5>
    </div>
    `
    const randomId = Math.floor(Math.random() * 88) + 1;
    const URL = `https://www.swapi.tech/api/people/${randomId}/`;


    xhr.open('GET', URL);

    xhr.send();
    xhr.onload = function() {
        if (xhr.status !== 200) {
            notExist()
        } else {
            const res = JSON.parse(xhr.response)
            const planetURL = res.result.properties.homeworld

            getHomeWorld(planetURL, function(planet) {
                createCharacterDiv(res, planet);
        })
    };
 };
}

function createCharacterDiv(data, homeWorld) {
    container.innerHTML = ''

    const info = data.result.properties

    console.log('home', homeWorld);
    characterDiv.style.color = 'white'
    characterDiv.innerHTML = `
    <h2 id="full-name">Name: ${info.name}</h2>
    <h4 id="height">Height: ${info.height}</h4>
    <h4 id="gender">Gender: ${info.gender}</h4>
    <h4 id="birth-year">Birth Year: ${info.birth_year}</h4>
    <h4 id="home-world">Home World: ${homeWorld}</h4>
    `
    container.appendChild(characterDiv)
}

function getHomeWorld(url, callback) {
    const URL = url;

    xhr.open('GET', URL);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status !== 200) {
            notExist()
        }else{
            const res = JSON.parse(xhr.response);
            const homeWorldName = res.result.properties.name;
            callback(homeWorldName);
        }  
    };
}

function notExist() {
    container.innerHTML = ''
    const message = document.createElement('div');
    message.textContent = 'Oh no! This person is not availiable!'
    container.appendChild(message) 
}
