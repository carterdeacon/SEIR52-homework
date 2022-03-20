
let checkingBalance = 0; // store the current value of the checking account
let savingsBalance = 0; // store the current value of the savings account

const updateDisplay = function (checkingBalance, savingsBalance) { // change the balance value and colour on display
    $('#checking-balance').text('$' + checkingBalance)
    $('#savings-balance').text('$' + savingsBalance)
    if (checkingBalance === 0) {
        $('#checking div').toggleClass('zero', true);
    } else {
        $('#checking div').toggleClass('zero', false);
    }
    if (savingsBalance === 0) {
        $('#savings div').toggleClass('zero', true);
    } else {
        $('#savings div').toggleClass('zero', false);
    }
};

$('#checking-deposit').click(function () { // update the balance value at checkings deposit
    checkingBalance += + $('#checking-amount').val();
    updateDisplay(checkingBalance, savingsBalance);
});

$('#savings-deposit').click(function () { // update the balance value at savings deposit
    savingsBalance += + $('#savings-amount').val();
    updateDisplay(checkingBalance, savingsBalance);
});

$('#checking-withdraw').click(function () { // update the balance value at checkings withdraw
    const amountWithdrawChecking = + $('#checking-amount').val();
    if (amountWithdrawChecking <= checkingBalance) {
        checkingBalance -= amountWithdrawChecking
    } else if (amountWithdrawChecking <= (checkingBalance + savingsBalance)) {
        savingsBalance -= (amountWithdrawChecking - checkingBalance);
        checkingBalance = 0;
    };
    updateDisplay(checkingBalance, savingsBalance);
});

$('#savings-withdraw').click(function () { // update the balance value at savings withdraw
    const amountWithdrawSavings = + $('#savings-amount').val();
    if (amountWithdrawSavings <= savingsBalance) {
        savingsBalance -= amountWithdrawSavings
    } else if (amountWithdrawSavings <= (savingsBalance + checkingBalance)) {
        checkingBalance -= (amountWithdrawSavings - savingsBalance);
        savingsBalance = 0;
    };
    updateDisplay(checkingBalance, savingsBalance);
});