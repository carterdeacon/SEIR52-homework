// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else {
        return num3;
    }
};

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowel = function (ch){
    if (ch === "a" || ch === "e" || ch === "i" || ch === "u" || ch === "o") {
        return "true";
    }
    else {
        return "false"
    }
};

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (newArray){
    let sum = 0;
    for (let i = 0; i < newArray.length; i++){
        sum = sum + newArray[i];
    }
    return sum;
};

const multiplyArray = function (newArray){
    let result = 1;
    for (let i = 0; i < newArray.length; i++){
        result = result * newArray[i];
    }
    return result;
}

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


let array1 = ["F", "O", "X"];
let guessArray = ["", "", ""];
const guessLetter = function () {
    while (array1 !== guessArray){
        let letter = prompt("Enter your letter");
        if (array1[0] === letter) {
            guessLetter[0] = letter;
            console.log("F__ Congratulation! you guess one correct letter");
        }
        if (array1[1] === letter) {
            guessLetter[1] = letter;
            console.log("FO_ Congratulation! you guess one correct letter");
                i = 2;
            }    
        if (array1[2] === letter) {
            guessLetter[2] = letter;
            console.log("FOX Congratulation! you guess the word");
                break
            } 
            else {
                console.log("You need to guess more letters");
        }   
    }
}
      
