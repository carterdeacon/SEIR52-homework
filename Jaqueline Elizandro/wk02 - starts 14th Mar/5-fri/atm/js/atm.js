
// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.

let totalChecking = 0;

const depositChecking = function () {
    const value = + $('#checking-amount').val();
    totalChecking += value
    $('#checking-balance').text('$' + totalChecking)
}

$('#checking-deposit').click(depositChecking)

const withdrawChecking = function () {
    const value = + $('#checking-amount').val();
    totalChecking -= value
    $('#checking-balance').text('$' + totalChecking)
}

$('#checking-withdraw').click(withdrawChecking)

let totalSavings = 0;

const depositSavings = function () {
    const value = + $('#savings-amount').val();
    totalSavings += value
    $('#savings-balance').text('$' + totalSavings)
}

$('#savings-deposit').click(depositSavings)

const withdrawSavings = function () {
    const value = + $('#savings-amount').val();
    totalSavings -= value
    $('#savings-balance').text('$' + totalSavings)
}

$('#savings-withdraw').click(withdrawSavings)
