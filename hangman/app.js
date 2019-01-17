const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const game1 = new Hangman('car parts', 2);

puzzleEl.textContent = game1.puzzle;
guessEl.textContent = game1.statusMessage;


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessEl.textContent = game1.statusMessage;
});

// Make an Http request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    }
});

request.open('GET', 'http://puzzle.mead.io/puzzle');
request.send();