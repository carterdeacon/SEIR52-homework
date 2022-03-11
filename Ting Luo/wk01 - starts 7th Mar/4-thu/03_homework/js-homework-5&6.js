// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
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
// ```

const cashRegister = function (cartObject) {
    let sumAmount = 0;
    for (var property in cartObject) {
        sumAmount += parseFloat(cartObject[property]);
    }
    console.log(sumAmount);
    return sumAmount;
}

cashRegister(cartForParty);


// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:



const validateCreditCard = function (card_num) {
    let cardNums = card_num.replaceAll('-','');
    let sumOfDigits = 0;
    let existDigits = new Set();
    
    // - Number must be 16 digits, all of them must be numbers
    if (cardNums.length !== 16) {
        return false;
    }

    // when contains numbers only, isNaN(cardNums) is true here.
    if (isNaN(cardNums)){
        return false;
    }

    for (i = 0; i < cardNums.length; i++) {
        sumOfDigits += parseInt(cardNums[i]);
        existDigits.add(cardNums[i]);
    }

    // - You must have at least two different digits represented (all of the digits cannot be the same)
    if (existDigits.size < 2) {
        return false;
    }

    // - The sum of all the digits must be greater than 16
    if (sumOfDigits <= 16) {
        return false;
    }

    // - The final digit must be even
    if (parseInt(cardNums.slice(-1)) %2 !== 0){
        return false;
    }
    return true;         
};
console.log(validateCreditCard(`9999-9999-8888-0000`));
console.log(validateCreditCard(`6666-6666-6666-6661`));
console.log(validateCreditCard(`a923-3211-9c01-1112`));
console.log(validateCreditCard(`4444-4444-4444-4444`));
console.log(validateCreditCard(`1111-1111-1111-1110`));

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
// { valid: true, number: '8923-3211-9001-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
const cardCheckSummary = function (card_num) {
    let cardNums = card_num.replaceAll('-','');
    let sumOfDigits = 0;
    let existDigits = new Set();
    
    // - Number must be 16 digits, all of them must be numbers
    if (cardNums.length !== 16) {
        return {valid: false, number: card_num, error: 'wrong_length'};
    }

    // when contains numbers only, isNaN(cardNums) is true here.
    if (isNaN(cardNums)){
        return {valid: false, number: card_num, error: 'non_digit_found'};
    }

    for (i = 0; i < cardNums.length; i++) {
        sumOfDigits += parseInt(cardNums[i]);
        existDigits.add(cardNums[i]);
    }

    // - You must have at least two different digits represented (all of the digits cannot be the same)
    if (existDigits.size < 2) {
        return {valid: false, number: card_num, error: 'two_or_less_same_digits_found'};
    }

    // - The sum of all the digits must be greater than 16
    if (sumOfDigits <= 16) {
        return false;
    }

    // - The final digit must be even
    if (parseInt(cardNums.slice(-1)) %2 !== 0){
        return {valid: false, number: card_num, error: 'last_digit_odd'};
    }
    return {valid: true, number: card_num};         
};
console.log(cardCheckSummary('8923-3211-9001-1112'));
console.log(cardCheckSummary('a923-3211-9c01-1112'));

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const checkLuhnAlgorithm = function (card) {
    let sumDigits = 0;
    for (i = 0; i < card.length; i++) {
        const cardDigit = parseInt(card[i]);
        if (i % 2 === 0) {
            sumDigits += cardDigit;
        }else {
            for (var digit in (cardDigit * 2).toString()) {
                sumDigits += parseInt(digit);
            }
        }
    }
    let output = (10 - (sumDigits % 10)) % 10;
    return output === parseInt(cardNums.slice(-1));
}

const cardCheckWithLuhn = function (card_num) {
    let cardNums = card_num.replaceAll('-','');
    let sumOfDigits = 0;
    let existDigits = new Set();
    
    // - Number must be 16 digits, all of them must be numbers
    if (cardNums.length !== 16) {
        return {valid: false, number: card_num, error: 'wrong_length'};
    }

    // when contains numbers only, isNaN(cardNums) is true here.
    if (isNaN(cardNums)){
        return {valid: false, number: card_num, error: 'non_digit_found'};
    }

    for (i = 0; i < cardNums.length; i++) {
        sumOfDigits += parseInt(cardNums[i]);
        existDigits.add(cardNums[i]);
    }

    // - You must have at least two different digits represented (all of the digits cannot be the same)
    if (existDigits.size < 2) {
        return {valid: false, number: card_num, error: 'two_or_less_same_digits_found'};
    }

    // - The sum of all the digits must be greater than 16
    if (sumOfDigits <= 16) {
        return false;
    }

    // - The final digit must be even
    if (parseInt(cardNums.slice(-1)) %2 !== 0){
        return {valid: false, number: card_num, error: 'last_digit_odd'};
    }

    if (checkLuhnAlgorithm){
        return {valid: true, number: card_num};   
    }else{
        return {valid: false, number: card_num, error: 'luhn_check_fail'}
    }
    
};
console.log(cardCheckWithLuhn('8923-3211-9001-1112'));