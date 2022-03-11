
console.log("The console is ready and waiting:")

// 1 - maxOfTwoNumbers
console.log("maxOfTwoNumbers function -");
const maxOfTwoNumbers = function (num1, num2) {
    let result = "";
    if ( num1 > num2 ) {
        result = `${num1} is greater than ${num2}`;
    } else if ( num2 > num1){
        result = `${num2} is greater than ${num1}`;
    } else {
        result = `The numbers are equal`;
    }
    return result;
};

console.log(maxOfTwoNumbers(-13, 4));
console.log(maxOfTwoNumbers(4, 4));
console.log(maxOfTwoNumbers(5, 27));


// 2 - maxOfThree
console.log("maxOfThree function -");
const maxOfThree = function (num1, num2, num3) {    
    let result = "";
    if ( num1 > num2 && num1 > num3 ) {        
            result = `${num1} is greater than ${num2} and ${num3}`;
        }  else if ( num2 > num1 && num2 > num3 ){        
            result = `${num2} is greater than ${num1} and ${num3}`;
        } else {
            result = `${num3} is greater than ${num1} and ${num2}`;
        }   
        return result;
    };

console.log(maxOfThree(-13, 4, 28));
console.log(maxOfThree(4, 0, -1));
console.log(maxOfThree(5, 27, 11));

// 3 - Check if vowel

console.log("Check vowel function -");
const isVowel = function (c) {
    let result;
    c = c.toLowerCase();  // converting the character to lower case
    result = ( c === "a" || c === "e" || c === "i" || c === "o" || c === "u");
    return result;    
};

console.log(isVowel("A"));
console.log(isVowel("c"));
console.log(isVowel("e"));
console.log(isVowel("Z"));


// 4 - sumArray function

console.log("sumArray function -");
const sumArray = function (arr1) {
    let sum = 0;
    for ( let i = 0; i < arr1.length; i++){
        sum += arr1[i];
    }
    return sum;
};

console.log(sumArray([1,2,3,4]));
console.log(sumArray([23, 32, 11, 1]));

// 5 - multiplyArray function

console.log("multiplyArray function -");
const multiplyArray = function(arr1) {
    let product = 1;
    for ( const element of arr1){
        product *= element;
    }
    return product;
};

console.log(multiplyArray([1,2,3,4]));
console.log(multiplyArray([23, 32, 11, 1]));


//  6 - Reverse a string function

console.log("reverseString function -");
const reverseString = function (word) {
    let reversedWord = "";
    let wordArray = word.split("");
    let reversedArray = wordArray.reverse();
    reversedWord = reversedArray.join("");
    return reversedWord;
};

console.log(reverseString("jag testar"));
console.log(reverseString("laser tag is fun"));

// 7 - findLongestWord

console.log("findLongestWord function -");
const findLongestWord = function (arr1) {   
    let longestWord = "";    
    for ( let i = 0; i < arr1.length; i++) {
        let currentWord = arr1[i]
        let currentWordLength = currentWord.length;
        let longestWordLength = longestWord.length;
        if ( currentWordLength > longestWordLength ) {
            longestWord = currentWord;
        }
    }
    return longestWord;
};

console.log(findLongestWord(["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]));
console.log(findLongestWord(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']));


// 8 - filterLongWords

console.log("filterLongWords function -");
const filterLongWords = function (arr1, l){       
    let resultArr = [];
    for ( let i = 0; i < arr1.length; i++ ) {
        let currentWord = arr1[i];
        let currentWordLength = currentWord.length;
        if (currentWordLength > l) {
            resultArr.push(currentWord);
        }
    }
    return resultArr;
};


console.log(filterLongWords(["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"], 7));
console.log(filterLongWords(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], 7));