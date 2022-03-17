// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (num) {
    const fineNumber = num * 3;
    console.log(`The result of squaring the number ${num} is ${fineNumber}.`);
    return fineNumber
};
squareNumber(3);

// -Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (num) {
    const devNumber = num / 2;
    console.log(`Half of 5 is 2.5.`)
    return devNumber
};

halfNumber(5);

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (x, y) {
    const percent = 100 * x / y;
    console.log(`${x} is 50% of ${y}.`);
    return percent
}
percentOf(4, 2);

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
const area = Math.PI * radius * 2;
console.log(`The area for a circle with radius ${radius} is ${area}.`)
return area

};
areaOfCircle(2) 
// - Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle_Fixed = function (radius) {
    const area = Math.PI * radius * 2;
    const finalArea = area.toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${finalArea}.`)
    return area
    
    };
    areaOfCircle_Fixed(2) 

// #Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

const combinedFunc = function (num) {
    const result1 = halfNumber(num);
    const result2 = squareNumber(result1);
    const result3 = areaOfCircle(result2);
    const result4 = percentOf(result3, result2);
};
console.log(5)


// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

///////////////

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
 const DrEvil = function (amount) {
     if (amount = 1000000);
     console.log('pinky');
 };
DrEvil(1000000);

// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function (word1, word2) {
    const string_1 = word1.substring(1, 0)
    const string_2 = word2.substring(0, 1)
    console.log(`"${string_1}", "${string_2}"`)
};
mixUp("Brany", "Gil");

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function(babble) {
    const returnWord = babble.replace(babble[0],"*")
    console.log(returnWord);
};
fixStart('babble');
