

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const  maxOfTwoNumbers = function (a, b){
    if (a < b){
        console.log ( "The Greater number between "+ b + " and " + a + " is " + b);
        } else{
            console.log("The Greater number between "+ a + " and " + b + " is " + a);
        }
        
}


maxOfTwoNumbers (5, 6);



// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3){
    if (num1 < num2 && num3 < num2){
    console.log(`the largest number is ${num2}`)
    } else if ( num1 > num2 && num1 > num3){
        console.log(`the  largest number is ${num1}`);
    } else{
        console.log(` the largest number is ${num3}`);
    }
}

maxOfThree(6, 5, 3);
maxOfThree(1, 2, 3);
maxOfThree(2, 7, 5);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const letter = function( character){

    if ( character === 'a' || character === 'e' || character === 'i' || character=== 'o' || character ==='u'){
        return true;
    } else{
        return false;
    }
}

console.log(letter(`r`));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// }

const sumArray = function (arr){
    let sum = 0;
        for (i = 0; i < arr.length; i++ ){
            sum += arr[i];
        }
        console.log(sum);
}
sumArray([1, 2, 3, 4]);

const multiplyArray = function (arra){
    let sum = 1;
    for ( m = 0; m < arra.length; m++){
        sum = sum * arra[m];
    }
    console.log (sum);
}
multiplyArray ([1, 2, 3, 4]);

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

