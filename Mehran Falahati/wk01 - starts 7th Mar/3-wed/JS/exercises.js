// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a, b) {
    if (a > b) {
        console.log(`${ a } is largest`);
    } else {
        console.log(`${ b } is the largest`);
    }
}
maxOfTwoNumbers(5, 10);


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(num1, num2, num3) {
    let answer;
    if (num1 > num2 && num1 > num3) {
             answer = num1;
    }   else if (num2 > num3 && num2 > num3) {
            answer = num2;
    }   else {
            answer = num3;
    }
    return answer;
};   
maxOfThree(1, 3, 8);
console.log(maxOfThree(1, 3, 8));
  
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const words = function(character) {
    if (character === 'a' || character === 'e' || character === 'i' || character === 'u' || character === 'o') {
        return true;
    } else {
        return false;
    };
};
console.log(words('a'));
console.log(words('g'));


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(array1) {
    let total = 0;
    for (let no = 0; no < array1.length; no++) {
        total = total + array1[no];  {
            console.log(total);
        }
    }
}
sumArray([1, 2, 3, 4]);

const multiplyArray = function(array2) {
    let summ = 1;
    for (let n = 0; n < array2.length; n++) {
        summ = summ * array2[n]; 
    }
    console.log(summ);
}
multiplyArray([1, 2, 3, 4]);

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {
    let input = "";
    for (let n = string.length-1; n >= 0; n--) {
        input = input + string[n];
    }
    return input;
}
console.log(reverseString("jag tester"));



// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
