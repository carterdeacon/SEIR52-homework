// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).


// Square a number

console.log('PART 1');
const squareNumber = function (num) {
    const sqNum = num*num;
    console.log(`The result of squaring the number ${num} is ${sqNum}`);
};

squareNumber(3);
squareNumber(5);

// Half a number

const halfNumber = function (num) {
    const halfNum = num / 2;
    console.log(`Half of ${num} is ${halfNum}.`);
}

halfNumber(360);
halfNumber(4);


// Takes the percentage of the first number of the second

const percentOf = function (num1, num2) {
    const x = (num1 / num2) * 100;
    console.log(`${num1} is ${x}% of ${num2}`); 
}

percentOf(5,10);
percentOf(65,540);

// Area of a circle

const areaOfCircle = function (r) {
    const area = Math.PI*r*r;
    console.log(`The area for a circle with radius ${2} is ${area}`);
}

areaOfCircle(2);
areaOfCircle(15);

// Bonus round with 2 decimal places

const areaOfCircleB = function (r) {
    const area = Math.PI*r*r;
    let a = area.toFixed(2);
    console.log(`The area for a circle with radius ${2} is ${a}`);
}

areaOfCircleB(2);
areaOfCircleB(15);

console.log('PART 2');

// 1.Take half of the number and store the result.
const halfNum = function (num) {
    const hfNum = num / 2;
    return hfNum;
}

const num1 = halfNum(4);
console.log(num1);

// 2.Square the result of #1 and store that result.
const squareNum = function (num) {
    const sqNum = num*num;
    return sqNum;
};

const num2 = squareNum(num1);
console.log(num2);

//3.Calculate the area of a circle with the result of #2 as the radius

const areaOfCirc = function (r) {
    const area = Math.PI*r*r;
    return area;
}

// 4. Calculate what percentage that area is of the squared result (#3)

const num3 = areaOfCirc(num2);
console.log(num3);

const p = function (num1, num2) {
    const x = (num1 / num2) * 100;
    return x; 
}

const num4 = p(num2,num3);
console.log(`${num4}%`);
