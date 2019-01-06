const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ['c', 'e'];
};

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });

    return puzzle;

};

const guess = new Hangman('Cat', 1);
const guess2 = new Hangman('New Jersey', 2);
console.log(guess.getPuzzle());
console.log(guess2.getPuzzle());