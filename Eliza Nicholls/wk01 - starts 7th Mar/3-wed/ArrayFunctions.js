// Array and Functions Bonus Material
console.log('hello');
//     Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

// const maxOfTwoNumbers = function (a, b){
//     let result;
//     if ( a > b ) {
//         result = (a) ;
//     } else {
//         result = (b);
//     }
//     return result;
// };

// maxOfTwoNumbers();


//     Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c){
    let result;
    if ( a > b && a > c) { 
     result = a;
        } else if (b > a && b > c) {  
            result = b;
        } else {
            result = c;
        }
    return result;
};
maxOfThree(1, 5, 9); 
console.log(maxOfThree(1, 5, 9));

//     Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const letter = function (character){
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ) {
    return true;
} else {
    return false;
}
};
console.log(letter('a'))
letter('a');

//     Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (array){
let sumArray = ([1, 2, 3, 4]);
if ()

// is this a loop?

for (i = 0 ; i < 4 ; i++)
};

const multipleArray = function (arrayMultiply){

};
multiple(arrayMultiply);

// Bonus

//     Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//     Write a function findLongestWord that takes an array of words and returns the length of the longest one.
//     Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i
