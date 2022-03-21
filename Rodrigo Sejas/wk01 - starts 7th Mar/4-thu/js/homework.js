// # Geometry Function Lab

// ### Part 1, Rectangle

// Examples
const rectangleA = {
  length: 5,
  width: 5,
};

console.log(isSquare(rectangleA)); // Result = true

const rectangleB = {
  length: 6,
  width: 5,
};

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not

function isSquare(obj) {
  if (obj.length === obj.width) {
    return true;
  } else {
    return false;
  }
}

console.log(isSquare(rectangleB)); // Result = false

// * area - Returns the area of the rectangle

function area(obj) {
  let result = obj.length * obj.width;
  return result;
}

// * perimeter - Returns the perimeter of the rectangle

function perimeter(obj) {
  let result = 2 * (obj.length + obj.width);
  return result;
}

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not

function isEquilateral(obj) {
  if (obj.sideA === obj.sideB && obj.sideA === obj.sideC) {
    return true;
  }
}

// * isIsosceles - Returns whether the triangle is isosceles or not

function isIsosceles(obj) {
  if (
    obj.sideA === obj.sideB ||
    obj.sideA === obj.sideC ||
    obj.sideC === obj.sideB
  ) {
    return true;
  }
}

// * area - Returns the area of the Triangle
function areaOfTriangle(obj) {
  let a = obj.sideA;
  let b = obj.sideB;
  let c = obj.sideC;
  let s = (a + b + c) / 2;

  let result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return result.toFixed(2);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// * isObtuse - Returns whether the triangle is obtuse or not
// solve for all angles inside the triangle
// compare if any of the results is greater than 90 degrees

const triangleA = {
  sideA: 5,
  sideB: 6,
  sideC: 7,
};

let radians = Math.acos(19 / 35);
let angle = (radians * 180) / Math.PI;
console.log(angle);

function getAngles(triangle) {
  return [57, 40, 98];
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The function should return the total price of the shopping cart.

function cashRegister(obj) {
  // extract all prices using Object.values to an array
  let pricesStr = Object.values(obj);
  console.log(pricesStr);
  // convert strings to numbers using .map
  let pricesArr = pricesStr.map((i) => Number(i)); // Number wrap to manipulate str into numbers
  console.log(pricesArr);
  // reduce array with sum
  let sum = pricesArr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
  return sum;
}

// The object contains item names and prices (itemName: itemPrice).

// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

// // Output
cashRegister(cartForParty); // 60.55

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
////// convert to str (removing the dash -)
////// check str length =

function validateCreditCard(num) {
  let newStr = num.split("-"); // use split method to divide into substrings in an array, using "-" as the seperator
  newStr = newStr.join(""); // join the array into the var newStr
  if (newStr.length !== 16) {
    return false;
  }
  // all digits must be numbers
  let newNum = Number(newStr);
  if (Number.isNaN(newNum)) {
    return false;
  }
  // - You must have at least two different digits represented (all of the digits cannot be the same)

  let valid = false;
  for (let i = 0; i < newStr.length - 1; i++) {
    if (newStr[i] !== newStr[i + 1]) {
      valid = true;
      break;
    }
  }

  if (valid === false) {
    return false;
  }
  // - The final digit must be even

  let lastDigit = newStr[newStr.length - 1];
  lastDigit = Number(lastDigit);
  if (lastDigit % 2 !== 0) {
    return false;
  }
  let newArr = Array.from(newStr);
  newArr = newArr.map(function (element) {
    return Number(element);
  });

  // - The sum of all the digits must be greater than 16 it is valid

  let sum = newArr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);

  if (sum <= 16) {
    return false;
  }

  return true;
}

// The following credit card numbers are valid:

// - `9999-9999-8888-0000` // result true
// - `6666-6666-6666-1666` // result true

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters // false
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example

validateCreditCard("9999-9999-8888-0000"); // Returns: true

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is

// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or
// fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration;
