// 🌟 Exercise 1 : Giphy API

const APIkey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
const URL = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${APIkey}`

const  xhr = new XMLHttpRequest();
xhr.addEventListener('load', hendleSubmit);
xhr.open('GET', URL);
// xhr.responseType = 'json';
xhr.send();

function hendleSubmit (event) {
    const response = JSON.parse(xhr.response)

    if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(response);
    }
}

// 🌟 Exercise 2 : Giphy API

const APIkey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const TERM = 'sun';
const LIMIT = 10;
const OFFSET = 2;
const URL = `https://api.giphy.com/v1/gifs/search?q=${TERM}&rating=g&api_key=${APIkey}&limit=${LIMIT}&offset=${OFFSET}`

const  xhr = new XMLHttpRequest();
xhr.addEventListener('load', hendleSubmit);
xhr.open('GET', URL);
// xhr.responseType = 'json';
xhr.send();

function hendleSubmit (event) {
    const response = JSON.parse(xhr.response)

    if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(response);
    }
}
