getData()
async function getData() {
    const response = await fetch('https://www.swapi.tech/api/starships/9/');
    const result = await response.json();
    console.log('result: ', result);
}


// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));




// Exercise 2: Analyze
Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
Analyse the code provided above before executing it - what will be the outcome?

=>> we are calling asyncCall() first - it will console.log word calling, then after two seconds we it will log 'resolvved'