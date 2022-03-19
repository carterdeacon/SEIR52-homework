let checkingTotal = 0;
let savingsTotal = 0;
let checkingInput = 0;
let savingsInput = 0;
let $checkingBalance = $("#checking-balance");
let $savingsBalance = $("#savings-balance");

// --- checking deposit
$("#checking-deposit").click(function () {
	checkingInput = Number($("#checking-amount").val());
	checkingTotal += checkingInput;
	$checkingBalance.text("$" + checkingTotal);
	if (checkingTotal >= 1) {
		$checkingBalance.removeClass("zero");
	}
	console.log("$checkingBalance.val()");
});
// --- checking withdraw
$("#checking-withdraw").click(function () {
	// --- this line fucked me... it needed to be outside the loop to read the value
	checkingInput = Number($("#checking-amount").val());
	// --- if balance is higher then withdraw amount
	if (checkingTotal >= checkingInput) {
		checkingTotal -= checkingInput;
		$checkingBalance.text("$" + checkingTotal);
		// --- if total is $0 addback red class
		if (checkingTotal === 0) {
			$checkingBalance.addClass("zero");
		} // --- overdraft ---
	} else if (checkingTotal + savingsTotal >= checkingInput) {
		let overdraft = checkingInput - checkingTotal;
		checkingTotal = 0;
		$checkingBalance.text("$" + checkingTotal);
		savingsTotal -= overdraft;
		$savingsBalance.text("$" + savingsTotal);
		console.log("overdraft protection activated");
		if (checkingTotal === 0) {
			$checkingBalance.addClass("zero");
		}
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
		} /// --- overdraft ---
	} else if (checkingTotal + savingsTotal >= checkingInput) {
		let overdraft = savingsInput - savingsTotal;
		savingsTotal = 0;
		$savingsBalance.text("$" + savingsTotal);
		checkingTotal -= overdraft;
		$checkingBalance.text("$" + checkingTotal);
		console.log("overdraft protection activated");
		if (savingsTotal === 0) {
			$savingsBalance.addClass("zero");
		}
	}
});
