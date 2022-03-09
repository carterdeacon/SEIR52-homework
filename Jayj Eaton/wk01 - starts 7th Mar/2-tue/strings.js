// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
const drEvil = function(num) {
    let string = num.toString()
    if(string.length <= 6) {
        console.log(`${num} dollars`);
    }
    else {
        console.log(`${num} dollars (pinky)`);
    }    
}
drEvil(4030000);

// ## MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const mixUp = function(str1, str2) {
    // shift unshift??
    let str1First2 = str1.substring(0, 2);
    let str2First2 = str2.substring(0, 2);
    let mod1 = str1.slice(2);
    let mod2 = str2.slice(2);
    console.log(str1First2 + mod2 + " " + str2First2 + mod1);
}
mixUp("digimon", "pokemon");

// ## FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
// not finished come back to this
// const fixStart = function(str) {
//     // first char =
//     let first = str[0];
//     if(str.includes(first)) {
//         let newStr = str.replace(/f/g, "*");
//         let modWord = newStr.slice(1)
//         console.log(first + modWord)
//     } else console.log(str)
// }
// fixStart("frogof")
const fixStart = function (str) {
    let a = str.charAt(0);
    let b = str.substring(1);
    let c = b.replaceAll(`${a}`,`*`);
    console.log(`${a}${c}`);
}

fixStart('sassy');



// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
const verbing = function(str) {
    let ing = "ing";
    let ly = "ly";
    if (str.length > 2 &! str.includes(ing)){
        let newStr = str.concat(ing);
        console.log(newStr);
    } else if (str.length > 2 && str.includes(ing)) {
        let newStr = str.concat(ly);
        console.log(newStr)
    } else {console.log(str)}
}
verbing("sliding");

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
const notBad = function(str) {
    let good = 'good';
    let not = 'not';
    let bad = 'bad';
    if(str.includes(not) && str.includes(bad)) {
        const indexOfNot = str.indexOf(not);
        const indexOfBad = str.indexOf(bad) + 3;
        console.log(`${str.substring(0, indexOfNot)}good${str.substring(indexOfBad)}`);
    }
}
  notBad('This dinner is not that bad!');

//   console.log(str.substring(1, 3));
// // expected output: "oz"

// console.log(str.substring(2));
// expected output: "zilla"


//   const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);






// const notBad = function(str) {
//     let good = 'good';
//     let not = 'not';
//     let bad = 'bad';
//     if(str.includes(not) && str.includes(bad)) {
//         let newstr = str.replace("not", '').replace(' so ', '').replace(' that ', '').replace('bad', 'good')
//         console.log(newstr)
//     }
// }
//   notBad('This dinner is not so bad!');