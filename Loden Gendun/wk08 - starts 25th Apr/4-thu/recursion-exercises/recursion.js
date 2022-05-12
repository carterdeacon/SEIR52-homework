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

// iterative recursion
// function fibonacci(nth, number = 1, prevNum = 0, i = 1){
//     if (i === nth) {
//         return number;
//     }

//     const temp = number;
//     number += prevNum;
//     prevNum = temp;
//     i++;

//     return fibonacci(nth, number, prevNum, i);
// }

function fibonacci(n){
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

fibonacci(4);

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

function letterCombinations(array){
    if (array.length === 1) {
        return array[0];
    }

    const popped = array.pop();

    const recursed = Array.from(letterCombinations(array));
    
    return [ ...recursed, popped, ...recursed.map(e=> e+popped) , ...recursed.map(e=> popped+e)];
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
