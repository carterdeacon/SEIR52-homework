console.log('Steve Yegge Coding Test Questions')

console.log('1. Write a function to reverse a string.')

function reverse(string) {
    // let array = string.split('')
    // let flip = array.reverse()
    // let join = flip.join('')
    // console.log(join)

    const reversed = string.split('').reverse().join('')
    console.log(reversed)
}

reverse('this is a test')

///////

console.log('Write function to compute Nth fibonacci number:')

function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(8))

///////

console.log('Print out the grade-school multiplication table up to 12x12')

const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function timestables(n) {
    table.forEach(element => {
        const result = n * element
        console.log(result)
    }); 
};

timestables(2);

////////

console.log('Write function to print the odd numbers from 1 to 99.')

const oddNums = () => {
    for ( let i = 1; i < 100; i++ ) {
        if ( i % 2 !== 0 ) {
            console.log(i)
        }
    }
};

oddNums();

////////

console.log('Find the largest int value in an int array.')

const data = [4, 5, 7, 9, 11, 23, 2, 21];

const largest = (array) => {
    array.sort((a, b) => b - a);
    console.log(`The largest value in [${data}] is ${ array[0] }`);
};

largest(data);

////////

console.log('Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.')

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16) // converts the number to hexadecimals
    return hex.length === 1 ? '0' + hex : hex // If hex.length === 0 return 0+hex (eg. hex = 1 return 01) else return hex
}).join('')
  
console.log(rgbToHex(0, 51, 255)); // #0033ff
console.log(rgbToHex(52, 235, 103)); // #34eb67