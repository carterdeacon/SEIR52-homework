// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num_1, num_2) {
    if (num_1 > num_2) {
        return num_1;
    }else {
        return num_2;
    }
};

console.log(maxOfTwoNumbers(1,12));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num_1, num_2, num_3) {
    largestNum = 0;
    if (num_1 > num_2) {
        largestNum = num_1;
    }else {
        largestNum = num_2;
    }
    if (largestNum > num_3) {
        return largestNum
    }else {
        largestNum = num_3;
    }
    return largestNum;
    }

console.log(maxOfThree(3,6,1));
console.log(maxOfThree(1,2,3));
console.log(maxOfThree(7,2,1));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const checkVowel = function (character){
    const vowel = ['a','e','i','o','u'];
    if(vowel.includes(character)) {
        return `${character} is a vowel.`
    }else {
        return 'false'
    }
};
console.log(checkVowel('r'));
console.log(checkVowel('a'));
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function (array){
    let sums = 0;
    for (var element of array){
        sums += element;
    }
    return sums;
};
const multiplyArray = function(array) {
    let multiplies = 1;
    for (var element of array) {
        multiplies *= element;
    }
    return multiplies;
};
console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));
// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(string) {
    let result = [];
    for (var element of string ) {
        result.push(element);
    }
    let newString = ''
    for (i = result.length-1; i >=0; i--){
        newString += result[i];
    }
    return newString;
};
console.log(reverseString("jag testar"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (array_of_words) {
    let longestWord = '';
    for (var element of array_of_words) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return longestWord;
};
console.log(findLongestWord(['able', 'ale', 'apple', 'bale', 'kangaroo']));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function (array_of_words, number) {
    let outputArray = [];
    for (var i = 0; i < array_of_words.length; i++) {
        if (array_of_words[i].length > number) {
            outputArray.push(array_of_words[i]);
        }
    }
    return outputArray;
};
console.log(filterLongWords(['able', 'ale', 'apple', 'bale', 'kangaroo'], 4));


