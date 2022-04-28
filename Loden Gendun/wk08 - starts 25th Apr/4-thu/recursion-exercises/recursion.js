var _ = require('lodash');

// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array, index = 1, largest = array[0]){
    if(index > array.length) {
        return largest;
    }
  
    if(array[index] > largest) {
        largest = array[index];
    }
    
    return findMax(array, index + 1, largest)
}

function factorial(number, result = 1){
    if (number < 1) {
        return result;
    }
    
    result = result * number
    
    return factorial(number - 1, result);
}

function fibonacci(nth, number = 1, prevNum = 0, i = 1){
    if (i === nth) {
        return number;
    }

    const temp = number;
    number += prevNum;
    prevNum = temp;
    i++;

    return fibonacci(nth, number, prevNum, i);
}

// converts bool array into coin string e.g. [false, true, false] => "THT"
const coinify = array => array.map(element => element ? 'H' : 'T').join('');

function coinFlips( N, array = new Array(N).fill(false), output = [coinify(array)] ){
    if (_.every(array, e => e)) {
        return output;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] = !array[i]) {
            break;
        }
    }
    output.push(coinify(array));

    return coinFlips(N, array, output);
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
