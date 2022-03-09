// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(num) {
    let result = num * 2;
    return result
    // console.log(`the result of squaring the number is ${result}`);
};
// squareNumber(7);

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(num) {
    let result = num / 2;
    return result
    // console.log(`the result of squaring the number is ${result}`);
};
// halfNumber(8);

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(num1, num2) {
    let result = (num1 / num2) * 100;
    return result
    // console.log(`${num1} is ${result}% of ${num2}`);
};
// percentOf(8, 16);

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius) {
    const diameter = radius * 2;
    const circumference = Math.PI * diameter;
    const area = Math.PI * Math.pow(radius, 2);
    return Math.floor(area)
    // console.log(`The area is ${Math.floor(area)}`);
}
// areaOfCircle(10)


// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).
const Calculator = function(num) {
    const halfOf = halfNumber(num);
    const sqrd = squareNumber(halfOf);
    const area = areaOfCircle(sqrd);
    const percent = percentOf(area, sqrd);
    console.log(halfOf)
    console.log(sqrd)
    console.log(area)
    console.log(percent)

}
Calculator(12)