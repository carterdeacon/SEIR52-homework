// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangle = {
    length: 6,
    width: 4,
};

// isSquare - Returns whether the rectangle is a square or not

const isSquare = function (rect) {
    if(rect.length === rect.width) {
        return true;
    } else {
        return false;
    }
};
const resultIsSquare = isSquare(rectangle);
console.log(`Is this a square? ${resultIsSquare}`);

// area - Returns the area of the rectangle

const areaRect = function (rect) {
    if (!isSquare(rectangle)) {
        const calcArea = rect.length * rect.width;
        return `The area of this rectangle is: ${calcArea}`
    }
    return `This isn\'t a rectangle`
}
const resultArea = areaRect(rectangle);
console.log(resultArea);

// perimeter - Returns the perimeter of the rectangle

const perimeter = function (rect) {
    if (!isSquare(rectangle)) {
        const calcPerimeter = 2 * (rect.length + rect.width);
        return `The area of this rectangle is: ${calcPerimeter}`;
    }
    return `This isn\'t a rectangle`
}
const resultPerimeter = perimeter(rectangle);
console.log(resultPerimeter);

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triangle = {
  sideA: 8,
  sideB: 18,
  sideC: 15,
};

// isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function (triang) {
    if (triang.sideA === triang.sideB) {
        if (triang.sideA === triang.sideC) {
            return true;
        }
    } return false;
}
const resultIsEquilateral = isEquilateral(triangle);
console.log(`Is this a triangle equilateral? ${resultIsEquilateral}`);

// isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function (triang) {
    if (triang.sideA === triang.sideB || triang.sideA === triang.sideC || triang.sideB === triang.sideC) {
        return true;
    } else {
        return false;
    }
}
const resultIsIsosceles = isIsosceles(triangle);
console.log(`Is this a triangle equilateral? ${resultIsIsosceles}`);

// area - Returns the area of the Triangle

const areaTriang = function (triang) {
    if (isEquilateral(triang)) {
        const calcAreaEquilat = (Math.sqrt(3)/4) * (triang.sideA * triang.sideB);
        return `Area triangle Equilateral ${calcAreaEquilat}`;
    }
    if (isIsosceles(triang)) {
        const array = Object.values(triang); 
        let a;
        let indexA;
        for (let i = 0; i < array.length; i++) {
            let base = 0;
            for (let j = 0; j < array.length; j++) {
                if (array[i] === array[j]) {
                    base += 1;
                }
            }
            if (base === 1) {
                a = array[i];
                indexA = i;
            }
        }
        let b;
        if (indexA === 0) {
            b = array[1];
        } else {
            b = array[0];
        }
        const h = Math.sqrt((b * b) - (1 / 4) * (a * a));
        const calcAreaIsosceles = (0.5 * a) * h;
        return `Area triangle Isosceles ${calcAreaIsosceles}`;
    }
    return `This is not a triangle Isosceles or a triangle Equilateral`;
};
const resultaAreaTriang = areaTriang(triangle);
console.log(resultaAreaTriang);

// isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function (triang) {
    const ang1 = Math.atan2(triang.sideA, triang.sideB);
    const ang2 = Math.atan2(triang.sideA, triang.sideC);
    const ang3 = Math.atan2(triang.sideB, triang.sideC);
    if (ang1 || ang2 || ang3 > 90) {
        return true;
    }
    return false;
}
const resultIsObtuse = isObtuse(triangle);
console.log(`Is this a triangle obtuse? ${resultIsObtuse}`);

// js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output
// cashRegister(cartForParty)); // 60.55

const cashRegister = function (cart) {
    let totalCart = 0;
    const array = Object.values(cart);
    for (let i = 0; i < array.length; i++) {
        totalCart += parseFloat(array[i]);
    }
    return totalCart;
}
const resultCashRegister = cashRegister(cartForParty);
console.log(`The total price of the shopping cart is: $${resultCashRegister}`);

// js-homework-6.md
// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const validateCreditCard = function (number) {
    const numberCard = number.replaceAll('-','');
    if (numberCard.length < 16) {
        return false;
    }
    if (isNaN(numberCard) === true) {
        return false;
    }
    let difDigits = numberCard[0];
    let isValid = false
    for (let i = 1; i < numberCard.length; i++) {
        if (numberCard[i] !== difDigits) {
            isValid = true
            break
        }
    }
    if (!isValid) {
        return false;
    }
    if ((numberCard[numberCard.length - 1]) % 2 !== 0) {
        return false;
    }
    let sumAllNumbers = 0;
    for (let i = 0; i < numberCard.length; i++) {
        sumAllNumbers += parseFloat(numberCard[i]);
    }
    if (sumAllNumbers < 17) {
        return false;
    }
    return true;
}
const resultValidateCreditCard = validateCreditCard('6666-6666-6666-1666');
console.log(`Is this a valid card number? ${resultValidateCreditCard}`);

// js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.