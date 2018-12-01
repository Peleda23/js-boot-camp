// === - equality operator
// !== - no equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

let temp = 180;

if (temp <= 32) {
  console.log("it is freezing outside");
} 

if (temp >= 100) {
  console.log("Its is way to hot");
}

// Challenge area

// Create age set to your age
let age = 21;


if (age <= 7) {
  console.log("you get child discount");
} else if (age >= 7 && age <= 64) {
  console.log("For your age no discount");
} else {
  console.log("you get discount for old people");
}