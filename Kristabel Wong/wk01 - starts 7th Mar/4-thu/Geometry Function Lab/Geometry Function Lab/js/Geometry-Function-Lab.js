// Geometry Function Lab

// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };


const rectangleA = {
    len: 4,
    width: 4,
};

const rectangleB = {
    len: 5,
    width: 10,
};

const isSquare = function (shape) {
    if (shape.len === shape.width) {
        console.log(`The shape is a square`);
        return true;
    } else {
        console.log(`The shape is not a square`);
        return false;
    }
};

const area = function (shape) {
    console.log(shape.len * shape.width);
};

const perimeter = function (shape) {
    let perim = (shape.len + shape.width)*2
    console.log(perim);
};

const shapeInfo = function (shape) {
    let sq = isSquare(shape); 
    let ar = area(shape);
    let perim = perimeter(shape);

};

shapeInfo(rectangleA);
shapeInfo(rectangleB);
console.log(' ');  // --> just so its clearer in console.log

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4

const triangleA = {  // --> make sure you put in sort
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const triangleB = {
    sideA: 5,
    sideB: 8,
    sideC: 4,
}

const triangleC = {
    sideA: 10,
    sideB: 25,
    sideC: 30,
}

const triangleD = {
    sideA: 30,
    sideB: 25,
    sideC: 10,
}


const isEquilateral = function (shape) {
    if (shape.sideA === shape.sideB === shape.sideC) {
        console.log('This triangle is an equilateral triangle');
        return true;
    } else {
        console.log('This triangle is not an equilateral triangle');
        return false;
    }
};

const isIsosceles = function (shape) {
    if (shape.sideA === shape.sideB || shape.sideA === shape.sideC || shape.sideB === shape.sideC) {
        console.log('This triangle is an isosceles triangle');
        return true;
    } else {
        console.log('This triangle is not an isosceles triangle');
        return false;
    }
};

const areaTriangle = function(shape) {
    let s = (shape.sideA + shape.sideB + shape.sideC)/2;
    let area = Math.sqrt(s * ( (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC) ));
    console.log(`The area of this triangle is ${area}`);
}

const isObtuse = function (shape) {
    let x = Object.values(shape);
    let sort = x.sort();
    let a = x[0];
    let b = x[1];
    let c = x[2];

    if ((c**2) > (b**2 + a**2)) {
        console.log("This triangle is an obtuse triangle!");
    } else {
        console.log("This triangle is not an obtuse triangle");
    }
};



const triInfo = function (shape) {
    let eq = isEquilateral(shape);
    let is = isIsosceles(shape);
    let ar = areaTriangle(shape);
    let ob = isObtuse(shape);

};

triInfo(triangleA);
console.log(' '); // --> just so its clearer in console.log
triInfo(triangleB);
console.log(' ');  // --> just so its clearer in console.log
triInfo(triangleC);
console.log(' ');  // --> just so its clearer in console.log
triInfo(triangleD);
console.log(' ');  // --> just so its clearer in console.log

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55

const cartForGuac = {
    avocado: "2.00",
    lime: "1.50",
    onion: "0.50",
    salt: "0.10",
    pepper: "0.15",
};

const cartForDinner = {
    gnocchi: "5.00",
    Sauce: "3.00",
    parmesan: "3.00",
    spinach: "1.00",
    chorizo: "9.50"

};

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function (cart) {
    let num = Object.values(cart);
    let bill = 0;

    for (let i = 0; i < num.length; i++) {
        bill += Number(num[i]);
    }
    console.log(bill);
};


cashRegister(cartForGuac);
cashRegister(cartForDinner);
cashRegister(cartForParty);
console.log(' ');  // --> just so its clearer in console.log

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

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

let creditA = '9999-9999-8888-0000';
let creditB = '6666-6666-6666-1666';
let creditC = 'a923-3211-9c01-1112'; // invalid characters
let creditD = '4444-4444-4444-4444'; // only one type
let creditE = '1111-1111-1111-1110'; // sum less than 16
let creditF = '6666-6666-6666-6661'; // odd final number
let creditK = '2325-3563-2222-7898';

// remove dash or invalid characters

const validateCreditCard = function (num) {
    let newArray="";
    let sumArray= 0;
    let sameNum="";
    let finalNum= Number(num.charAt(num.length-1));

    for (i = 0; i < num.length; i++) {
        if (num.charAt(i) >= 0 ) {
            newArray += num.charAt(i);
            sumArray += Number(num.charAt(i));
        } 
        
    }
    for (i = 0; i < num.length; i++) {
        if (num.charAt(0) === num.charAt(i)) {
            sameNum += num.charAt(i);
        }
    }
    
    if (newArray.length === 16 && sumArray > 16 && sameNum !== newArray && finalNum % 2 === 0) {
        console.log(`valid: true, number "${num}"`);
        return true;
    } else {
        console.log(`valid: false, number "${num}" `);
        return false;
    }
    
};

validateCreditCard(creditA); 
validateCreditCard(creditB);
validateCreditCard(creditC);
validateCreditCard(creditD);
validateCreditCard(creditE);
validateCreditCard(creditF);
validateCreditCard(creditK);

console.log(' ');  // --> just so its clearer in console.log

// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 

// #### Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance. 

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working. 

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance. 

// ### Tips

// Don't overthink this. Shorter code is probably the answer. 

// ## Bonus

// - Ensure that the accounts cannot have negative values. 
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 

// ## Additional

// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them. 

const bank = [
    {Owner: 'John Smith', currentBalance: 1000},
    {Owner: 'Jane Smith', currentBalance: 2000},
    {Owner: 'Jane Doe', currentBalance: 3000},
];

// show balance

const showBalance = function (name) {
    for (i = 0; i < bank.length; i++) {
        if (name === bank[i].Owner) {
            console.log(`The balance for ${name} is ${bank[i].currentBalance}.`);
        }
    }
};

showBalance('Jane Doe');

// add account
const addAccount = function (owner, balance) {
    let name = {Owner: `${owner}`, currentBalance: `${balance}`};
    bank.push(name);
}

addAccount('Brad Pitt',10000);

// make deposits & withdrawals with new balance --> accounts cannot have negative values

const updateBalance = function (name,num) {
    let newBal=num;

    for (i = 0; i < bank.length; i++) {
        if (name === bank[i].Owner) {
            if (num < 0 && (num + bank[i].currentBalance < 0)) {
                console.log(`You have insufficient funds.`);  // bonus
            } else {
                newBal = bank[i].currentBalance + num;
            }
        }
    }
    console.log(`The bank account for ${name} has been updated to ${newBal}.`);
    return newBal;
};


updateBalance('John Smith',100);
updateBalance('Jane Smith',-500);
updateBalance('Jane Doe',-4000);
