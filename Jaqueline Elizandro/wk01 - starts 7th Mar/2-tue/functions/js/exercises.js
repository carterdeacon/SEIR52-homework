// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function (number) {
    return number * number;
}
const numberSquare = 3;
const resultSquare = squareNumber(numberSquare);
console.log(`The result of squaring the ${numberSquare} is ${resultSquare}`);


const halfNumber = function (number) {
    return number / 2;
}
const numberHalf = 5;
const resultHalfNumber = halfNumber(numberHalf);
console.log(`Half of ${numberHalf} is ${resultHalfNumber}`);


const percentOf = function (num1, num2) {
    return (num1 * 100) / num2;
}
const numPercent1 = 2;
const numPercent2 = 4;
const resultPercent = percentOf(numPercent1, numPercent2);
console.log(`${numPercent1} is ${resultPercent}% of ${numPercent2}`);

const areaOfCircle = function (radius) {
    const area = Math.PI * (radius * radius); 
    return area.toFixed(2);
}
const radius = 2;
const resultArea = areaOfCircle(radius);  
console.log(`The area for a circle with radius ${radius} is ${resultArea}`);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const calculate = function (number) {
    const calculatedHalfNumber = halfNumber(number);
    const calculatedSquareNumber = squareNumber(calculatedHalfNumber);
    const calculatedArea = areaOfCircle(calculatedSquareNumber);
    const calculatedPercent = percentOf(calculatedArea, calculatedSquareNumber);
    return `${calculatedHalfNumber} ${calculatedSquareNumber} ${calculatedArea} ${calculatedPercent}`;
}
const resultuCalculate = calculate(5);
console.log(resultuCalculate);


// js-homework-2.md
// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function (amount) {
    const result = `${amount} dollars (pinky)`;
    return result
}
const resultDrEvil = drEvil(10);
console.log(resultDrEvil);

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (string1, string2) {
    const result = `${string1} ${string2}`;
    return result;
}
const resultuMixUp = mixUp('mix', 'pod');
console.log(resultuMixUp);

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

const fixStart = function (string) {
    let stringLength = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[0]) {
            stringLength = stringLength + "*";
        } else {
            stringLength = stringLength + string[i];
        }
    }
    return stringLength;
}
const resultFixStart = fixStart('babble');
console.log(resultFixStart);


// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function (string) {
    let newString;
    if (string.length < 3) {
        newString = string;
    } else if (string.substr(string.length - 3) === 'ing') {
        newString = string + 'ly';
    } else {
        newString = string + 'ing';
    }
    return newString;
}
const resultVerbing = verbing('go');
console.log(resultVerbing);

// Not Bad
// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function (string) {
    const indexNot = string.indexOf('not');
    const indexBad = string.indexOf('bad');
    if (indexNot !== -1 && indexNot < indexBad) {
        return `${string.substring(0, indexNot)}good${string.substring(indexBad + 3)}`
    }
    return string;
}
const resultNotBad = notBad('This movie is not so bad!');
console.log(resultNotBad);