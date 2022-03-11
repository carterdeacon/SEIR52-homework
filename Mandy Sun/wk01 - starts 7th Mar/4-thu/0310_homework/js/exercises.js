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
    length: 4,
    width: 4
};

const isSquare = function (rectangle) {
    const length = rectangle.length;
    const width = rectangle.width;
    if (length !== width) {
        console.log("The rectangle is not a square.")
    } else {
        console.log("The rectangle is a sqaure.")
    }
};
const areaOfrectangle = function (rectangle) {
    const length = rectangle.length;
    const width = rectangle.width;
    console.log(`The area of the rectangle is ${length * width}.`)
};
const perimeter = function (rectangle) {
    const length = rectangle.length;
    const width = rectangle.width;
    console.log(`The perimeter of the rectangle is ${(length + width) * 2}.`);
}

const rectangleInfo = function (rectangle) {
    isSquare(rectangle);
    areaOfrectangle(rectangle);
    perimeter(rectangle);
}

rectangleInfo(rectangleA);

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
// };

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const isEquilateral = function (triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    if (a === b && b === c) {
        console.log("The triangle is equilateral.");
    } else {
        console.log("The triangle is not equilateral.");
    }
}

const isIsosceles = function (triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    if (a === b || b === c) {
        console.log("The triangle is isosceles.");
    } else {
        console.log("The triangle is not isosceles.");
    }
}

const areaOfTriangel = function (triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    const s = (a + b + c) / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(`The area of triangle is ${area}.`)
}

const isObtuse = function (triangle) {
    const a = triangle.sideA;
    const b = triangle.sideB;
    const c = triangle.sideC;
    const largestSide = Math.max(a, b, c);
    let Obtuse = largestSide * largestSide - (a * a + b * b + c * c - largestSide * largestSide);
    if (Obtuse > 0) {
        console.log(Obtuse);
        console.log("The triangle is obtuse.")
    } else {
        console.log("The triangle is not obtuse.")
    }
}

const triangleInfo = function (triangle) {
    isEquilateral(triangle);
    isIsosceles(triangle);
    areaOfTriangel(triangle);
    isObtuse(triangle);
}

triangleInfo(triangleA);

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

const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function (cart) {
    const sum = parseFloat(cart.banana, 2) + parseFloat(cart.handkerchief, 2) + parseFloat(cart.Tshirt) + parseFloat(cart.apple) + parseFloat(cart.nalgene) + parseFloat(cart.proteinShake);
    console.log(`Total price in your cart is $${sum}`);
}

cashRegister(cartForParty);

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

const validateCreditCard = function (card) {
    let onlyNumberString = "";
    let isNum = 0;
    for (let i = 0; i < card.length; i++) {
        if (card[i] !== "-") {
            onlyNumberString = onlyNumberString + card[i];
            numberArray = onlyNumberString.split("");
        }
    }
    console.log(numberArray);
    console.log(numberArray.length);
    if (numberArray.length === 16) {
        for (let l = 0; l < 15; l++) {
            isNum = isNum + parseInt(numberArray[l]);

        }
        if (!isNaN(isNum)) {
            if (numberArray[15] % 2 === 0) {
                let sum = 0
                for (let n = 0; n < 16; n++) {
                    sum = sum + parseInt(numberArray[n])
                }
                if (sum >= 16) {
                    for (let m = 0; m < 16; m++) {
                        if (numberArray[m] === numberArray[0]) {
                            isValid = "false";
                            errorReason = "only_one_type_of_number";
                        } else {
                            isValid = "true";
                            errorReason = "None";
                        }
                    }
                } else {
                    isValid = "false";
                    errorReason = "sum_of_number_less_than_16";
                }
            } else {
                isValid = "false";
                errorReason = "final_number_not_even";
            }
        } else {
            isValid = "false";
            errorReason = "invalid_characters";
        }

    } else {
        isValid = "false";
        errorReason = "wrong_length"
    }
    console.log(`valid: ${isValid}, number: ${card}, error: ${errorReason}`);
}


validateCreditCard("2a22-2222-2222");
validateCreditCard("2a22-2222-2222-4444");
validateCreditCard("2322-2222-2222-4447");
validateCreditCard("1000-2000-1222-0002");
validateCreditCard("2222-2222-2222-2222");


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


let bank = [
    { ownerName: "Mandy", currentBalance: 15000 },
    { ownerName: "Vinnie", currentBalance: 5000 },
    { ownerName: "Alice", currentBalance: 23000 }]

const addAccount = function (account) {
    bank.push(account);
    console.log("Thanks! Your account has been added!");
    console.log(bank);
}

const newAccount = { ownerName: "Anna", currentBalance: 50000 };

addAccount(newAccount);

const withdraw = function (name, money) {
    for (i = 0; i < bank.length; i++) {
        if (bank[i].ownerName == name) {
            bank[i].currentBalance = bank[i].currentBalance - money;
            console.log(`You withdraw $${money}, and you have $${bank[i].currentBalance} left in your account!`)
        }
    }
}

withdraw("Mandy", 200);

const deposit = function (name, money) {
    for (i = 0; i < bank.length; i++) {
        if (bank[i].ownerName == name) {
            bank[i].currentBalance = bank[i].currentBalance + money;
            console.log(`You deposit $${money}, and you have $${bank[i].currentBalance} left in your account!`)
        }
    }
}
withdraw("Anna", 3200);