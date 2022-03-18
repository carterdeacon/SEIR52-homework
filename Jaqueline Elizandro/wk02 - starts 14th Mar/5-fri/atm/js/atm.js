
// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.

let totalChecking = 0;

const depositChecking = function () {
    const value = + $('#checking-amount').val();
    totalChecking += value
    $('#checking-balance').text('$' + totalChecking)
}

$('#checking-deposit').click(depositChecking)

const withdrawChecking = function () {
    const value = + $('#checking-amount').val();
    if (value <= totalChecking) {
        totalChecking -= value
        $('#checking-balance').text('$' + totalChecking)
    } else if (value <= (totalChecking + totalSavings)) {
        const remainValue = value - totalChecking;
        totalChecking = 0;
        totalSavings -= remainValue;
        $('#checking-balance').text('$' + totalChecking)
        $('#savings-balance').text('$' + totalSavings)
    }
};

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
    if (value <= totalSavings) {
        totalSavings -= value
        $('#savings-balance').text('$' + totalSavings)
    } else if (value <= (totalSavings + totalChecking)) {
        const remainValue = value - totalSavings;
        totalSavings = 0;
        totalChecking -= remainValue;
        $('#checking-balance').text('$' + totalChecking)
        $('#savings-balance').text('$' + totalSavings)
    }
};

$('#savings-withdraw').click(withdrawSavings)
