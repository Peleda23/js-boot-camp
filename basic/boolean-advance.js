let isAccountLocked = false;
let userRole = "user";


if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "admin") {
  console.log("Welcome Admin");
} else {
  console.log("Welcome");
}


let temp = -2;

if (temp <= 0){
  console.log("Its cold outside");
} else if (temp >= 0 && temp <= 30) {
  console.log("Its good weather go outside");
} else {
  console.log("Its to hot stay at home");
}