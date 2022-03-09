// # Exercises: Variables

// ## The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// - Store the following into variables: number of children, partner's name, geographic location, job title.
// - Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const numKids = 5;
const partnerName = 'George';
const geoLocation = 'Vanuatu';
const jobTitle = 'embalmer';

// Traditional JS:
//build a string

// const fortune = 'you will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numKids + ' kids.';
// console.log(fortune);

// Interpolation:
const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numKids } kids.`
console.log(fortune);
 // spaces in curly braces are not important

// ## The Age Calculator

// Forgot how old someone is? Calculate it!

// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Calculate their 2 possible ages based on the stored values.
// - Output them to the screen like so: "They are either NN or NN", substituting the values.

const currentYear = 2022;
const birthYear = 1996;

const ageAfterBirthday = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;

console.log(`They are either ${ ageBeforeBirthday } or ${ ageAfterBirthday }`);
//we could write in cosnt fortune first and then do console.log


// ## The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// - Store your current age into a variable.
// - Store a maximum age into a variable.
// - Store an estimated amount per day (as a number).
// - Calculate how many you would eat total for the rest of your life.
// - Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge = 33;
const deathAge = 99;
const amountPerDay = 11; // cigars

const amountPerYear = amountPerDay * 365.25; // leap year
const yearRemaining = deathAge - currentAge;

const amountRequired = amountPerYear * yearRemaining;
console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ deathAge }`);


// ## The Geometrizer

// Calculate properties of a circle, using [the definitions here](http://math2.org/math/geometry/circles.htm).

// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".

const radius = 1; // it should be 3.14
const circumference = 2 * radius * Math.PI; // diameter * PI
console.log(`The circumference is ${ circumference }`);
const area = Math.PI * radius * radius; // a^2 = 2 * 2
console.log(`The area is ${ area }`);





// ## The Temperature Converter

// It's hot out! Let's make a converter based on [the steps here](http://www.mathsisfun.com/temperature-conversion.html).

// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

const currentTempurture = 20; // cilsius
const fahrenheit = currentTempurture * 1.8 + 32;
console.log(`${ currentTempurture }°F is ${ fahrenheit }°C`);

const celsius = (fahrenheit - 32) / 1.8;
console.log(`${ fahrenheit }°F is ${ celsius }°C`);

// encoding: US english 
// encoding: unicode 



// ## The Puppy Age Calculator

// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// - takes 1 argument: your puppy's age.
// - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// - Call the function three times with different sets of values.
// - Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = function (puppyAge) {
    const doggyAge = puppyAge * 7;
    console.log(`Your doggie is ${ doggyAge } years old in dog years!`);
};

calculateDogAge(1); //your dog is 7 years old in dog year
calculateDogAge(2.4); // 14


// ## The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - Call that function 4 times with 4 different values for the arguments.


const tellFortune = function (numKids, partnerName, geoLocation, jobTitle) {
    const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numKids } kids.`;
    console.log(fortune);
};

tellFortune(5, 'George', 'Vanuatu', 'embalmer');
tellFortune(0, 'Wendy', 'Palestine', 'window washer');



// ## The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// - Call that function three times, passing in different values each time.
// - Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function (currentAge, amountPerDay) {
    const deathAge = 99;
    const amountPerYear = amountPerDay * 365.25;
    const yearRemaining = deathAge - currentAge;

    const amountRequired = yearRemaining * amountPerYear;
    console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ deathAge }`);
};
 calculateSupply(33, 11); // cigars
 calculateSupply(17, 4); // cheesecakes


// ## The Geometrizer

// Create 2 functions that calculate properties of a circle.

// Create a function called calcCircumfrence:

// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:

// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".


const calculateCircumferences = function (radius) {
    const circumference = 2* radius * Math.PI;
    console.log(`The circumference is ${ circumference }`);
};

calculateCircumferences(1);
calculateCircumferences(15);
calculateCircumferences(22);

const calcArea = function (radius) {
    const area = Math.PI * radius * radius; // pi * r^2
    console.log(`The area is ${ area }`);
};

calcArea(1);
calcArea(25);
calcArea(155);


// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (num1) {
    const squNum = num1 * num1;
    console.log(`The square number is ${ squNum }`);
};

squareNumber(3);
squareNumber(5);


// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (num2) {
    const halfDiv = num2 / 2;
    console.log(`half of ${ num2 } is ${ halfDiv }`);
};

halfNumber(5);
halfNumber(10);

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num3, num4) {
    const percOf = (num3 / num4) * 100;
    console.log(`The precentage of ${ num3 } is ${ percOf } of ${ num4 }`);
};
percentOf(2, 4);
percentOf(100, 157.5);


// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
    const meArea = ((radius * radius) * Math.PI).toFixed(2);
    console.log(`The area for a circle with radius ${ radius } is ${ meArea }`);
};

areaOfCircle(2);
areaOfCircle(55);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
const takeOneArguemnt = function (num) {
    const halfOfNum = num / 2; // - Take half of the number and store the result.
    console.log(halfOfNum);

    const squTheResualt = squNum * squNum; // - Square the result of #1 and store that result.
    console.log(squTheResualt);

    const calcAreaCircle = (halfDiv * halfDiv) * Math.PI; // - Calculate the area of a circle with the result of #2 as the radius.
    console.log(calcAreaCircle);

    const precArea = (calcAreaCircle / percOf) * 100; // - Calculate what percentage that area is of the squared result (#3).
    console.log(precArea);

};

takeOneArguemnt(5);







