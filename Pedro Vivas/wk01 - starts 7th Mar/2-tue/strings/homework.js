//Strings

// DrEvil
const drEvil = function(amount) {
    // param: number;
    if (amount === 1000000) {
        return `${amount} dollars (pinky)`;
    } else {
        return `${amount} dollars`;
    }
};
//TEST CASES
console.log(drEvil(1000000)); //1 million
console.log(drEvil(100000)); // not 1 million



//MixUp
const mixUp = function(strA, strB) {
    if(strA.length < 3 || strB.length < 3) {
        return strA + " " + strB;
    };
    let splitAA = strA.slice(0,2);
    let splitAB = strA.slice(2);
    let splitBA = strB.slice(0,2);
    let splitBB = strB.slice(2);
    let ans = splitAA + splitBB + " " + splitBA + splitAB;
    return ans;
};
//TEST CASES
console.log(mixUp("hi", "lo")); // strA.length < 3
console.log(mixUp("ya", "no")); // strB.length < 3
console.log(mixUp("hello", "world")); // rest


// FixStart
const fixStart = function(str) {
    //param: str (len > 1)
    let first = str.slice(0,1);
    let fixStr = first;
    for(let i = 1; i < str.length; i++) {
        if (str[i] === first) {
            fixStr += "*";
        } else {
            fixStr += str[i];
        }
    };
    return fixStr;
}
//TEST CASES
console.log(fixStart("selflessness"));
console.log(fixStart("tattletale"));


// Verbing
const verbing = function(str) {
    if(str.length < 3) {
        return str;
    };
    const end = str.slice(-3);
    if(end === "ing") {
        return str + "ly";
    } else {
        return str + "ing";
    };
};
//TEST CASES
console.log(verbing("hi")); // str.length < 3
console.log(verbing("loving")); // word ending in ing
console.log(verbing("swim")); // rest


//Not Bad
const notBad = function(str) {
    const phraseIndex = str.indexOf(' is');
    const notIndex = str.indexOf('not');
    //const badIndex = str.indexOf('bad');
    if(notIndex === -1) {
        return str;
    } else {
        return str.slice(0, phraseIndex+3) + " good";
    }
};
//TEST CASES
console.log(notBad("This dinner is not that bad!")); //not bad
console.log(notBad("This dinner is bad!")); //bad