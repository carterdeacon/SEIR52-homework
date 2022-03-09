// # Array and Functions Bonus Material
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (numb1, numb2) {
	if (numb1 > numb2) {
		return numb1;
	} else return numb2;
};
console.log(maxOfTwoNumbers(6, 9));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (numb1, numb2, numb3) {
	if (numb3 > numb2) {
		return numb3;
	} else if (numb2 > numb1) {
		return numb2;
	} else return numb1;
};
console.log(maxOfThree(23, 34, 40));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const takesChar = function (char) {
	if ((char === "a", "e", "i", "o", "u")) {
		return `${char} is vowel`;
	} else return "try again not a vowel";
};
console.log(takesChar("e"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function (arr) {
	var sum = 1;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
};
console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = function (arr) {
	var sum = 1;
	for (var i = 0; i < arr.length; i++) {
		sum = sum * arr[i];
	}
	return sum;
};
console.log(multiplyArray([1, 2, 3, 4]));

// ## Bonus
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function (str) {
	let split = str.split("");
	let reversed = split.reverse();
	return reversed.join("");
};
console.log(reverseString("plane dog"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (arr) {
	let word = "";
	for (let i = 0; i < arr.length; i++) {
		if (word.length < arr[i].length) {
			word = arr[i];
		}
	}
	return word;
};
console.log(findLongestWord(["frog", "cat", "snake", "crocodile"]));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (arr, numb) {
	let words = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > numb) {
			words.push(arr[i]);
		}
	}

	return words;
};
console.log(filterLongWords(["frog", "cat", "dog", "sheep", "camel"], 4));
