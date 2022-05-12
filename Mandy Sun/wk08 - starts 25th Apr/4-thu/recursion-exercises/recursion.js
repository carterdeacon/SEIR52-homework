// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array){
    for(let i=0; i<array.length-1; i++){
        if(array[i] <=array[i+1] ){
            return array[i+1];
        }else{
            return array[i];
        }
    }
}

function factorial(num){
   if( num == 0 ){
       return 1;
   }else{
   const sum = num * factorial(num-1);
   return sum;
  }
}

function fibonacci(num){
    if(num<=2){
        return 1
    }else{
        return fibonacci(num-1)+fibonacci(num-2)
    }
    
}

function coinFlips(num) {
    // Helper recursive function
    function addFlips(num, result, current) {
        if (num === 1) {
            // every time you flip your coin. the arrangement will X2
            result.push(current + 'H');
            result.push(current + 'T');
        } else {
            //everytime you flip the coin, your current arrangement will add a "H" or add a "T", it also means that you will run both of these 2 functions twice!
            addFlips(num - 1, result, current + 'H');
            addFlips(num - 1, result, current + 'T');
        }
    }
    // Begin with empty results
    let result = [];
    addFlips(num, result, '');
    return result;
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