let name = '  Tomas Murinas  ';

// length property
console.log(name.length);

// convert to upper case
console.log(name.toUpperCase());

// convert to lower case
console.log(name.toLowerCase());

// includes method 
let password = 'absder34485';
console.log(password.includes('abs'));

// trim 
console.log(name.trim());

let isValidPassword = function(password){
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('aurbss'));
console.log(isValidPassword('123456789'));
console.log(isValidPassword('hayepassword'));
