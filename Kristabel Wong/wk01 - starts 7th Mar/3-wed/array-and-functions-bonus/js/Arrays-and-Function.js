// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(num1, num2) {
    let max;
    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }
    return max;
}

console.log(maxOfTwoNumbers(6,9));


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(num1, num2, num3) {
    let max;
    if (num1 > num2 && num1 > num3) {
        max = num1;
    } else if (num2 > num3 && num2 > num1) {
        max = num2;
    } else if (num3 > num1 && num3 > num2) {
        max = num3;
    }
    return max;
}

console.log(maxOfThree(3,6,9));
console.log(maxOfThree(15,2,5));
console.log(maxOfThree(10,25,19));


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isAVowel = function(a) {
    if (['a','e','i','o','u'].includes(a)) {
        return true;
    } else {
        return false;
    }
};

console.log(isAVowel('b'));
console.log(isAVowel('i'));
console.log(isAVowel('x'));


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const num = function (array) {
    let sumArray = 0;
    for (i = 0; i < array.length; i++){
        sumArray+= array[i];
    } 
    console.log(sumArray);

    let multiplyArray = 1;
    for (i = 0; i < array.length; i++){
        multiplyArray = multiplyArray * array[i];
    } 
    console.log(multiplyArray);
}

num([1,2,3,4]);
num([2,4,6,8,10]);

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string1) {
    let reverse=" ";

    for (i = (string1.length-1); i >= 0; i--) {
        reverse += string1[i];
    }
    
    console.log(reverse);
}

reverseString('able');
reverseString('jag testar');


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (array) {
    let longest=" ";
    for (i = 0; i < array.length; i++){
        if (array[i].length > longest.length) {
            longest = array[i];
        } 
    }
    console.log(longest);
}

findLongestWord(['sleep','tiredness','napping','snore']);


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (arr,i) {
    let newArray = [];
    for (a = 0; a < arr.length; a ++) {
        if (arr[a].length > i) {
            newArray.push(arr[a]);
        }
    }
    console.log(newArray);
}


filterLongWords(['angry','happy','depressed','frustrating','joyful'],5);



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

let secret = ['F','O','X'];
let guess = ['\_','\_','\_'];

const guessLetter = function (letter) {
    for (i = 0; i < secret.length; i++) {
        if (letter.toUpperCase() === secret[i]) {
            guess[i]= secret[i];
            console.log(`Congratulations you guessed a correct letter ${secret[i]}`);
        } 
    }
    console.log(guess);   
} 



guessLetter('X');
guessLetter('B');
guessLetter('F');


// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.