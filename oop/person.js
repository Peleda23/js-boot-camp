class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
        return bio;
    }
    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, like) {
        super(firstName, lastName, age, like);
        this.position = position;
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`;
    }
    getYearLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    updateGrade(change) {
        this.grade += change;
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing';
        return `${this.firstName} is ${status} a class.`;
    }
}

const me = new Employee('Tomas', 'Murinas', 33, 'programer', []);
me.fullName = 'Antanas Poska';
console.log(me.getBio());



// const me = new Employee('Tomas', 'Murinas', 32, 'programer', ['cooking', 'reading']);
// me.setName('Robin Hud');
// console.log(me.getBio());
// console.log(me.getYearLeft());

// const brother = new Person('Tadas', 'Murinas', 35);
// console.log(brother.getBio());