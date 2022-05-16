// Write a function that sums up integers from a text file, one int per line.

const fs = require('fs');

fs.readFile('numbers.txt', 'utf-8', function (error, data) {
    if (error) {
        return console.error(error); // a bit wanky
    }
    const initialValue = 0;
    const array = data.split(' ')
    const nums = array.map((array) => parseInt(array));
    const sum = nums.reduce((a, b) => a + b, initialValue);

    console.log(sum);
});