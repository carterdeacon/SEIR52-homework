// # range

// Prompt:

// - Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
// - The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".

// Examples:
// ```javascript
// range(1,4) //=> [1,2,3]
// range(-2, 3) //=> [-2,-1,0,1,2]
// range(1,1) //=> []
// range(5,2) //=> "First argument must be less than second"
// ```

// - Make the function take a third number and have the range increment by that third argument.

// Examples:
// ```javascript
// range(1,10,2) //=> [1,3,5,7,9]
// range(5,20,5) //=> [5,10,15]
// ```
const range = function(int1, int2){
    let array =[];
    if (int1 <= int2){
        for (i = int1; i <= int2; i++){
            array.push(i); 
        }
        console.log(array);
    } else {
        return `First argument must be less than second`
    }
}

// ## bonus


const rangeBonus = function(int1, int2, int3){
    let array =[];
    if (int1 < int2){
        for (i = int1; i <= int2; i+=int3){
            array.push(i);
        }
        console.log(array);
    } else {
        return `First argument must be less than second`
    }
}