// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// This function returns the largest number in a given array.
function findMax(arr) {
	let nums = arr.slice();
	if (nums.length == 1) {
		return nums[0];
	}
	if (nums[0] < nums[1]) {
		nums.splice(0, 1);
	} else {
		nums.splice(1, 1);
	}
	return findMax(nums);
}
// i had the exact logic but i was trying to call the function without first making a new array and calling it at the end

function factorial(n) {
	// This function returns the factorial of a given number.
	if (n === 1 || n === 0) {
		return n;
	} else return n * factorial(n - 1);
}

function fibonacci(num) {
	if (num < 2) {
		return num;
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2);
	}

	// This function returns the Nth number in the fibonacci sequence.
	// https://en.wikipedia.org/wiki/Fibonacci_number
	// For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips() {
	// This function returns an array of all possible outcomes from flipping a coin N times.
	// Input type: Integer
	// For example, coinFlips(2) would return the following:
	// ["HH", "HT", "TH", "TT"]
	// H stands for Heads and T stands for tails
	// Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
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
	letterCombinations,
};
