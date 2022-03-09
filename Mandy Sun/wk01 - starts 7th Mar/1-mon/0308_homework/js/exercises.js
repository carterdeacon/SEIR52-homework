// # Part 1
// # The Calculator
// - Write a function called squareNumber
const squareNumber = function (num) {
    const fin = num ** 2;
    console.log(`The result of squaring the number ${num} is ${fin}.`);
    return fin
};
squareNumber(3);

// - Write a function called halfNumber
const halfNumber = function (num) {
    const fin = num / 2;
    console.log(`The result of half of the number ${num} is ${fin}.`);
    return fin
};
halfNumber(5);

// - Write a function called percentOf
const percentOf = function (num1, num2) {
    const percent = 100 * num1 / num2;
    console.log(`${num1} is ${percent}% of ${num2}.`);
};
percentOf(2, 4);

// - Write a function called areaOfCircle
const areaOfCircle = function (radius) {
    const area = Math.PI * radius ** 2;
    console.log(`The area for a circle with radius ${radius} is ${area}.`);
    return area
};
areaOfCircle(2);

// - Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle_bonus = function (radius) {
    const area = Math.PI * radius ** 2;
    const areaFinal = area.toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${areaFinal}.`)
};
areaOfCircle_bonus(2);

// ## Part 2
const combinedFunc = function (num) {
    const result1 = halfNumber(num);
    const result2 = squareNumber(result1);
    const result3 = areaOfCircle(result2);
    const result4 = percentOf(result3, result2);

};
combinedFunc(5);

// ## DrEvil
const DrEvil = function (num) {
    if (num === 1000000) {
        console.log(`${num} dollars (pinky)`)
    } else {
        console.log(`${num} dollars`)
    }
};

DrEvil(10);
DrEvil(1000000);

// ## Mixup
const mixUp = function (word1, word2) {
    const first2_1 = word1.substring(0, 2);
    const rest_1 = word1.substring(2);
    const first2_2 = word2.substring(0, 2);
    const rest_2 = word2.substring(2);
    console.log(`${first2_2}${rest_1} ${first2_1}${rest_2}`);
}

mixUp("mandy", "vinnie");

// ## FixStart
const FixStart = function (word) {
    const replaceWord = word.replaceAll(word[0], "*");
    const final = word[0] + replaceWord.substring(1);
    return console.log(final);
}
FixStart("bubble");

// ## Verbing
const verbing = function (word) {
    if (word.length >= 3 && word.substring(word.length - 3) == "ing") {
        final = word + "ly";
    } else if (word.length >= 3 && word.substring(word.length - 3) !== "ing") {
        final = word + "ing";
    } else if (word.length < 3) {
        final = word;
    }
    console.log(final);
}

verbing("swim");
verbing("swimming");
verbing("go");

// ## Notbad
const notBad = function (str) {
    const not = str.includes("not");
    const bad = str.includes("bad");
    if (not === true && bad === true) {
        if (str.search(/not/) < str.search(/bad/)) {
            const notBadReplace = str.substring(str.search(/not/), str.search(/bad/) + 3);
            final = str.replace(`${notBadReplace}`, "good")
        } else {
            final = str;
        }
    } else {
        final = str;
    }
    console.log(final);
}
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');


// ## Raindrops
// const raindrops = function (num) {
//     if (num % 3 == 0 && num % 5 !== 0 & num % 7 !== 0) {
//         final = "Pling"
//     } else if (num % 5 == 0 && num % 3 !== 0 & num % 7 !== 0) {
//         final = "Plang"
//     } else if (num % 7 == 0 && num % 5 !== 0 & num % 3 !== 0) {
//         final = "Plong"
//     } else if (num % 3 == 0 && num % 5 == 0 && num % 7 !== 0) {
//         final = "PlingPlang"
//     } else if (num % 5 == 0 && num % 7 == 0 && num % 3 !== 0) {
//         final = "PlangPlong"
//     } else if (num % 3 == 0 && num % 7 == 0 && num % 5 !== 0) {
//         final = "PlingPlong"
//     } else if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
//         final = "PlingPlangPlong"
//     } else {
//         final = num
//     }
//     console.log(final)
// }

const raindrops = function (num) {
    const array = [[3, 'Pling'], [5, 'Plang'], [7, 'Plong']];
    let final = " ";
    for (let i = 0; i < array.length; i++) {
        if (num % array[i][0] === 0) {
            final = final.concat(array[i][1]);
        }
    }
    console.log(final)
};



raindrops(28);
raindrops(35);
raindrops(26);
raindrops(105);