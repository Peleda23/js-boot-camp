let converter = function(fahrenheit){
  let result = (fahrenheit - 32) * 5 / 9;
  return result;
};

let celsius = converter(68);
console.log(celsius);