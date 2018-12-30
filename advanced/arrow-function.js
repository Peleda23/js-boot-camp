const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
};

console.log(square(5));

const people = [{
    name: 'Tomas',
    age: 32
}, {
    name: 'Algis',
    age: 27
}, {
    name: 'Jonas',
    age: 22
}];

const under301 = people.filter(function (person) {
    return person.age < 30;
});

const under30 = people.filter((person) => person.age < 30);

const person = people.find((person) => person.age == 22);

console.log(under30);
console.log(person.name);