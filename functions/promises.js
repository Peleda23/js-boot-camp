// callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data');
    }, 2000);
};

getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data);
    }
});

// promises

const myPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is the promise data');
    }, 2000);
});

myPromises.then((data) => {
    console.log(data);
});