// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(9, 25));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
    let output = "";
    if (num1 > num2) {
        output = num1;
    } else {
        output = num2;
    }
    if (num3 > output) {
        output = num3;
    }
    return output;
}

console.log(maxOfThree(5, 19, 13));



// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const checkVowel = function (char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    } else {
        return false;
    }
};

console.log(checkVowel("e"));
console.log(checkVowel("k"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (array) {
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        output = output + array[i];
    }
    return output;
}

console.log(sumArray([1, 5, 6, 3]));

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const output = reverseArray.join("");
    return output;
}

console.log(reverseString("jag testar"));
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (array) {
    let word = "";
    for (let i = 1; i < array.length; i++) {
        if (array[i].length >= word.length) {
            word = array[i];
        }
    }
    return word;
};

console.log(findLongestWord(["so", "sad", "smile", "cry", "legend"]));
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function (arr, num) {
    let final = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            final = final.concat(arr[i])
        }
    }
    return final;
}

console.log(filterLongWords(["so", "sad", "smile", "cry", "legend"], 4));

// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const wordArray = ["f", "o", "x"];
let guessArray = ["_", "_", "_"];


const guessLetter = function (letter) {
    const includeLetter = wordArray.includes(letter);

    if (!includeLetter) {
        console.log("TRY AGAIN!!!!")
    } else {
        for (let i = 0; i < wordArray.length; i++) {
            if (letter === wordArray[i]) {
                guessArray[i] = letter;
                const remainingLetters = guessArray.filter(letter => letter === '_');
                console.log(guessArray);
                if (remainingLetters.length >= 1) {
                    console.log(`CONGRATULATION! YOU HAVE ${remainingLetters.length} LETTERS TO GUESS!`)
                }
                else {
                    console.log("CONGRATULATION! YOU WIN!")
                }
            }
        }
    }
};

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

const wordArray2 = ["l", "o", "o", "s", "e"];
let guessArray2 = ["_", "_", "_", "_", "_"];
let reward = 0;

const guessLetter2 = function (letter) {
    const includeLetter = wordArray2.includes(letter);
    let coins = Math.floor(Math.random() * 10);

    if (!includeLetter) {
        reward = reward - coins;
        console.log("TRY AGAIN!!!!")
        console.log(`$: ${reward}`);
    } else {
        for (let i = 0; i < wordArray2.length; i++) {
            if (letter === wordArray2[i]) {
                guessArray2[i] = letter;
                const remainingLetters = guessArray2.filter(letter => letter === '_');
                console.log(guessArray2);
                if (remainingLetters.length >= 1) {
                    reward = reward + coins;
                    console.log(`CONGRATULATION! YOU HAVE ${remainingLetters.length} LETTERS TO GUESS!`)
                    console.log(`$: ${reward}`);
                }
                else {
                    reward = reward + coins;
                    console.log("CONGRATULATION! YOU WIN!")
                    console.log(`You earn $:${reward} in total!`);
                }
            }
        }
    }
};

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

const wordArray3 = ["t", "e", "a", "c", "h"];
let guessArray3 = ["_", "_", "_", "_", "_"];
let count = 0;

const guessLetter3 = function (letter) {
    const includeLetter = wordArray3.includes(letter);
    const guessedArray = [];
    if (count < 5) {
        if (!includeLetter) {

            includeGuessedLetter = guessArray.includes(letter);
            if (!includeGuessedLetter) {
                guessedArray.push(letter);
                count++;
                console.log("TRY AGAIN!!!!")
                console.log(`${count} FAILED ATTEMPT!`)
            } else {
                console.log("TRY A NEW LETTER!")
            }
        } else {
            for (let i = 0; i < wordArray3.length; i++) {
                if (letter === wordArray3[i]) {
                    guessArray3[i] = letter;
                    const remainingLetters = guessArray3.filter(letter => letter === '_');
                    console.log(guessArray3);
                    if (remainingLetters.length >= 1) {
                        console.log(`CONGRATULATION! YOU HAVE ${remainingLetters.length} LETTERS TO GUESS!`)
                    }
                    else {
                        console.log("CONGRATULATION! YOU WIN!")
                    }
                }
            }
        }
    } else {
        console.log("HANGMAN COMES! YOU DIE");
    }
};

