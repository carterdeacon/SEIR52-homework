
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, 
// and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
    const numResult = number * number;
    console.log(`The result of squaring the number ${number} is ${numResult}.`);
    return numResult;
} 
squareNumber (3);
squareNumber (4);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and 
// return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
    const numResult2 = number / 2;
    console.log(`Half of ${number} is ${numResult2}.`);
    return numResult2;
}
halfNumber (3);
halfNumber (5);

// Write a function called percentOf that will take two numbers, figure out what percent the first 
// number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
   const numResult3 = ((num1 / num2) * 100).toFixed(2) + "%";
   console.log(`${num1} is ${numResult3} of ${num2}.`);
   return numResult3;
}
percentOf (1, 2)
percentOf (3, 7)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area 
// based on that, and return the result. It should also log a string like "The area for a circle with 
// radius 2 is 12.566370614359172."
const areaOfCircle = function (radius) {
    const area = (radius * radius * Math.PI).toFixed(2);
    console.log(`the area for a circle with radius ${radius} is ${area}.`);
    return area
}
areaOfCircle (2);

// Bonus: Round the result so there are only two digits after the decimal.



// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const gotIt = function (num1) {
    const a = halfNumber(num1);
    const b = squareNumber(a);
    const c = areaOfCircle(b);
    const d = percentOf(c,b);
    console.log(d);
}
gotIt (2)