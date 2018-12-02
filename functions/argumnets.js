// Multiple arguments
let add = function(a, b, c){
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function(name = "Anonymous", score = 0){
  return "Name : " + name + " - score: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area

let tipCalculator = function(money, tip = 0.2){
  let tips = money * tip;
  return `You want to leave ${tips}$ for tips`;
};

let total = tipCalculator(100, 0.25);
console.log(total);