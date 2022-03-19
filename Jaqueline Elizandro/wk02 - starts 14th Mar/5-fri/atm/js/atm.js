
let totalChecking = 0; // store the current value of the checking account
let totalSavings = 0; // store the current value of the savings account

const updateDisplay = function (totalChecking, totalSavings) { // change the balance value and colour on display
    $('#checking-balance').text('$' + totalChecking)
    $('#savings-balance').text('$' + totalSavings)
    if (totalChecking === 0) {
        $('#checking div').toggleClass('zero', true);
    } else {
        $('#checking div').toggleClass('zero', false);
    }
    if (totalSavings === 0) {
        $('#savings div').toggleClass('zero', true);
    } else {
        $('#savings div').toggleClass('zero', false);
    }
};

$('#checking-deposit').click(function () { // update the balance value at checkings deposit
    totalChecking += + $('#checking-amount').val();
    updateDisplay(totalChecking, totalSavings);
});

$('#savings-deposit').click(function () { // update the balance value at savings deposit
    totalSavings += + $('#savings-amount').val();
    updateDisplay(totalChecking, totalSavings);
});

$('#checking-withdraw').click(function () { // update the balance value at checkings withdraw
    const value = + $('#checking-amount').val();
    if (value <= totalChecking) {
        totalChecking -= value
    } else if (value <= (totalChecking + totalSavings)) {
        totalSavings -= (value - totalChecking);
        totalChecking = 0;
    };
    updateDisplay(totalChecking, totalSavings);
});

$('#savings-withdraw').click(function () { // update the balance value at savings withdraw
    const value = + $('#savings-amount').val();
    if (value <= totalSavings) {
        totalSavings -= value
    } else if (value <= (totalSavings + totalChecking)) {
        totalChecking -= (value - totalSavings);
        totalSavings = 0;
    };
    updateDisplay(totalChecking, totalSavings);
});