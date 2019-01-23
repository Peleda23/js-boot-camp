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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle);
}, (err) => {
    console.log(`Error: ${err}`);
});

getCountry('LT').then((country) => {
    console.log(country.name);
}, (err) => {
    console.log(`Error: ${err}`);
});

// working more with promises