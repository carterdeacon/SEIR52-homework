console.log("arrays & functions script working");

// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    };
    return num2;
}

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThreeNumbers = function(num1, num2, num3) {
    let greatest = maxOfTwoNumbers(num1, num2);
    greatest = maxOfTwoNumbers(greatest, num3);
    return greatest;
}

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    }
    return false;
};

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const multiplyArray = function(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(string) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    };
    return reverse;
};
console.log(reverseString("Hello!"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(wordArray) {
    let longest = 0;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > longest) {
            longest = wordArray[i].length;
        };
    };
    return longest;
};

// 7. Write a function `filterLongWords` that takes an array of words and a number `i` and returns the array of words that are longer than i.
const filterLongWords = function(wordArray, min) {
    const longWords = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length >= min) {
            longWords.push(wordArray[i]);
        };
    };
    return longWords;
};