// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};
const resultMaxOfTwoNumbers = maxOfTwoNumbers(2, 3);
console.log(resultMaxOfTwoNumbers);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
    if (num1 > (num2 && num3)) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
const resultMaxOfThree = maxOfThree(3, 8, 5);
console.log(resultMaxOfThree);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isAVowel = function (character) {
    vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowel.length; i++) {
        if (vowel[i] === character) {
            return true;
        }
    }
    return false;
}
const resultIsAVowel = isAVowel('b');
console.log(resultIsAVowel);

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (array) {
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        x += array[i];
    }
    return x;
}
const resultSumArray = sumArray([1, 2, 3, 4]);
console.log(resultSumArray);

const multiplyArray = function (array) {
    let x = 1;
    for (let i = 0; i < array.length; i++) {
        x *= array[i];
    }
    return x;
}
const resultMultiplyArray = multiplyArray([1, 2, 3, 4]);
console.log(resultMultiplyArray);

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string) {
    let x = '';
    for (let i = (string.length - 1); i >= 0; i--) {
        x += string[i];
    }
    return x;
}
const resultReverseString = reverseString('jag testar');
console.log(resultReverseString);

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function (array) {
    let length = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            length = array[i].length;
        }
    }
    return length;
}
const resultFindLongestWord = findLongestWord(['blue', 'red', 'black', 'white']);
console.log(resultFindLongestWord);

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const filterLongWords = function (array, number) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > number) {
            newArray.push(array[i]);
        }
    }
    return newArray
}
const resultFilterLongWords = filterLongWords(['blue', 'red', 'black', 'white'], 4);
console.log(resultFilterLongWords);

// js-homework-3.md
// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const lettersOfTheWord = ['F', 'O', 'X'];
const guessedLetters = ['_', '_', '_'];

const guessLetter = function (guessed) {
    for (let i = 0; i < lettersOfTheWord.length; i++) {
        if (guessed === lettersOfTheWord[i]) {
            guessedLetters[i] = guessed
        }
    }
    if (lettersOfTheWord.join('') === guessedLetters.join('')) {
        return `${guessedLetters.join('')} Congratulations! You guessed all the letters.`;
    }
    return `${guessedLetters.join('')} Congratulations! You guessed a letter.`;
}
console.log(guessLetter('X'));
console.log(guessLetter('F'));
console.log(guessLetter('O'));

// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.