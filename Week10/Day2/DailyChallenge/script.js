const { response } = require("express")

// 1rst Daily Challenge
const myWords = ['this', 'is', 'my', 'words', 'array']

function makeAllCaps(words) {
    const uppercasedWords = new Promise((resolve, reject) => {
        if (words.every(checkWords)) {
            resolve(words.map((word) => word.toUpperCase()))
        }else{
            reject('All words should be strings')
        }
    })
    return uppercasedWords
}


function sortWords(WORDS) {
    const sortedWords = new Promise((resolve, reject) => {
        if (WORDS.length > 4) {
            resolve(WORDS.sort())
        }else{
            reject('Array is too short.')
        }
    })
    return sortedWords
}

makeAllCaps(myWords)
      .then((res) => sortWords(res))
      .then(console.log)
      .catch(console.error);


function checkWords(word){
    return typeof word === 'string'
}





// 2nd Daily Challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


function toJs() {
    const morseJs = new Promise ((resolve, reject) => {
        if (!morse.length === 0) {
            const morseObject = JSON.parse(morse)
            resolve(morseObject)
        }else{
            reject("Morse is empty.")
        }
    }) 
    return morseJs
}:



function isWordOk(word, possibleLetters) {
    const userLetters = word.split("");
    return userLetters.every((letter) => possibleLetters.includes(letter));
};

function translateUserInput(morseJS) {
    const word = prompt('Write a word');
    return new Promise((resolve, reject) => {
        const possibleLetters = Object.keys(morseJS);
        if (!isWordOk(word, possibleLetters)) {
            reject('Please type some lowercase characters');
        } else {
            const result = {word: word; morse: convertToMorse(word, morseJS)}
            resolve(result);
        }
    };    
};

function convertToMorse(word, morseJS) {
    const letters = word.split("");
    return letters.map((letter) => morseJS[letter]));
}

function joinsWords({word, morse}) {
    document.getElementById("word").innerText = word;
    morse.forEach((sign, i) => {
        const h5 = document.createElement('h5');
        h5.innerText = sign;
        document.getElementById('morse').appendChild(h5);
    })
};

getMorseDictionary()
.then((morseObject) => translateUserInput(morseObject);
.then((wordAndTranslation) => displayOnPage(wordAndTranslation));
.catch((err) => console.error(err));


// function toJs() {
//     const morseJs = new Promise ((resolve, reject) => {
//         if (!morse.length === 0) {
//             const morseObject = JSON.parse(morse)
//             resolve(morseObject)
//         }else{
//             reject("Morse is empty.")
//         }
//     }) 
//     return morseJs
// }:

// toJs()
// .then((res) => console.log(res))
// .catch((err) => console.error(err))



// function toMorse(morseJS) {
//     const word = prompt('Write smth');
//     const result = new Promise((resolve, reject) => {
//         const morseLetters = Object.keys(morseJS)
//         if (word.toLocaleLowerCase.split('').some((character) => !morseLetters.includes(morseLetters))){
//             reject('Your sentence inclides invalid character')
//         } else {
//             resolve()
//         }
//     })

// }
