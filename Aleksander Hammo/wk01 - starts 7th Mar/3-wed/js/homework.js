// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
    if (a>b) {
        return a
    }
    else {
        return b
    }
}

console.log(maxOfTwoNumbers(14, 8))

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
    if (a > b && a > c) {
        return a
    }
    else if (b > a && b > c) {
        return b
    }
    else {
        return c
    }
}

console.log(maxOfThree(2, 13, 4))


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function (vowel) {

    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < vowels.length; i++) {
        if (vowel === vowels[i]) {
            return true
        }
    }
    return false

}

console.log(isVowel("p"))

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (arr) {
    let total = 0;
    for (let i=0; i < arr.length; i++) {
        total += arr[i] // QUESTION: Why can't you write arr[i]++?
    }
    return total;
}
console.log(sumArray([1, 2, 3, 4]))

const multipleArray = function (arr) {
    let total = 1;
    for (let i=0; i < arr.length; i++) {
        total *= arr[i] // QUESTION: Why can't you write arr[i]++?
    }
    return total;
}
console.log(multipleArray([1, 2, 3, 4]))

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

const word = ["F", "O", "X"]

const userGuess = ["", "", ""]

const guessLetter = function (letter) {

    let guess = 0;

    for (let i=0; i < word.length; i++) {
        if (word[i] === letter) {
            guess = 1;

            guess[i] = letter;
        }
    }
}
console.log(guess.join(" "))

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.