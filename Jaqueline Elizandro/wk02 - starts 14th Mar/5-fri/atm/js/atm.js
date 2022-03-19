
let totalChecking = 0;
let totalSavings = 0;

const updateDisplay = function (totalChecking, totalSavings) {
    $('#checking-balance').text('$' + totalChecking)
    $('#savings-balance').text('$' + totalSavings)
    if (totalChecking === 0) {
        $('#checking div').toggleClass('zero-balance', true);
    } else {
        $('#checking div').toggleClass('zero-balance', false);
    }
    if (totalSavings === 0) {
        $('#savings div').toggleClass('zero-balance', true);
    } else {
        $('#savings div').toggleClass('zero-balance', false);
    }
};

$('#checking-deposit').click(function () {
    totalChecking += + $('#checking-amount').val();
    updateDisplay(totalChecking, totalSavings);
});

$('#savings-deposit').click(function () {
    totalSavings += + $('#savings-amount').val();
    updateDisplay(totalChecking, totalSavings);
});

$('#checking-withdraw').click(function () {
    const value = + $('#checking-amount').val();
    if (value <= totalChecking) {
        totalChecking -= value
    } else if (value <= (totalChecking + totalSavings)) {
        const remainValue = value - totalChecking;
        totalChecking = 0;
        totalSavings -= remainValue;
    };
    updateDisplay(totalChecking, totalSavings);
});

$('#savings-withdraw').click(function () {
    const value = + $('#savings-amount').val();
    if (value <= totalSavings) {
        totalSavings -= value
    } else if (value <= (totalSavings + totalChecking)) {
        const remainValue = value - totalSavings;
        totalSavings = 0;
        totalChecking -= remainValue;
    };
    updateDisplay(totalChecking, totalSavings);
});