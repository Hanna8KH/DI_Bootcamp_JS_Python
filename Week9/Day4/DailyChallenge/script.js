const BASE_URL = 'https://api.giphy.com/v1/gifs/random'
const APIkey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const URL = `${BASE_URL}?&rating=g&api_key=${APIkey}`

const form = document.querySelector("form");
const input = document.getElementById('term');
const gifContainer = document.getElementById('container')

form.addEventListener('submit', gifRequest);

function gifRequest (e) {
    e.preventDefault();
    const TAG = `${input.value}`
    const gifUrl = `${URL}&tag=${TAG}`
    // input.value = '';

    getGifData(gifUrl)
}

function getGifData(url) {
    const  xhr = new XMLHttpRequest();
    xhr.addEventListener('load', responseHandler);
    xhr.open('GET', url);
    xhr.send();

    function responseHandler () {
        const response = JSON.parse(xhr.response)
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            console.log('resp', response);
        }
        const gifImg = response.data.images.fixed_height.url;
        addGifToDom(gifImg)
    }
}

function addGifToDom(imgUrl) {
    const gifDiv = document.createElement('div');
    gifDiv.setAttribute('id', 'gifDiv')
    const gifElement = document.createElement('img');
    gifElement.setAttribute('src', imgUrl)
 
    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', deleteGif)


    gifContainer.appendChild(gifDiv);
    gifDiv.appendChild(gifElement);
    gifDiv.appendChild(button);
}

function deleteGif() {
    const container = document.getElementById('gifDiv')
    container.remove();
}