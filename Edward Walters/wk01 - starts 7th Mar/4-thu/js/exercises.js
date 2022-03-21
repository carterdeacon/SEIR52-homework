// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:


const rectangleA = {
  length: 4, 
  width: 4
};

// * isSquare - Returns whether the rectangle is a square or not

const isSquare = function(rectangle){
    return (rectangle.length === rectangle.width);
};

console.log('isSquare output:');
console.log(isSquare(rectangleA));

// * area - Returns the area of the rectangle

const areaRec = function(rectangle){
    return rectangle.length * rectangle.width;
};

console.log('area (rectangle) output:');
console.log(areaRec(rectangleA));

// * perimeter - Returns the perimeter of the rectangle

const perimeter = function(rectangle){
    return ((rectangle.length + rectangle.width) * 2);
};

console.log('perimeter output:');
console.log(perimeter(rectangleA));



// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:


const triangleA = {
  sideA: 10,
  sideB: 12,
  sideC: 20
};

// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function(triangle){
    return (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC)
};

console.log('isEquilateral output:');
console.log(isEquilateral(triangleA));

// * isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function(triangle){
    return  (triangle.sideA === triangle.sideB) || (triangle.sideB === triangle.sideC) || (triangle.sideA === triangle.sideC)
};

console.log('isIsosceles output:');
console.log(isIsosceles(triangleA));


// * area - Returns the area of the Triangle

const areaTri = function(triangle){
    const s = ( (triangle.sideA + triangle.sideB + triangle.sideC) / 2); // half perimeter
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;

    return Math.sqrt((s * (s - a) * (s - b) * (s - c))).toFixed(3);
};

console.log('area (triangle) output:');
console.log(areaTri(triangleA));

// * isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function(triangle){
    const numArray = [triangle.sideA, triangle.sideB, triangle.sideC]
    
    numArray.sort(function(a, b) {
        return a - b;
      });
   
    const a = numArray[0];
    const b = numArray[1];
    const c = numArray[2];

    return ( a * a ) + ( b * b )  < c * c;
};

console.log('isObtuse output:');
console.log(isObtuse(triangleA));


// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.


const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cartObject) {
    
    const cartObjKeys = Object.keys(cartObject);
    let totalPrice = 0;

    for (let i = 0; i < cartObjKeys.length; i++){
        const key = cartObjKeys[i];
        totalPrice += Number(cartObject[key]);
    }
    return totalPrice;
};

console.log('Cash Register output:');
console.log(cashRegister(cartForParty)); // 60.55

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```



const validateCreditCard = function(cardNumInput){
  
    cardNum = cardNumInput.split('-').join('');  // remove '-'s
    
    //test for invalid characters
    let isNumeric = true; 
    for (let i = 0; i < cardNum.length; i++) {
        if (isNaN(cardNum[i])) {
            isNumeric = false;
        }
    }
    // test for at least two digits used
    let isTwoDigitsUsed = false;
    let digitsUsed = [];
    for (let i = 0; i < cardNum.length; i++) {
        const num = cardNum[i];
        if (!digitsUsed.includes(num)) {
            digitsUsed.push(num)
        }    
    }
    
    if (digitsUsed.length >= 2) {
        isTwoDigitsUsed = true;
    };
    
     // test for sum 16 or greater
    let sumValid = false;
    let total = 0;
    for (let i = 0; i < cardNum.length; i++) {
        const num = parseInt(cardNum[i]);
        total += num;
    }

   if (total >= 16) {
        sumValid = true;
    };
  
    // test for last digit Even
    const lastDigitEven = cardNum[cardNum.length -1] % 2 === 0;


let errors = [];

if (!isNumeric) {
    errors.push('invalid_characters')
} else { 
        if (!isTwoDigitsUsed) {
        errors.push('only_one_type_of_number')
        };

        if (!sumValid) {
        errors.push('sum_less_than_16')
        };

        if (!lastDigitEven) {
        errors.push('odd_final_number')
        };
    }
 
  // *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 
   
   return {
       valid: (isNumeric && isTwoDigitsUsed && sumValid && lastDigitEven),
       number: cardNumInput,
       errors: errors
   };
    
};


// The following credit card numbers are valid:

console.log("Credit Card Validation: valid numbers:")
console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:
console.log("Credit Card Validation: invalid numbers:")
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number





