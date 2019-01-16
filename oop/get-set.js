const data = {
    get location() {
        return 'This is the test';
    }
};

// code that uses data object

data.location = 'Klaipeda';
console.log(data.location);