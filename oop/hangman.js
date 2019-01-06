const Hangman = function (word, remainingGuesses) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
};

const guess = new Hangman('Dog', 1);
const guess2 = new Hangman('Cat', 2);
console.log(guess);
console.log(guess2);