console.log('Is this thing on?');

// # Exercises: Variables

// ## The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// - Store the following into variables: number of children, partner's name, geographic location, job title.
// - Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const numKids = 5;
const partnerName = 'Chamber';
const geoLocation = 'Fracture';
const jobTitle = 'Duelist';

// Traditional JS:
// const fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numKids + ' kids.';
// console.log(fortune)

// Interpulation:
const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numKids } kids.`
console.log(fortune);


// ## The Age Calculator

// Forgot how old someone is? Calculate it!

// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Calculate their 2 possible ages based on the stored values.
// - Output them to the screen like so: "They are either NN or NN", substituting the values.

const currentYear = 2022;
const birthYear = 2001;

const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;

console.log(`"They are either ${ ageBeforeBirthday } or ${ ageAfterBirthday }`);

// ## The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// - Store your current age into a variable.
// - Store a maximum age into a variable.
// - Store an estimated amount per day (as a number).
// - Calculate how many you would eat total for the rest of your life.
// - Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge = 33;
const deathAge = 99;
const amountPerDay = 11; // negative thoughts

const amountPerYear = amountPerDay * 365.25 // leap years
const yearsRemaining = deathAge - currentAge;

const amountRequired = amountPerYear * yearsRemaining;
console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ deathAge }`);

// ## The Geometrizer

// Calculate properties of a circle, using [the definitions here](http://math2.org/math/geometry/circles.htm).

// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".

const radius = 1;
const circumference = 2 * radius * Math.PI; // diameter * pi
console.log(`The circumference is ${ circumference }`);
const area = Math.PI * radius * radius; // pi * r^2
console.log(`The area is ${ area }`);

// ## The Temperature Converter

// It's hot out! Let's make a converter based on [the steps here](http://www.mathsisfun.com/temperature-conversion.html).

// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

const currentTemperature = 20; // celcius
const fahrenheit = currentTemperature * 1.8 + 32;
console.log(`${ currentTemperature }°C is ${ fahrenheit }°F`);

const celcius = (fahrenheit - 32) / 1.8;
console.log(`${ fahrenheit }°F is ${ celcius }°C.`);

// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function (x) {
    const answer = x * 2;
    console.log(`The result of squaring the number ${ x } is ${ answer }.`);
};

const halfNumber = function (x) {
    const result = x / 2;
    console.log(`The half ${ x } is ${ result }.`);
};

const percentOf = function (x, y) {
    const result = (x / y) * 100;
    console.log(`${ x } is ${ result }% of ${ y }.`);
};

const areaOfCircle = function (radius) {
    const area = Math.PI * radius * radius;
    const a = area.tofixed(2);
    console.log(`The area for a circle with radius ${ radius } is ${ a }.`);
};

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const chosenNumber = function (x, y) {
    const halfNumber = x / 2;
    const squareNumber = x * 2;
    const areaOfCircle = Math.PI * y * y;
    const percentOf = (areaOfCircle / squareNumber) * 100;
}

// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const drEvil = function (amount) {
    mulla = amount + 'dollars';
    return;
}

// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

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