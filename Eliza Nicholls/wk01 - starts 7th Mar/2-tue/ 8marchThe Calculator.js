// The Calculator

// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (aNumber) {
    const squareD = aNumber * aNumber ;
    return result = `The result of squaring the number ${aNumber} is ${squareD}.`;
    console.log(`The result of squaring the number ${aNumber} is ${squareD}.`);
} ;
squareNumber();

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (aNumber) {
    const divD = aNumber / 2 ;
    return result = `Half of ${ aNumber} is ${ divD}.`;
    console.log(`Half of ${aNumber} is ${ divD}`);
};
halfNumber();

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function (x, y) {
    const percent = x / y * 100; 
    return result = `${ x } is ${ percent }% of ${ y }.`;
    console.log(`${ x } is ${ percent }% of ${ y }.`);
};
percentOf();

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius){
    const area = Math.PI * radius * radius;
    return result = `The area for a circle with radius ${radius} is ${area}.`;
    console.log(`The area for a circle with radius ${radius} is ${area}.`);
};
areaOfCircle();

const calculateIt = function (theNumber){
    let result = theNumber / 2 ;
    return result;
    let squareD = halfOf * halfOf ;
    let area = Math.PI * squareD * squareD;
    let percent= area / squareD * 100;
    console.log(`We started at ${theNumber} now it's ${percent}%`); 

};
calculateIt();
let theNumber = halfNumber * halfNumber;
return result;
let result = areaOfCircle(result);
return result;
let 
// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

//DR EVIL
const drEvil = function(amount){
    //if amount is exactly = to 1 million return amount 'dollars' + (pinky);
    if (amount === 1000000) {console.log(`${amount} dollars (PINKY)`);} else { console.log(`${amount} dollars`);}
    
};
drEvil(1000000);

//MixUp
const mixUp = function (big, apple){
    const result = apple, big;
    console.log(result);
}
mixUp();