const quotes = [
    {
      id: 0,
      author: "Olaf",
      quote: "Some people are worth melting for.",
      likes: 0,
    },
    {
      id: 1,
      author: "Master Oogway",
      quote: "Yesterday is history.",
      likes: 0,
    },  
    {
      id: 2,
      author: "Master Oogway",
      quote: "Tomorrow is a mystery.",
      likes: 0,
    },
    {
      id: 3,
      author: "Master Oogway",
      quote: "But today is a gift.",
      likes: 0,
    },
    {
      id: 4,
      author: "Master Oogway",
      quote: "That is why it is called the present.",
      likes: 0,
    },
    {
      id: 5,
      author: "Iroh (Avatar: The Last Airbender)",
      quote: "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",
      likes: 0,
    },
  ];


  const generateQuoteButton = document.getElementById('generateQuoteButton');
  generateQuoteButton.onclick = qenerateQuote;
  let nowQuoteIndex = -1;
  const section = document.querySelector('section');
  
  function qenerateQuote() {
      let newQuoteIndex = Math.floor(Math.random()*quotes.length);
      const divDisplayCounter = document.querySelector('#displayNumber');
  
  
       do { 
          newQuoteIndex = Math.floor(Math.random()*quotes.length);
       } while (
          newQuoteIndex === nowQuoteIndex
       );
      nowQuoteIndex = newQuoteIndex;
  
      const randomQuote = quotes.find(item => item.id === nowQuoteIndex);
      
      const quoteText = document.createElement('h2');
      const authorOfQoute = document.createElement('h4');
      quoteText.innerText = randomQuote.quote;
      authorOfQoute.innerText = randomQuote.author;   
      
      section.innerHTML = '';
      divDisplayCounter.innerHTML = '';
  
  
      section.appendChild(quoteText);
      section.appendChild(authorOfQoute);
  
  };
  
  const submitButton = document.querySelector('#addQuote');
  submitButton.onclick = addNewQuote;
  
  function addNewQuote (event) {
    event.preventDefault();
  
    const newQuote = document.querySelector('#createQuote');
    const newQuoteAuthor = document.querySelector('#createQuoteAuthor');
    let id = quotes.length;
  
    const addNewQuote = {};
    addNewQuote.id = id;
    addNewQuote.author = newQuoteAuthor.value;
    addNewQuote.quote = newQuote.value;
    addNewQuote.likes = 0;
  
    quotes.push(addNewQuote);
    newQuote.value = '';
    newQuoteAuthor.value = '';
  };
  
  
  const charactersSpaceIncluded = document.querySelector('#charactersSpaceIncluded');
  charactersSpaceIncluded.onclick = counterWithSpaces;
  
  function counterWithSpaces (event) {
    event.preventDefault();
  
    const quoteText = document.querySelector('h2');
    const divDisplayCounter = document.querySelector('#displayNumber');
    const numberOfCharacters = document.createElement('div');
  
    numberOfCharacters.innerText = quoteText.textContent.length;
    divDisplayCounter.innerHTML = '';
    divDisplayCounter.appendChild(numberOfCharacters);  
  }
  
  
  const charactersSpaceNotIncluded = document.querySelector('#charactersSpaceNotIncluded');
  charactersSpaceNotIncluded.onclick = counterWithoutSpaces;
  
  function counterWithoutSpaces (event) {
    event.preventDefault();
  
    const quoteText = document.querySelector('h2');
    const divDisplayCounter = document.querySelector('#displayNumber');
    const numberOfCharactersWithoutSpaces = document.createElement('div');
  
    numberOfCharactersWithoutSpaces.innerText = quoteText.innerText.split(' ').join('').length;
    divDisplayCounter.innerHTML = '';
    divDisplayCounter.appendChild(numberOfCharactersWithoutSpaces);  
  }
  
  
  const numberOfWords = document.querySelector('#numberOfWords');
  numberOfWords.onclick = counterForWords;
  
  function counterForWords (event) {
    event.preventDefault();
  
    const quoteText = document.querySelector('h2');
    const divDisplayCounter = document.querySelector('#displayNumber');
    const numberOfWords = document.createElement('div');
  
    numberOfWords.innerText = quoteText.innerText.split(' ').length;
    divDisplayCounter.innerHTML = '';
    divDisplayCounter.appendChild(numberOfWords);  
  }
  
  const likesCounter = document.querySelector('#likes');
  likesCounter.onclick = counterForLikes;
  
  function counterForLikes (event) {
    event.preventDefault();
  
    const currentQuote = quotes.find((element) => element.id === nowQuoteIndex);
  
    const divDisplayCounter = document.querySelector('#displayNumber');
    divDisplayCounter.innerText = currentQuote.likes++;
  }
  
  
  const filterButton = document.querySelector('#filterButton')
  
  
  let filteredQuotes = [];
  let filteredIndex = -1;
  
  function filterAuthor (event) {
    event.preventDefault();
    
    const currentAuthor = document.querySelector('#filterAuthor');
    const currentQuotes = quotes.filter((element) => element.author === currentAuthor.value);
    const section = document.querySelector('section#filter1');
  
    section.innerHTML = '';
  
    for (const quote of currentQuotes) {
      const element = document.createElement('h3');
      element.innerText = quote.quote;
      section.appendChild(element);
    }
  
    filteredQuotes = currentQuotes;
    filteredIndex = filteredQuotes.length > 0 ? 0 : -1;
  
    if (filteredQuotes.length > 0) {
      const section = document.querySelector('section#filter2');
      const element = document.createElement('h3');
      element.innerText = filteredQuotes[0].quote;
      section.appendChild(element);
    }
  }
  filterButton.onclick = filterAuthor;
  
  
  const previousButton = document.querySelector('#previousButton');
  
  function goPrevious (event) {
    event.preventDefault();
    if (filteredIndex === -1) return;
    
    if (filteredIndex === 0) {
      filteredIndex = filteredQuotes.length - 1;
    } else {
      filteredIndex -= 1;
    };
    const section = document.querySelector('section#filter2');
    const element = document.createElement('h3');
    element.innerText = filteredQuotes[filteredIndex].quote;
    section.innerHTML = '';
    section.appendChild(element);
  }
  previousButton.onclick = goPrevious;
  
  
  const nextButton = document.querySelector('#nextButton');
  
  function goNext (event) {
    event.preventDefault();
    if (filteredIndex === -1) return;
    if (filteredIndex === filteredQuotes.length - 1) {
      filteredIndex = 0;
    } else {
      filteredIndex += 1;
    };
    const section = document.querySelector('section#filter2');
    const element = document.createElement('h3');
    element.innerText = filteredQuotes[filteredIndex].quote;
    section.innerHTML = '';
    section.appendChild(element);
  }
  nextButton.onclick = goNext;
  
  