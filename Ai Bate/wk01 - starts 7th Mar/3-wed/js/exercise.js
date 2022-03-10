console.log("excise is here in console");


// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(n1,n2){
    if( n1 > n2 ){
        return (n1);
    }else{
        return (n2);
    }

}
maxOfTwoNumbers(10,5); // testing
maxOfTwoNumbers(1,5);// testing
maxOfTwoNumbers(0,5);// testing
maxOfTwoNumbers(10,5);// testing
maxOfTwoNumbers(10,500);// testing
maxOfTwoNumbers(10,5);// testing


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function ( n3,n4,n5 ){
    if( n3 >= n4 && n3 >= n5){
        return n3;
    } else if( n4 >= n3 && n4 >= n5) {
        return n4;
    } else {
        return n5;
    }
}
console.log(maxOfThree(10,20,30));
console.log(maxOfThree(20,10,30));
console.log(maxOfThree(20,30,30)); 
console.log(maxOfThree(10,20,20));
console.log(maxOfThree(30,20,10));
console.log(maxOfThree(10,10,20));

// 3. Write a function that takes a character (i.e. a string of length 1)
//  and returns true if it is a vowel, false otherwise.
const vowelFinder = function(character) {
    lowerCase = character.toLowerCase();
    if(lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'o'|| lowerCase === 'i'|| lowerCase ==='u' ) {
        return true;
    } else{
        return false;
    }
}
console.log(vowelFinder('a'));
console.log(vowelFinder('A'));
console.log(vowelFinder('B'));
console.log(vowelFinder('t'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies 
// (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` 
// should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function(array){
    let addTotal = 0;
    for(let i = 0; i < array.length; i++ ){
        addTotal += array[i];
    }
    return addTotal;
}
console.log(sumArray([1,2,3,4]));

const multiplyArray = function(array2){
    let multiplyTotal=1
    for(let i = 0; i < array2.length; i++ ){
        multiplyTotal = multiplyTotal * array2[i]
    }
    return multiplyTotal;
}
console.log(multiplyArray([1,2,3,4]));


// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. 

// For example, reverseString("jag testar") should return the string "ratset gaj".


const reverseString = function(sentence){
    let reverseString ="";
    for (let index = sentence.length-1; index>=0; index--) {
        reverseString += sentence[index];
    }
    return reverseString;
}
console.log(reverseString("banana apple"));

// 6. Write a function `findLongestWord`
//  that takes an array of words and returns the length of the longest one.
const findLongestWord = function(wordsList) {
    let longestWord = "";
    for( let i = 0; i< wordsList.length; i++){
        if(wordsList[i].length > longestWord.length){
            return longestWord;
        }
    } 
}
findLongestWord('cat','milk', 'water', 'cucumber');
// console.log(findLongestWord(['cat','milk', 'water', 'cucumber']));
// 7. Write a function `filterLongWords` that takes an array of 
// words and an number `i` and returns the array of words that are longer than i.å