const myAge = 32;
const message = myAge >= 18 ? 'You can vote!.' : 'You cannot vote!.';

// if (myAge >= 18) {
//     message = 'You can vote!.';
// } else {
//     message = 'You cannot vote!.';
// }

console.log(message);

// -----------------------------------

const myAge2 = 32;
const showPage = () => {
    console.log('Show the page.');
};

const showErrorPage = () => {
    console.log('Show the error page.');
};

myAge2 >= 21 ? showPage() : showErrorPage();

const team = ['Teris', 'Tomas', 'Kamile', 'Draugas'];
const command = team.length <= 4 ? `Team size is : ${team.length}!` : 'Too many people on your team'; 
console.log(command);