const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat', 2);

puzzleEl.textContent = game1.getPuzzle();
guessEl.textContent = game1.remainingGuesses;
console.log(game1.status);


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.getPuzzle();
    guessEl.textContent = game1.remainingGuesses;
    console.log(game1.status);
});