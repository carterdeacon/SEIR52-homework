// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

//myGA
// function sumArrayOfNums(arr, index = 0, sum = 0){
//     if(index === arr.length){
//         return sum;
//     }
//     sum += arr[index];
//     return sumArrayOfNums(arr, index + 1, sum);
// }
// console.log(sumArrayOfNums([2, 4, 5, 8]))

function findMax(array){
    // This function returns the largest number in a given array.
    numbers = array
        if (numbers.length == 1) { 
            return numbers[0];
        }
        if (numbers[0] < numbers[1]) {
            numbers.splice(0, 1);
        } else { 
            numbers.splice(1, 1);
        }
        return findMax(numbers);
}

function factorial(num){
    // This function returns the factorial of a given number.
    if(num === 0 || num === 1){
        return 1;
    }else{
        return num * factorial(num - 1);
        }
}

function fibonacci(num){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

function coinFlips(num){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}