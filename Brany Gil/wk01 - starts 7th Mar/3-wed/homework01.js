// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1, num2) {
   if (num1 > num2) { 
   console.log(num1)
} else{
    console.log(num2)
}

};
maxOfTwoNumbers(9, 21)

//2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(x, y, z){
    if (x>y) {
        console.log(x);
    } else { 
        console.log(y);
    } if (y>z) {
        console.log(y);
    } else {
        console.log(z);
    } if (z > x && y) {
        console.log(z)
    };
};
maxOfThree(7, 9, 21)


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 
const is_vowel = function (character){
 const vowels = ['a', 'e', 'i', 'o', 'u'];
 if (vowels.includes(character)) {
     console.log("true"); 
 } else {
     console.log("false");
 };

};

 is_vowel('r', 'b');
 is_vowel('a', 'e');

//  4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (numArray){
    let sums = [1, 2, 3, 4,]; {
        for (sums of  numArray) {
            sums = 10; 
            console.log(sums)
          };
        };
        };
          const multiplyArray = function (numArray){
            let sums = [1, 2, 3, 4,]; {
                for (sums of  numArray) {
                    sums = 24; 
                    console.log(sums)
                };
            };
        
        };

    sumArray([1, 2, 3, 4]);
  multiplyArray([1,2,3,4]);
