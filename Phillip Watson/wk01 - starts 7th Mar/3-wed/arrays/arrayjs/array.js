// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
//-----------------------------------------------------------------------------------------------------------------------------------
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
//-----------------------------------------------------------------------------------------------------------------------------------
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//-----------------------------------------------------------------------------------------------------------------------------------
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//-----------------------------------------------------------------------------------------------------------------------------------

const maxOfTwoNumbers = function(num1, num2) {
if (num1 > num2) {
    return num1; 
 } else { 
    return num2; 
 }
};
console.log(maxOfTwoNumbers(5, 10));

const maxOfThree = function(num1, num2, num3) {
    if (num1 > num2) {
        return num1;
    } else if (num1 > num3) 
        return num1; 
    };
    console.log(maxOfThree(20, 10, 5))

    const character = function() {
        let vowel = ['a', 'e', 'i', 'o', 'u']
      for(let i = 0; i <= vowel.length; i++) {
          if( character != vowel[i]) {
              continue;  
          } return true;
        }
        return false;
      };
    console.log(character('hello'))
    






// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i
