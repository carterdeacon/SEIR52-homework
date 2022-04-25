/*
# The Calculator

## Part 1
- Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
- Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
- Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
- Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
- Bonus: Round the result so there are only two digits after the decimal.
*/

const squareNumber = function(integer) {
    let result = integer * integer;     //input value squared
    console.log(`The result of squaring the number ${ integer } is ${ result }`);
    
    return result;
}

const halfNumber = function(integer) {
    let result = integer / 2; 
    console.log(`Half of ${integer} is ${ result }`);

    return result; 
}

const percentOf = function(integer1, integer2) {
    let percentResult = integer1 / integer2; 
    let result  = percentResult * 100; 
    console.log(`${ integer1 } is ${ result }% of ${ integer2 }`); 

    return result;
}

const areaOfCircle = function(radius) {   
    let result = Math.round(radius * radius) * Math.PI;                                                     //piRsquared
    let roundedResult  = result.toFixed(2);                                                                 //result fixed at 2 decimal places              
    console.log(`The area for a circle with radius ${ radius } is ${ roundedResult } or specifically ${ result }`);           
    
    return roundedResult;
}


squareNumber(3);

halfNumber(10);

percentOf(2, 4); 

areaOfCircle(4.5);

/*
## Part 2
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
- Take half of the number and store the result.
- Square the result of #1 and store that result.
- Calculate the area of a circle with the result of #2 as the radius.
- Calculate what percentage that area is of the squared result (#3).

*/

const processAnInteger = function(int) {

        const intHalf = halfNumber(int);
        //console.log(intHalf);

        const squaredHalf = squareNumber(intHalf);
        //console.log(squaredHalf);

        const calcCircle = areaOfCircle(squaredHalf);
        //console.log(calcCircle);

        const percentArea = percentOf(squaredHalf, calcCircle);
        //console.log(percentArea);

}

processAnInteger(4);


/*
# Strings

These exercises will test your knowledge of string functions, conditionals, and arrays. 
For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

## DrEvil

Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' 
at the end if the amount is 1 million. For example:
```
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
```
*/

const DrEvil = function(amount) {
    if (amount === 1000000) {
        result  = `${ amount } dollars (pinky)`;
    } else {
        result  = `${ amount } dollars`;   
    }
    return result
}

const howMuch = DrEvil(1000000);
console.log(howMuch);

/*
## MixUp

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) 
slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
```
  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
```
*/
const mixUp = function(str1, str2) {
    let prestr1 = str1.substring(0,1);
    let sufstr1 =  str1.slice(1);
    let prestr2 = str2.substring(0,1);
    let sufstr2 = str2.slice(1);
    const result = `${ prestr2 }${ sufstr1 }  ${ prestr1 }${ sufstr2 }`;
    return result
}

const swapStr  = mixUp("hello", "Goodbye");
console.log(` mixUp is ${ swapStr }`);

/*
## FixStart

Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced 
with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
```
fixStart('babble'): 'ba**le'

```
*/

const fixStart = function(str1) {
    let prefixStr = str1.substring(0,1);
    let suffixStr =  str1.slice(1);
    let redact = suffixStr.replaceAll(prefixStr, "*");
    const result = `${ prefixStr }${ redact }`;    // pointless interpolation: kust join the vars together.  
    return result
}

const redactStr = fixStart("bubble");
console.log(`fixed word is ... ${redactStr}`);



/*
## Verbing

Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
```
  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
```
*/
/*
const verbing = function(string) {

    const doing = "ing";
    const doingWell = "ly";


    if (string.length> 3) {

        if 

        stringResult = ` `


    }


}

const verbMe = verbing("swim");
console.log(verbMe);
*/


/*
## Not Bad

Create a function called notBad that takes a single argument, a string.
- It should find the first appearance of the substring 'not' and 'bad'.
- If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
- If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:
```
  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
```

*/

/*
# Raindrops

Write a Javascript function called raindrops that takes a number and returns a string based on whether or not the number has a factor of 3, 5 or 7 (or some combination of the three).

- If the number is divisible by 3, the function returns "Pling".
- If the number is divisible by 5, the function returns "Plang".
- If the number is divisible by 7, the function returns "Plong".
- If the number is divisibale by more than one of the above, the function returns their **sounds combined**.
- If the number is not divisble by 3, 5 or 7, the function just returns the number.


### Examples:
``` 
raindrops(28) // => "Pling"
raindrops(35) // => "PlangPlong"
raindrops(26) // => "26"
```
*/

const raindrops = function(integer) {

    let nope = integer;        // I'm not divisible by any of this   

   let outString = " ";


        if (integer % 3 === 0 ) {                   //needs the formula            
            outString = "Pling";
            nope = " ";
        } 
        if (integer % 5 === 0 ) {                   //needs the formula    
            outString += "Plang";
            nope = " ";
        } 
        if (integer % 7 === 0 ) {                   //needs the formula    
            outString += "Plong";
            nope= " ";     
        }

        const result = outString + nope;

        return result

}

const typeofRain = raindrops(15);
console.log(typeofRain); 