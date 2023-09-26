setCurrencyOptions()
handleClick()

document.getElementById('convert').addEventListener('click', handleClick);

const selectFrom = document.getElementById('from');
const selectTo = document.getElementById('to');

async function fetchCurrencies() {
    try {
      const response = await fetch('https://v6.exchangerate-api.com/v6/99873b758a7b212d9ce4f817/codes/');      
      const data = await response.json();
      const currensies = data.supported_codes;

      return currensies
    } catch (e) {
      console.log(e, 'Something went wrong!');
      return []
    }
  }

async function setCurrencyOptions() {
    const currensies = await fetchCurrencies()

    for (const currency of currensies) {
        const currencyName = currency;

        const fromOption = document.createElement('option');
        selectFrom.appendChild(fromOption);
        fromOption.innerText = currencyName;

        const toOption = document.createElement('option');
        selectTo.appendChild(toOption);
        toOption.innerText = currencyName;
    };
}

async function handleClick() {
    const fromCurrency = selectFrom.value.split(',')[0];
    const toCurrency = selectTo.value.split(',')[0];

    const amount = document.getElementById('amount').value;
    const total = document.getElementById('total')

    try {
        const url = `https://v6.exchangerate-api.com/v6/99873b758a7b212d9ce4f817/pair/${fromCurrency}/${toCurrency}`
        const result = await fetch(url);
        const resultJson = await result.json();
        const rate = resultJson.conversion_rate;
        const convertedResult = Math.floor(amount * rate);
        total.innerText = `${amount} ${fromCurrency} = ${convertedResult} ${toCurrency}`;
    } catch (e) {
        console.error(e)
    }
}
