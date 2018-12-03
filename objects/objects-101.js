let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

let aboutMe = {
  name: 'Tomas',
  age: 32,
  location: 'Klaipeda'
};

console.log(`${aboutMe.name} is ${aboutMe.age} and lives in ${aboutMe.location}`);

aboutMe.age = aboutMe.age + 1;

console.log(`${aboutMe.name} is ${aboutMe.age} and lives in ${aboutMe.location}`);