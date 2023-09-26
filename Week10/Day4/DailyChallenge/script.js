const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const [city1lat, city1long, city2lat, city2long] = [...form.elements].map((input) => input.value));

    const url1 = getApiUrl(city1lat, city1long);
    const url2 = getApiUrl(city2lat, city2long);

    const promise1 = fetch(url1).then((res) => res.json());
    const promise2 = fetch(url2).then((res) => res.json());
    
    Promise.all([promise1, promise2])
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};

function getApiUrl(lat, lng) {
    return `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`
}

