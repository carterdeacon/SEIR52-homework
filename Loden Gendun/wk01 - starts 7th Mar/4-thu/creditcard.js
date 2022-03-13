console.log("creditcard script functional");

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
const validateCreditCard = function(cardNumber) {
    let cardString = cardNumber.split('-').join('');

    console.log(cardString);
    // Here are the rules for a valid number:
    // - Number must be 16 digits, all of them must be numbers
    if (!Number.isInteger(parseInt(cardString))) {
        console.log("not an integer");
        return false;
    }
    const digitCount = cardString.length;
    if (digitCount != 16) {
        console.log("not 16 digits long");
        return false;
    }

    let twoDifferent = false;
    // - You must have at least two different digits represented (all of the digits cannot be the same)
    for (let i = 1; i < digitCount; i++) {
        if (parseInt(cardString[i]) != parseInt(cardString[0])) {
            twoDifferent = true;
        }
    }
    if (!twoDifferent) {
        console.log("only one digit type");
        return false;
    }

    // - The final digit must be even  
    let lastDigit = cardString[cardString.length - 1];
    lastDigit = parseInt(lastDigit);
    if (lastDigit % 2 != 0) {
        console.log("last digit not even");
        return false;
    }
    // - The sum of all the digits must be greater than 16
    let sum = 0;
    for (let i = 0; i < digitCount; i++) {
        sum += parseInt(cardString[i]);
    }
    if (sum <= 16) {
        console.log("sum of digits not greater than 16")
        return false;
    };
    return true;
};
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