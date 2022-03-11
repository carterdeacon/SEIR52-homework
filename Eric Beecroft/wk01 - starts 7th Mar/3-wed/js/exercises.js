console.log('Hola!');

// Arrays & Functions

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
    if (a > b) {
        return `The larger number is ${ a }`
    }
    else {
        return `The larger number is ${ b }`
    }
};
console.log(maxOfTwoNumbers(9, 8));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (c, d, e) {
    if (c > d && c > e) {
        return `The larger number is ${ c }`
    }
    else if (d > c && d > e) {
        return  `The larger number is ${ d }`
    }
    else {
        return `The larger number is ${ e }`
    }
};
console.log(maxOfThree(9, 10, 8));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(vowels.includes('o'));

// Or - both of these appear to be case sensitive ... hmmm ...

const vowel = function (char) {
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        return 'True'
    }
};
console.log(vowel('i'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
};
console.log(sumArray(1,2,3,4));

const multiplyArray = function (num5, num6, num7, num8) {
    return num5 * num6 * num7 * num8;
};
console.log(multiplyArray(1,2,3,4));

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

// Struggling with this one

const string = ['jag tester']

string.reverse();
console.log(string);