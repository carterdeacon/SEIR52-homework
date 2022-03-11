// Write a function called squareNumber that will take one argument (a number), 
// square that number, and return the result. It should also log a string like 
// "The result of squaring the number 3 is 9."

const squareNumber = function(num) {
    const numSquared = num * num;
    console.log(`The result of squaring the number ${ num } is ${ numSquared }`);
    return numSquared;
}
 squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), 
// divide it by 2, and return the result. It should also log a string like 
// "Half of 5 is 2.5.".

const halfNumber = function(num) {
    const numHalved = num / 2;
    console.log(`Half of ${ num } is ${ numHalved }`);
    return numHalved;
};

halfNumber(5);

// Write a function called percentOf that will take two numbers, figure out what 
// percent the first number represents of the second number, and return the result. 
// It should also log a string like "2 is 50% of 4."

const percentOf = function(num1, num2) {
    const percentCalc = num1 / num2 * 100;
    console.log(`${ num1 } is ${ percentCalc }% of ${ num2 }`);
    return percentCalc;
};

percentOf(2, 4);

// Write a function called areaOfCircle that will take one argument (the radius), 
// calculate the area based on that, and return the result. It should also log a string 
// like "The area for a circle with radius 2 is 12.566370614359172."
 // Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius) {
    const area = Math.PI * radius * radius;
    const areaRounded = area.toFixed(2);
    console.log(`The area for a circle with radius ${ radius } is ${ areaRounded }`);
    return area;
};

areaOfCircle(2);

// Part 2
// Write a function that will take one argument (a number) and perform the following 
// operations, using the functions you wrote earlier:


const callAllFunctions = function(num) {
    // Take half of the number and store the result.
    const numHalved = halfNumber(num);
    
    // Square the result of #1 and store that result.
    const radius = squareNumber(numHalved);
    
    // Calculate the area of a circle with the result of #2 as the radius.
    const circleArea = areaOfCircle(radius);
    
    // Calculate what percentage that area is of the squared result (#3).
    const percentArea = percentOf(circleArea, radius);
    return percentArea;
};

console.log(callAllFunctions(10));


// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, 
// you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(num) {
    outputString = `${ num } dollars`;
    if (num === 1000000) {
        outputString += ' (pinky)'
    };
    return outputString;
};

console.log(DrEvil(800));
console.log(DrEvil(1000000));


// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the 
// concatenation of the two strings (separated by a space) slicing out and swapping 
// the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
// For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(string1, string2) {
    const string1FirstTwoChar = string1.slice(0, 2);
    const string1Remaining = string1.slice(2);
    const string2FirstTwoChar = string2.slice(0, 2);
    const string2Remaining = string2.slice(2);

    const mixedUpString = `${ string2FirstTwoChar }${ string1Remaining } ${ string1FirstTwoChar }${ string2Remaining }`;
    return mixedUpString;
};

console.log(mixUp('dog', 'dinner'));

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, 
// and return a version where all occurences of its first character have been replaced with 
// '*', except for the first character itself. You can assume that the string is at least one character long. 
// For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function(string) {
    const firstChar = string[0];
    const remainingChars = string.slice(1);
    const editedRemainingChars = remainingChars.replaceAll(firstChar, '*');
    return `${ firstChar }${ editedRemainingChars }`;
};

console.log(fixStart('babble'));

// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, 
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' 
// instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(string) {
    const lastThreeChars = string.slice(-3);
    const lastChar = string.slice(-1);
    
    if (string.length < 3) {
        return string;
    }

    else if (lastThreeChars === 'ing') {
        return `${ string }ly`;
    }
    
    else if (lastChar === 'm') {
        return `${ string }ming`;
    }

    else {
        return `${ string }ing`;
    }
};

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));

// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' 
// substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function(string) {
    const notIndex = string.indexOf('not');
    const badIndex = string.indexOf('bad');
    
    if (notIndex === -1 | badIndex === -1) {
        return string;
    }
    else if (badIndex < notIndex) {
        return string;
    }
    else {
        return `${ string.substring(0, notIndex) }good${ string.substring(badIndex +3) }`;
    }    
    
};
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
