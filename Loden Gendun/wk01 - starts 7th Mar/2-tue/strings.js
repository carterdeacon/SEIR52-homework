// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
const DrEvil = function(amount) {
    let output = `${amount} dollars`;
    // adds '(pinky)'to the string if the amount is 1000000
    if (amount == 1000000) {
        output += '(pinky)';
    };
    return output;
};

// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const mixUp = function(string1, string2) {
    const string1Head = string1.slice(0, 2);
    const string1Tail = string1.slice(2, string1.length);
    const string2Head = string2.slice(0, 2);
    const string2Tail = string2.slice(2, string2.length);
    const newString1 = string2Head + string1Tail;
    const newString2 = string1Head + string2Tail;
    return `${newString1} ${newString2}`;
}

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
const fixStart = function(string) {
    const firstChar = string[0].toLowerCase();
    let censored = string[0];
    for (i = 1; i < string.length; i++) {
        if (string[i].toLowerCase() === firstChar) {
            censored += "*";
        } else {
            censored += string[i];
        }
    }
    return censored;
}

// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
const verbing = function(string) {
    let newString = string;

    if (string.length >= 3) {
        last3Chars = string.slice(string.length - 3, string.length);
        if (last3Chars != "ing") {
            newString += "ing";
        }
    }
    return newString;
}

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
const notBad = function (string) {
    for (x = 0; x < string.length - 2; x++) {
        const notCheck = string[x] + string[x + 1] + string[x + 2];
        if (notCheck === "not") {
            // "not" present
            for (y = x + 3; y < string.length - 2; y++) {
                const badCheck = string[y] + string[y + 1] + string[y + 2];
                if (badCheck === "bad") {
                    // "not bad" present so replace substring
                    console.log("bad found");
                    const before = string.substring(0, x);
                    const after = string.substring(y + 3, string.length);
                    return before + "good" + after;
                }
            }
        }
    }
}