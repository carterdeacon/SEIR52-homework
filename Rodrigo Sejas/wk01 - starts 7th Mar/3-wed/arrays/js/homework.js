// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

const maxOfThree_two = function (a, b, c) {
  return Math.max(a, b, c);
};

// if multiple numbers
function maxOfN(a, ...nums) {
  // rest operator
  winner = a;
  nums.forEach((element) => {
    if (element > winner) {
      winner = element;
    }
  });
  return winner;
}

// assign the first number as the 'winner'
// winner is the largest number
// compare against every number (loop through)
// if there is another number larger than our winner, reassign as winner
// return winner

//

// Examples
console.log(maxOfThree(10, 20, 30)); // Result = 30
console.log(maxOfThree(11, 5, 10)); // Result = 11
console.log(maxOfThree(1, 2, 2)); // Result = 2

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// define function with param as char
function vowelCheck(char) {
  let letter = char.toLowerCase();
  console.log(letter);
  if (letter.includes("a")) {
    return true;
  } else if (letter.includes("e")) {
    return true;
  } else if (letter.includes("i")) {
    return true;
  } else if (letter.includes("o")) {
    return true;
  } else if (letter.includes("u")) {
    return true;
  } else {
    return false;
  }
}

console.log(vowelCheck("i")); // Result = true
console.log(vowelCheck("U")); // Result = true
console.log(vowelCheck("p")); // Result = true
console.log(vowelCheck("V")); // Result = false
console.log(vowelCheck("A")); // Result = true

// example of multiple - if (letter.includes('a') || letter.includes....)
// set a vowel array, use array.includes to search char

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

exampleArr = [1, 2, 3, 4];

function sumArray(arr) {
  return arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
}

console.log(sumArray(exampleArr)); // Result = 10

function multiplyArray(arr) {
  return arr.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  }, 1);
}

console.log(multiplyArray(exampleArr)); // Result = 24

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // Need help with understanding this line!
  }
  return newString;
}

console.log(reverseString("Hello"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

let word = ["F", "O", "X"];
let guessedLetters = ["_", "_", "_"];

// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.

function guess(guessLetter) {
  guessLetter = guessLetter.toUpperCase();
  word.forEach(function check(letter, index) {
    if (letter === guessLetter) {
      guessedLetters[index] = letter;
      console.log(guessedLetters.join(""));
      console.log("Congrats motherfucker");
      if (unguessedLettersExist()) {
        console.log("Double congrats motherfucker");
      }
    }
  });
}

// **ROD** forEach can return the index value, and forEach does nothing with returns
// **ROD** if the word had multiple of same letter, update the array to empty/replace the string after a correct guess (retains index)

// - Iterate through the word letters and see if the guessed letter is in there.

// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.

// - When it's done iterating, it should log the current guessed letters ('F__')

// and congratulate the user if they found a new letter.

// - It should also figure out if there are any more letters that need to be guessed,

const unguessedLettersExist = function () {
  if (!guessedLetters.includes("_")) {
    return true;
  }
};

// and if not, it should congratulate the user for winning the game.

// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// -------

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
