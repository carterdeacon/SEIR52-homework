// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index = 0, max = arr[index]){
    // This function returns the largest number in a given array.

    if (index === arr.length) {
        return max;
    } else if (arr[index] > max ) {
        max = arr[index];
        return findMax(arr, index + 1, max);
    } 
    return findMax(arr, index + 1, max);
}

function factorial(n, num = 1){
    // This function returns the factorial of a given number.
    if (n === 1) {
        return num;
    } else if ( n > 1) {
        num = num * n;
        return factorial(n - 1, num);
    }
    return factorial(n - 1, num);
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1

    if (n < 2) {
        return n;
    } 
    return fibonacci(n-1) + fibonacci(n-2);
    
}

function coinFlips(n, array=["H", "T"]){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    if (n === 1 ) {
        return array;
    } else {
        array1 = array.map(i => i.concat("H"));
        array2 = array.map(i => i.concat("T"));
        array = array1.concat(array2);

        return coinFlips(n-1, array);
        // can't believe i fucking figured this out!!!
    }

}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    let array = ["a", "b", "c"]
    let array2 = array.slice();
    let index = 0;
    let a = array2.splice(index,index+1);
    array2.map(i => i.concat(a));
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}