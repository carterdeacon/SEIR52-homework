// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(myArray) {
    const maxNumber = myArray[0]; 
    
    for (const i = 1; i < myArray.length; i++) {
      const currentNumber = myArray[i]; 
      if(currentNumber > maxNumber) { 
        maxNumber = currentNumber
      }
    }

    return maxNumber;
  }
  
  console.log(findMax([1, 200, , 3, 400]))


  
function factorial(){
    
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