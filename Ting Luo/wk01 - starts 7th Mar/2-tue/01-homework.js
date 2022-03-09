// # The Calculator

// ## Part 1
/* - Write a function called squareNumber that will take one argument (a number), square that number,
and return the result. It should also log a string like "The result of squaring the number 3 is 9." */
const squareNumber = function (num) {
    let result = num * num;
    let message = `The result of squaring the number ${num} is ${result}.`;
    console.log(message);
    return result;
};
squareNumber(3);

/* - Write a function called halfNumber that will take one argument (a number), divide it by 2, and 
return the result. It should also log a string like "Half of 5 is 2.5.". */
const halfNumber = function (num) {
    let result = num / 2;
    let message = `Half of ${num} is ${result}.`;
    console.log(message);
    return result;
};
halfNumber(5);

/* - Write a function called percentOf that will take two numbers, figure out what percent
the first number represents of the second number, and return the result. It should also log
a string like "2 is 50% of 4." */
const percentOf = function (num_1, num_2) {
    let result = (num_1 / num_2) * 100;
    let message = `${num_1} is ${result}% of ${num_2}.`;
    console.log(message);
    return result;
}
percentOf(2, 4);

/* - Write a function called areaOfCircle that will take one argument (the radius), 
calculate the area based on that, and return the result. It should also log a string like
"The area for a circle with radius 2 is 12.566370614359172."
- Bonus: Round the result so there are only two digits after the decimal. */
const areaOfCircle = function (radius) {
    let area = (radius * radius * Math.PI).toFixed(2);
    message = `The area for a circle with radius ${radius} is ${area}.`;
    console.log(message);
    return area;
};
areaOfCircle(2);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).
const combineFuncs = function (number) {
    let halfNum = halfNumber(number);
    let squareNum = squareNumber(halfNum);
    let circleArea = areaOfCircle(squareNum);
    let perentageResult = percentOf(circleArea, squareNum);
};
combineFuncs(10);

// # Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
// ## DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
const DrEvil = function (amount) {
    if (amount === 1000000) {
        output = `${amount} dollars (pinky)`
    }else {
        output = `${amount} dollars`
    };
    console.log(output);
    return output;
};
DrEvil(10);
DrEvil(1000000);

// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const mixUp = function (str_1, str_2) {

    let new_first_str = str_2.slice(0,2) + str_1.slice(2);
    let new_second_str = str_1.slice(0,2) + str_2.slice(2);
    let output = `${new_first_str} ${new_second_str}`;
    console.log(output);
    return output
};

mixUp('mix','pod');
mixUp('dog','dinner');

// ## FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
const fixStart = function (str) {
    let output = str[0]
    for (let i =1; i < str.length; i++)  {
        if (str[i] == str[0]) {
            output += "*";
        }else {
            output += str[i]; 
        };
    };
    console.log(output);
    return output;
};
fixStart('babble');


const fixStart_1 = function (str) {
    let replaceStr = str.substring(1);
    let output = str[0] + replaceStr.replaceAll(str[0],"*");
    console.log(output);
    return output;   
};
fixStart_1('babble');
// ## Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
const verbing = function (str) {
    if(str.length > 3) {
        if (str.endsWith('ing') == true) {
            output = str +'ly';
        }else{
        output = str + 'ing';
        }   
    }else{
        output = str;
    }
    console.log(output);
    return output;
};

verbing('swim');
verbing('swimming');
verbing('go');
// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```
const notBad = function (str) {
    let output = str.replace(/not.*bad/g,'good');
    console.log(output);
    return output;
};
notBad('This dinner is not that bad!');
notBad('This dinner is bad!');
notBad('This movie is not so bad!');

const notBad_1 = function(str) {
    let indexNot = str.indexOf('not');
    let indexBad = str.indexOf('bad');
    if(indexNot < indexBad && indexNot!=-1) {
        output = str.substring(0,indexNot) + 'good!';
    }else {
        output = str;
        }
    console.log(output);
    return output;
};
notBad_1('This dinner is not that bad!');
notBad_1('This dinner is bad!');
notBad_1('This movie is not so bad!');