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


const validateCreditCard = function(number){
    let numCheck = number.replace(/-/g,"");
    let numbAr = Object.values(numCheck);
    let sumNumbAr = 0;
    let verdict = false;
    let rAllNum = false;
    let notSame = false;
    let endEven = false;
    let sumOfAll = false;
    

    for (let i = 0; i < numbAr.length; i++){
        if ((parseFloat(numbAr[i]) >= 0) ){
            rAllNum = true
        }  else {
            break;
        }
    }

    let j = 0
    while (j < numbAr.length){
        if (numbAr[0] !== numbAr[j]){
            notSame=true
            break;
        }
            j ++;
    }
    
    for (let k = 0; k < numbAr.length; k++ ){
        sumNumbAr += Number(numbAr[k])
    }
        if (sumNumbAr > 16){
            sumOfAll = true
    }
    
    if (Number(numbAr[15]) % 2 === 0){
        endEven = true
    }
    
    if (rAllNum && notSame && endEven && sumOfAll){
        verdict = true;
    }

   let result = {
       valid : verdict,
       number : number
   }

   if (verdict === false){
    if (rAllNum === false){
       result.error = 'Need 16 digits and all numbers.';
    } else {
    if (notSame === false){
        result.error = 'Need atleast two different digits.';
    }
    if (endEven === false){
        result.error = 'Last digit needs to be even.';
    }
    if (sumOfAll === false){
        result.error = 'Sum of all digits need to be greather than 16.';
    }
    }
    }

   console.log(result)

}

// The following credit card numbers are valid:

validateCreditCard(`9999-9999-8888-0000`)
validateCreditCard(`6666-6666-6666-1666`)

// The following credit card numbers are invalid:

validateCreditCard(`a923-3211-9c01-1112`) //invalid characters
validateCreditCard(`4444-4444-4444-4444`) //only one type of number
validateCreditCard(`1111-1111-1111-1110`) //sum less than 16)
validateCreditCard(`6666-6666-6666-6661`) //odd final number
