// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (firstNum, secondNum) {
    if (firstNum > secondNum) {
        return firstNum;
    } else if (secondNum === firstNum) {
        console.log(`Both numbers are equal.`);
    } else {
        return secondNum;
    }
};

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (firstNum, secondNum, thirdNum) {
    if (firstNum >= secondNum && firstNum >= thirdNum) {
        return firstNum;
    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
        return secondNum;
    } else {
        return thirdNum;
    }
}

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelChar = function (letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const i = 0; i < vowels.length; i++) {
        if(letter === vowels[i]) {
            return true;
        } else {
            return false;
        }
    }
};

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const numbers = [2, 3, 5, 7];
const sumArray = function (numbers) {
    let sum = 0;

    for (const i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}; 

// ## Bonus
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
