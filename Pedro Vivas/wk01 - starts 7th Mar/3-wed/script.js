//Array and Functions
const maxOfTwoNumbers = function(num1, num2) {
    if(num1 === num2) {
        return "numbers are equal";
    }
    return num1 > num2 ? num1 : num2;
}

//TEST CASES
console.log(maxOfTwoNumbers(1, 3)); //num1 < num2
console.log(maxOfTwoNumbers(3, 1)); //num2 > num1
console.log(maxOfTwoNumbers(3, 3)); // num1 === num2



//Max of three
const maxOfThree = function(num1, num2, num3) {
    // params: int, int, int
    if(num1 === num2 && num2 === num3) {
        return "numbers are the same";
    }
    let max = 0;
    if(num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }
    if(max < num3) {
        max = num3;
    }
    return max;
}
//TEST CASES
console.log(maxOfThree(3, 3, 3)); // num1 = num2 = num3
console.log(maxOfThree(3, 2, 1)); //num1 > num2,num3
console.log(maxOfThree(1, 3, 2)); //num2 > num1,num3
console.log(maxOfThree(1, 2, 3)); //num3 > num1,num2



//sumArray
const sumArray = function(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    };
    return sum;
}

const shortSumArray = function(arr) {
    return arr.reduce((tot, num)=> tot + num);
}

//TEST CASEs
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(shortSumArray([1, 2, 3, 4, 5]));



//multiply
const multArray = function(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let sum = 1;
    for(let i = 0; i < arr.length; i++) {
        sum = sum * arr[i];
    };
    return sum;
}

const shortMultArray = function(arr) {
    return arr.reduce((tot, num)=> tot * num);
}
//TEST CASES
console.log(multArray([1, 2, 3, 4, 5]));
console.log(shortMultArray([1, 2, 3, 4, 5]));



//Reverse string
const reverseString = function(str) {
    let revStr = "";
    for(let i = str.length-1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
};
const shortReverseString = function(str) {
    let strToarr = str.split("");
    return strToarr.reverse().join("");
}
//TEST CASES
console.log(reverseString("habituation"));
console.log(shortReverseString("habituation"));

const findLongestWord = function(arr) {
    if(arr.length === 0) return "empty array";
    let longest = 0;
    for(let i = 0; i < arr.length; i++) {
        let wordLength = arr[i].length;
        if( wordLength > longest) {
            longest = wordLength;
        }
    }
    return longest;
};

const filterLongWords = function(arr, i) {
    let longList = [];
    for(let j = 0; j < arr.length; j++) {
        let wordLength = arr[j].length;
        if(wordLength > i) {
            longList.push(arr[j]);
        }
    };
    return longList;
}
//TEST CASE
console.log("Exercises: findLongWords, filterLongWords");
console.log(findLongestWord(["i", "to", "how", "why", "when", "which"]));
console.log(filterLongWords(["i", "to", "how", "why", "when", "which", "canvas", "helpful"], 3));


//WordGuesser
let guessWord = ["m", "u", "l", "t", "i", "p", "l", "e"];
let currentGuess = ["", "", "", "", "", "", "", ""];
let alreadytried = [];
let wrongs = 0;
const maxWrongs = 6;

console.log("HANGMAN");
const wordGuesser = function(letter) {
        let gotOneFlag = false;
        if(alreadytried.includes(letter)) {
            return `${letter} already tried.Try another letter`;
        };
        for(let i = 0; i < guessWord.length; i++) {
            if(letter === guessWord[i]) {
                currentGuess[i] = letter;
                gotOneFlag = true;
            };
        }
        alreadytried.push(letter);
        if(gotOneFlag) {
            console.log("Good one!");
            console.log(currentGuess);
            gotOneFlag = false;
            if(guessWord.join("").length === currentGuess.join("").length) {
                return "Congratuations. You win!";
            }
        } else {
            wrongs++;
            if(wrongs === maxWrongs) {
                return "Hangman! Game over. You lose."
            } else {
                console.log(`Good try, but ${letter} is not part of the word`);
                return `Try again, you have ${maxWrongs - wrongs} wrong guesses left`;
            };
        }
    return "Try another letter";
};
//TEST CASES
console.log(wordGuesser("m")); //right guess 1
console.log(wordGuesser("u")); //right guess 2
console.log(wordGuesser("l")); //right guess 3
console.log(wordGuesser("x")); // wrong guess 1/6
console.log(wordGuesser("h")); // wrong guess 2/6
console.log(wordGuesser("t")); // right guess 4
console.log(wordGuesser("i")); // right guess 5
console.log(wordGuesser("p")); // right guess 6
console.log(wordGuesser("a")); // wrong guess 3/6
console.log(wordGuesser("b")); // wrong guess 4/6
console.log(wordGuesser("m")); // already tried letter
console.log(wordGuesser("v")); // wrong guess 5/6
//console.log(wordGuesser("q")); // wrong guess 6/6 lose game
console.log(wordGuesser("e")); //right guess 7. Win Game