// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

// - Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function( num1 ) {
    return num1 * num1; 
};
console.log(`The result of squaring the number 3 is ${ squareNumber (3)} `)

const halfNumber = function( num1, num2 = 2 ) {
    return num1 / num2;
}; 

console.log(`Half of 5 is ${ halfNumber (5) } `);


const percentOf = function(num1, num2) {
    return num1 / num2 *100;
    };
console.log(`2 is ${ percentOf (5, 10) }% of 4 `);

const areaOfCircle = function( radius ) {
    return Math.PI * (radius + radius);
};
console.log(`The area for a circle with the radius of 2 is ${ areaOfCircle(2).toFixed(2) }`)

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const number = function(num) {
    let half = num / 2;
    let square = num * num; 
    let area = Math.PI * num + num;
    let per = num / num *100;
    return half, square, area, per
};
console.log(number);
