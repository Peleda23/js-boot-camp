let num = 103.941;

console.log(num.toFixed(1));


console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


let min = 0;
let max = 10;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

let makeGuess = function(num){
  let number = Math.floor(Math.random() * (5 - 1 +1 )) + 1;
  console.log(number);
  return num === number;
};

console.log(makeGuess(5));