const myFunction = () => {
    const message = 'This is my message';
    const printMessage = () => {
        console.log(message);
    };
    return printMessage;
};

const myPrintMessage = myFunction();
myPrintMessage();

// Naujas

const createCount = () => {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    };
};

const counter = createCount();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// dar vienas

const createAdder = (a) => {
    return (b) => {
        return a + b;
    };
};

const add10 = createAdder(10);
console.log(add10(-2));

// ir kitas

const createTipper = (a) => {
    return (b) => {
        return `You have $${a * b} tips!`;
    };
};

const tips15 = createTipper(0.15);
console.log(tips15(20));