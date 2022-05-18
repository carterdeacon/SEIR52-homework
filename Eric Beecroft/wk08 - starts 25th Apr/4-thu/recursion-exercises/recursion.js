// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

const findMax = function(array){
    // This function returns the largest number in a given array.

    // Base case
    let max = -Infinity;

    // Cycle through all the elements of the array
    for(let i = 0; i < array.length; i++) {
        let n = array[i];
        // If n is greater than max let max = n
        if ( n > max ) {
            max = n;
        }
        // Loops through again with n+1. If n+1 > max(now n) then let max = n+1
    }
    // Until the loop completes and max is the highest number in the array

    return max;
};

function factorial(){
    // This function returns the factorial of a given number.
}

function fibonacci(){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(){
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