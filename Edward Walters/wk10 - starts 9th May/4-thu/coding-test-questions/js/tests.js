
// Write a function to reverse a string.

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

console.log(reverseString('test-reverse-string'));

// manual

const reverseStringManual = (str) => {
    const arr = str.split('');
    const output = [];
    for (let i = arr.length -1; i > 0; i-- ) {
        output.push(arr[i]);
    };
    return output.join('');
}

console.log(reverseStringManual('test-reverse-string'));

// Write function to compute Nth fibonacci number:

const fibonacci = (n) => {
    if (n < 2) {
        return 1;
    };
    return fibonacci(n-1) + fibonacci(n-2);   // I forgot this line, had to look it up, thought it was fib(n-1) + fib(n)
};

console.log(fibonacci(7));


// Print out the grade-school multiplication table up to 12x12

const timesTables = () => {
    for (let i = 1; i <13; i++) {
        for (let j = 1; j < 13; j++) {
            console.log (`${i} x ${j} = ${ i * j}`);
        };
    };
};

timesTables();


// Write a function that sums up integers from a text file, one int per line.

const sumIntegers = (file) => {
    let sum = 0;
    const fs = require('fs');
    const data = fs.readFileSync(file, 'utf-8');
        
        const arr = data.split('\n');
        
        for (let el of arr) {
            sum += Number(el);
        };
        return sum;
    }

console.log(sumIntegers('../numbers.txt'));


// Write function to print the odd numbers from 1 to 99.
const oddNumbers = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        };
    };
};

oddNumbers(1,99);


// Find the largest int value in an int array.

const findLargest = (arrayOfNumbers) => {
  arrayOfNumbers.sort((a, b) => {
       return a-b;
    });
    return Number(arrayOfNumbers.slice(-1));
};

console.log(findLargest([1, 5, 3, 7, 2, 9, 45]));


// manual 

const findLargestManual = (arrayOfNumbers) => {
    let max = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > max) {
            max = arrayOfNumbers[i];
        };
    };
    return max;
  };
  
  console.log(findLargestManual([1, 5, 3, 7, 2, 9, 45]));

  

//   Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.

// had to research this one!

const RGBToHEX = (r,g,b) => {
    const componentToHex = (c) => {
        const hex = c.toString(16);
        if (hex.length === 1) {
            return "0" + hex 
        } else {
            return hex;
        }
        }
    return componentToHex(r) + componentToHex(g) + componentToHex(b);

};
    

console.log(RGBToHEX(234, 22, 46));