const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const game1 = new Hangman('car parts', 2);

puzzleEl.textContent = game1.puzzle;
guessEl.textContent = game1.statusMessage;


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessEl.textContent = game1.statusMessage;
});

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error ${error}`);
    } else {
        console.log(puzzle);
    }
});

// Make an Http request


// const countryCode = 'LT';
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find((country) => country.alpha2Code === countryCode);
//         console.log(country.name);
//     } else if (e.target.readyState === 4) {
//         console.log('Error Error');
//     }
// });

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// countryRequest.send();