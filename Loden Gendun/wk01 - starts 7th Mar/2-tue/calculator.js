console.log("Script Functional");

// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(x) {
    output = x * x;
    console.log(`The result of squaring the number ${ x } is ${ output }.`)
    return output;
};

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(x) {
    const output = x / 2;
    console.log(`Half of ${ x } is ${ output }`);
    return output;
};

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(x, y) {
    output = x / y * 100;
    console.log(`${ x } is ${ output }% of ${ y }.`);
};

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function(radius) {
    const area = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${ radius } is ${ area }.`);
    return area;
};

// - Bonus: Round the result so there are only two digits after the decimal.
const roundNumber = function(num) {
    // move the decimal three places then then subtract everything beyond that third decimal place
    let tmp = num * 1000;
    tmp -= tmp % 1;
    // if third decimal place digit is 5 or more, then round it up
    if (tmp % 5 < 5) {
        tmp += 5 - tmp % 5;
    }
    // subtract the third decimal place digit
    tmp /= 10;
    tmp -= tmp % 1;
    // move decimal back to original position and return result
    const result = tmp / 100;
    return result;
}
// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).
const process = function(num) {
    const half = halfNumber(num);
    const squared = squareNumber(half);
    const area = areaOfCircle(squared);
    const percentage = percentOf(area, squareNumber(area));
}