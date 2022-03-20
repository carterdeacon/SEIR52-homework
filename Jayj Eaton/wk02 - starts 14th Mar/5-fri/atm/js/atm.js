let checkingTotal = 0;
let savingsTotal = 0;
let checkingInput = 0;
let savingsInput = 0;
let $checkingBalance = $("#checking-balance");
let $savingsBalance = $("#savings-balance");

// --- checking deposit
$("#checking-deposit").click(function () {
	checkingTotal += Number($("#checking-amount").val());
	$checkingBalance.text("$" + checkingTotal);
	toggleClass(checkingTotal, savingsTotal);
});
// --- checking withdraw
$("#checking-withdraw").click(function () {
	checkingInput = Number($("#checking-amount").val());
	// --- if balance is higher then input amount
	if (checkingTotal >= checkingInput) {
		checkingTotal -= checkingInput;
		$checkingBalance.text("$" + checkingTotal);
		toggleClass(checkingTotal, savingsTotal);
	} else if (checkingTotal + savingsTotal >= checkingInput) {
		// --- overdraft ---
		let overdraft = checkingInput - checkingTotal;
		checkingTotal = 0;
		$checkingBalance.text("$" + checkingTotal);
		savingsTotal -= overdraft;
		$savingsBalance.text("$" + savingsTotal);
		console.log("overdraft protection activated");
		toggleClass(checkingTotal, savingsTotal);
	}
});
//--- savings deposit
$("#savings-deposit").click(function () {
	savingsTotal += Number($("#savings-amount").val());
	$savingsBalance.text("$" + savingsTotal);
	toggleClass(checkingTotal, savingsTotal);
});
// --- savings withdraw
$("#savings-withdraw").click(function () {
	savingsInput = Number($("#savings-amount").val());
	if (savingsTotal >= savingsInput) {
		savingsTotal -= savingsInput;
		$savingsBalance.text("$" + savingsTotal);
		toggleClass(checkingTotal, savingsTotal);
	} else if (savingsTotal + checkingTotal >= checkingInput) {
		// --- overdraft ---
		let overdraft = savingsInput - savingsTotal;
		savingsTotal = 0;
		$savingsBalance.text("$" + savingsTotal);
		checkingTotal -= overdraft;
		$checkingBalance.text("$" + checkingTotal);
		console.log("overdraft protection activated");
		toggleClass(checkingTotal, savingsTotal);
	}
}); // --- toggles red background if 0 in accounts ---
const toggleClass = function (checkingTotal, savingsTotal) {
	if (checkingTotal === 0 ? $checkingBalance.addClass("zero") : $checkingBalance.removeClass("zero"));
	if (savingsTotal === 0 ? $savingsBalance.addClass("zero") : $savingsBalance.removeClass("zero"));
};
