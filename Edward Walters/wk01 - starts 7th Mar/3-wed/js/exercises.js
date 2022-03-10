// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
};

console.log(maxOfTwoNumbers(96, 45));


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(a, b, c) {
    const x = maxOfTwoNumbers(a, b);
    const y = maxOfTwoNumbers(b, c);
    return maxOfTwoNumbers(x, y);
};

console.log(maxOfThree(99, 14, 102));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === char) {
            return true;
        }
    }
    return false;
}
   

console.log(isVowel('b'));
console.log(isVowel('a'));
    

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    };
    return total;
};

console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = function(array) {
    let total = array[0];

    for (let i = 0; i < array.length; i++) {
        total *= array[i];
    };
    return total;
};

console.log(multiplyArray([1, 2, 3, 4]));

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
return reversed;
}

console.log(reverseString('jag testar'));


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function(wordsArray) {
    let longest = 0
    
    for (let i = 0; i < wordsArray.length; i++) {
        let word = wordsArray[i];
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}

console.log(findLongestWord(['word', 'apple', 'blackcurrant']));


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i

const filterLongWords = function(wordsArray, i) {
    let filtered = [];
    
    for (let j = 0; j < wordsArray.length; j++) {
        let word = wordsArray[j];
       
        if (word.length >= i) {
            filtered.push(word);
        }
    }
    return filtered;
}

console.log(filterLongWords(['bed', 'cart', 'apples', 'houses', 'dog'], 4));



// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const letters = ['F', 'O', 'X'];   // must be uppercase
const guesses = ['\_', '\_', '\_'];
const rewards = [5, 10, 25, 50, 100];
let reward = 0;


// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0

// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.


const isWordGuessed = function(){
    let correctGuesses = 0;
    
    for (let i = 0; i < guesses.length; i++) {
        if (guesses[i] != '\_'){
            correctGuesses ++;
        }
    };
    return correctGuesses === guesses.length;
};


const getRandomReward = function(rewardsArray) {
    const randomReward = rewardsArray[Math.floor(Math.random() * rewardsArray.length)];
    return randomReward;
};


const guessLetter = function(guess){
    let found = false
    for (let i = 0; i < letters.length; i++) {
        if (guess.toUpperCase() === letters[i]) {
            found = true;
            guesses[i] = guess.toUpperCase();
            winAmount = getRandomReward(rewards);
            reward += winAmount;
            console.log(guesses)
            console.log("Congratulations. You found a letter!");
            console.log(`Your reward has increased by $${winAmount}`)
        }
    }
    
    if (!found) {
        console.log("Bad luck. You didn't find a letter");
        winAmount = getRandomReward(rewards);
        reward -= winAmount;
        console.log(guesses)
        console.log(`Your reward has descreased by $${winAmount}`);
    };
    

    if (isWordGuessed()) {
        console.log("Congratulations. You've guessed the word! You win.");
        console.log(`Your final Reward amount is: $${reward}`)
    }

};

guessLetter("b");
guessLetter("F");
guessLetter("z");
guessLetter("U");
guessLetter("o");
guessLetter("M");
guessLetter("X");


