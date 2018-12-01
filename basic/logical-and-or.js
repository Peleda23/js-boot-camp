let temp = 55;

if (temp >= 60 && temp <= 90){
  console.log("It is pretty nice outside");
} else if (temp <= 0 || temp >= 120) {
  console.log("do not go outside");
} else {
  console.log("do what you want");
}

// Challenge are

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure offer some vegan dishes");
} else {
  console.log("Offer everything");
}