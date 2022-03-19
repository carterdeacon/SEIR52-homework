let checkingTotal = 0;
let savingsTotal = 0;
let checkingInput = 0;
let savingsInput = 0;
let $checkingBalance = $("#checking-balance");
let $savingsBalance = $("#savings-balance");

// ---- basic add and subtractions is done just need to add ways to pull from other accounts and set balance to zero in current account
//
// --- checking deposit
$("#checking-deposit").click(function () {
	checkingInput = Number($("#checking-amount").val());
	checkingTotal += checkingInput;
	$checkingBalance.text("$" + checkingTotal);
	if (checkingTotal >= 1) {
		$checkingBalance.removeClass("zero");
	}
	return checkingTotal;
});
// --- checking withdraw
$("#checking-withdraw").click(function () {
	// --- this line fucked me... it needed to be outside the loop to read the value of input before it ran
	checkingInput = Number($("#checking-amount").val());
	// --- if balance is higher then withdraw amount
	if (checkingTotal >= checkingInput) {
		checkingTotal -= checkingInput;
		$checkingBalance.text("$" + checkingTotal);
		// --- if total is $0 addback red class
		if (checkingTotal === 0) {
			$checkingBalance.addClass("zero");
		}
	} else if (checkingTotal + savingsTotal >= checkingInput) {
		let overdraft = checkingInput - checkingTotal;
		checkingTotal = 0;
		$checkingBalance.text("$" + checkingTotal);
		savingsTotal -= overdraft;
		$savingsBalance.text("$" + savingsTotal);
		console.log("overdraft protection activated");
	}
});

//--- savings deposit
$("#savings-deposit").click(function () {
	savingsInput = Number($("#savings-amount").val());
	savingsTotal += savingsInput;
	$savingsBalance.text("$" + savingsTotal);
	if (savingsTotal >= 1) {
		$savingsBalance.removeClass("zero");
	}
});

// --- savings withdraw
$("#savings-withdraw").click(function () {
	savingsInput = Number($("#savings-amount").val());
	//--- if balance is higher then withdraw amount
	if (savingsTotal > -1 + savingsInput) {
		savingsTotal -= savingsInput;
		$savingsBalance.text("$" + savingsTotal);
		if (savingsTotal === 0) {
			$savingsBalance.addClass("zero");
		}
	} else if (checkingTotal + savingsTotal >= checkingInput) {
		let overdraft = savingsInput - savingsTotal;
		savingsTotal = 0;
		$savingsBalance.text("$" + savingsTotal);
		checkingTotal -= overdraft;
		$checkingBalance.text("$" + checkingTotal);
		console.log("overdraft protection activated");
	}
});
if (checkingTotal === 0) {
	$checkingBalance.addClass("zero");
}
if (savingsTotal === 0) {
	$savingsBalance.addClass("zero");
}

// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
