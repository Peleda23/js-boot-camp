// function - input, code, output

let greetUser = function (){
  console.log('welcome');
};

greetUser();
greetUser();
greetUser();

let square = function(num){
  let result = num * num;
  return result;
};

let value = square(3);
console.log(value);




let converter = function(fahrenheit){
  let result = (fahrenheit - 32) * 5 / 9;
  return result;
};

let celsius = converter(68);
console.log(celsius);