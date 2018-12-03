let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
};

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
};

let getSummary = function(book){
  return {
    summary: `${book.title} by ${book.author}.`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  };
};

let bookSummary = getSummary(myBook);
let otherSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

let tempConversion = function(fahrenheit){
  let celsius = (fahrenheit - 32) * 5 /9;
  let kelvin = celsius + 273.15;
  return {
    fahrenheit: fahrenheit,
    celsius: celsius,
    kelvin: kelvin
  };
};

let temp = tempConversion(74);
console.log(temp);