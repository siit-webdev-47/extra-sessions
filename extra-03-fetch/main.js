console.log('main.js is loaded....');


const quoteDisplay = document.querySelector('#quote');

async function requestQuote() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    console.log(response.status);

    const data = await response.json();
    quoteDisplay.textContent = data.value;
}


setTimeout(requestQuote, 1000);