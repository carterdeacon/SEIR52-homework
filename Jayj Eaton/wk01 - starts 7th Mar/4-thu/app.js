// # Geometry Function Lab

// ### Part 1, Rectangle
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
const rectangleA = {
	length: 14,
	width: 14,
};
const isSquare = function (rect) {
	let length = rect.length;
	let width = rect.width;
	if (length === width) {
		return "is a square";
	} else return "not a square";
};
console.log(isSquare(rectangleA));

const area = function (rect) {
	let length = rect.length;
	let width = rect.width;
	let totalArea = width * length;
	return `the area is ${totalArea}`;
};
console.log(area(rectangleA));

const perimeter = function (rect) {
	let length = rect.length;
	let width = rect.width;
	let perimeter = width * 2 + length * 2;
	return `the perimeter is ${perimeter}`;
};
console.log(perimeter(rectangleA));

// ### Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// * area - Returns the area of the Triangle
const triangleA = {
	sideA: 12,
	sideB: 8,
	bottom: 10,
};
// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function (rect) {
	if (rect.sideA === rect.sideB && rect.sideA === rect.bottom) {
		// to get height base x sqrt 3 because 3 sides / 2
		let height = (rect.bottom * 3) / 2;
		let area = (rect.bottom * height) / 2;
		return `triangle is equilateral and area = ${area}`;
	} else return "triangle is not equilateral";
};
console.log(isEquilateral(triangleA));

// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function (rect) {
	if (
		rect.sideA === rect.sideB &&
		rect.sideA !== rect.bottom &&
		rect.sideB !== rect.bottom
	) {
		let size = (rect.sideA + rect.sideB + rect.bottom) / 2;
		const area = Math.floor(
			Math.sqrt(
				size * (size - rect.sideA) * (size - rect.sideB) * (size - rect.bottom)
			)
		);
		return `triangle is isosceles and area = ${area}`;
	} else return "triangle is not isosceles";
};
console.log(isIsosceles(triangleA));

// * isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function (rect) {
	if (
		(rect.sideA !== rect.sideB && rect.sideA !== rect.bottom) ||
		(rect.sideB !== rect.bottom) & (rect.sideB !== rect.sideA)
	) {
		// to get height base x sqrt 3 because 3 sides / 2
		let size = (rect.sideA + rect.sideB + rect.bottom) / 2;
		const area = Math.floor(
			Math.sqrt(
				size * (size - rect.sideA) * (size - rect.sideB) * (size - rect.bottom)
			)
		);
		return `triangle is obtuse and area = ${area}`;
	} else return "triangle is not obtuse";
};
console.log(isObtuse(triangleA));

// # The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
const cartForParty = {
	banana: "1.25",
	handkerchief: ".99",
	Tshirt: "25.01",
	apple: "0.60",
	nalgene: "10.34",
	proteinShake: "22.36",
};
const cashRegister = function (cart) {
	let arrValues = Object.values(cart);
	let float = arrValues.map(parseFloat);
	let sum = 0;

	for (let i = 0; i < arrValues.length; i++) {
		sum += float[i];
	}
	return sum;
};
console.log(cashRegister(cartForParty));

// // # Credit Card Validation
// // You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// // Here are the rules for a valid number:

const validateCreditCard = function (cardnumb) {
	const incorrectCards = [
		"1111111111111111",
		"2222222222222222",
		"3333333333333333",
		"4444444444444444",
		"5555555555555555",
		"6666666666666666",
		"7777777777777777",
		"8888888888888888",
		"9999999999999999",
		"0000000000000000",
	];
	const incorrect = `${cardnumb} is not incorrect`;
	let string = cardnumb.replace(/-/g, "");
	let numbs = parseInt(string);
	let stringsAfter = numbs.toString(); //for checking in int is char
	let lastNumbString = string.slice(15);
	let lastNumb = parseInt(lastNumbString);
	let sum = numbs
		.toString()
		.split("")
		.map(Number)
		.reduce(function (a, b) {
			return a + b;
		}, 0);
	// constructor isnt working dont know why... im tired.. basic card works
	const CardNumber = function (number, bool) {
		this.number = number;
	};
	const cardArray = [];

	if (string.length === 16 && stringsAfter.length === 16) {
		if (lastNumb % 2 === 0) {
			if (sum > 16) {
				for (let i = 0; i < incorrectCards.length; i++) {
					if (string === incorrectCards[i]) {
						//const Card1 = new CardNumber(numbs, false);
						// this makes a new object and adds it to the array
						cardArray.push({
							number: numbs,
							isValid: false,
						});
						return incorrect, cardArray;
					}
				}
				// let Card2 = new CardNumber(numbs, true);
				cardArray.push({
					number: numbs,
					isValid: true,
				});
				return `${cardnumb} is correct`, cardArray;
			} else return incorrect;
		} else return incorrect;
	} else return incorrect;
};
console.log(validateCreditCard("8888-8888-8888-8888"));
console.log(validateCreditCard("8888-8888-8388-8800"));

// console.log(Card1);
// console.table(CardNumber);
// // - Number must be 16 digits, all of them must be numbers-
// // - You must have at least two different digits represented (all of the digits cannot be the same)
// // - The final digit must be even -
// // - The sum of all the digits must be greater than 16 -
// // The following credit card numbers are invalid:
// // ## Example
// // ```
// // validateCreditCard('9999-9999-8888-0000'); // Returns: true
// // ```

// // *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// // *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is

// // *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// // # JavaScript Bank
// // In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.

// // #### Bank

// // There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// // The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// // #### Accounts

// // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// // There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.

// // You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// // ### Tipss

// // Don't overthink this. Shorter code is probably the answer.

// // ## Bonus

// // - Ensure that the accounts cannot have negative values.
// // - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// // ## Additional

// // Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
