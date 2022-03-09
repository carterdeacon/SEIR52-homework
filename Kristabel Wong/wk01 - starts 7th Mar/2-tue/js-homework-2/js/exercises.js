// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const DrEvil = function (x) {
    if (x === 1000000) {
        console.log(`${x} dollars (pinky)`);
    } else {
        console.log(`${x} dollars`);
    }
};

DrEvil(10);
DrEvil(1000000);



// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function(x,y) {
    let wordA = x.substring(0,2);
    let wordB = y.substring(0,2);
    let remainA = x.substring(2);
    let remainB = y.substring(2);
    console.log(`${wordB}${remainA} ${wordA}${remainB}`);
}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');



// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

// const fixStart = function (x) {
//     let a = x.replace(x.charAt[0],'*');
//     console.log(a);
// }

const fixStart = function (x) {
    let a = x.charAt(0);
    let b = x.substring(1);
    let c = b.replaceAll(`${a}`,`*`);
    console.log(`${a}${c}`);
}

fixStart('babble');
fixStart('puppy');



// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function (x) {
    if (x.substring(x.length-3) === 'ing') {
        console.log(`${x}ly`);
    } else if (x.length >= 3) {
        console.log(`${x}ing`);
    } else if (x.length < 3) {
        console.log(x);
    }
}

verbing('swim')
verbing('swimming');
verbing('go');


// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```


// do not use x or y as variables - as they usually mean numbers. try use string1 and string2
const notBad = function (x) {
    if (x.includes('not') && (x.indexOf('not') < x.indexOf('bad'))) {
        const indexOfNot = x.indexOf('not');
        const y = x.substring(0,indexOfNot)
        console.log(`${y}good!`);
    } else {
        console.log(x);
    }
}

notBad('This dinner is not that bad!'); // output --> This dinner is good!
notBad('This movie is not so bad!'); // output --> This movie is good!
notBad('This dinner is bad!'); // output is the same
notBad('This dinner is really bad, it is not good!'); // output is the same



// # Raindrops

// Write a Javascript function called raindrops that takes a number and returns a string based on whether or not the number 
// has a factor of 3, 5 or 7 (or some combination of the three).

// - If the number is divisible by 3, the function returns "Pling".
// - If the number is divisible by 5, the function returns "Plang".
// - If the number is divisible by 7, the function returns "Plong".
// - If the number is divisibale by more than one of the above, the function returns their **sounds combined**.
// - If the number is not divisble by 3, 5 or 7, the function just returns the number.


// ### Examples:
// ``` 
// raindrops(28) // => "Plong"
// raindrops(35) // => "PlangPlong"
// raindrops(26) // => "26"


const raindrops = function(x) {
    if ((x % 3 === 0) && (x % 5 === 0) && (x % 7 === 0)) {
        console.log("PlingPlangPlong");
    } else if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log("PlingPlang");
    } else if ((x % 3 === 0) && (x % 7 === 0)) {
        console.log("PlingPlong");
    } else if ((x % 5 === 0) && (x % 7 === 0)) {
        console.log("PlangPlong");
    } else if (x % 3 === 0) {
        console.log("Pling");
    } else if (x % 5 === 0) {
        console.log("Plang");
    } else if (x % 7 === 0) {
        console.log("Plong");
    } else {
        console.log(x);
    }
}

raindrops(28);
raindrops(35);
raindrops(26);
raindrops(42);
raindrops(105);
raindrops(17);

const raindrops2 = function(num) {
    const divBy3 = (num % 3 === 0);
    const divBy5 = (num % 5 === 0);
    const divBy7 = (num % 7 === 0);

    let outputString = "";

    if(divBy3) {
        outputString += "Pling";
    };

    if(divBy5) {
        outputString += "Plang";
    };

    if(divBy7) {
        outputString += "Plong";
    };
    
    if(!outputString) {
        return num;
    } else {
        return outputString;
    };
    
};

console.log(raindrops2(28));
console.log(raindrops2(35));
console.log(raindrops2(26));
console.log(raindrops2(42));
console.log(raindrops2(105));
console.log(raindrops2(17));