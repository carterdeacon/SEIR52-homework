
let totalChecking = 0;

$('#checking-deposit').click(function () {
    const value = + $('#checking-amount').val();
    totalChecking += value
    $('#checking-balance').text('$' + totalChecking)
    $('#checking div').toggleClass('zero-balance', false)
});

$('#checking-withdraw').click(function () {
    const value = + $('#checking-amount').val();
    if (value < totalChecking) {
        totalChecking -= value
        $('#checking-balance').text('$' + totalChecking)
    } else if (value === totalChecking) {
        totalChecking -= value
        $('#checking-balance').text('$' + totalChecking)
        $('#checking div').toggleClass('zero-balance', true)
    } else if (value < (totalChecking + totalSavings)) {
        const remainValue = value - totalChecking;
        totalChecking = 0;
        totalSavings -= remainValue;
        $('#checking-balance').text('$' + totalChecking)
        $('#savings-balance').text('$' + totalSavings)
        $('#checking div').toggleClass('zero-balance', true)
    } else if (value === (totalChecking + totalSavings)) {
        const remainValue = value - totalChecking;
        totalChecking = 0;
        totalSavings -= remainValue;
        $('#checking-balance').text('$' + totalChecking)
        $('#savings-balance').text('$' + totalSavings)
        $('#checking div').toggleClass('zero-balance', true)
        $('#savings div').toggleClass('zero-balance', true)
    };
});

//

let totalSavings = 0;

$('#savings-deposit').click(function () {
    const value = + $('#savings-amount').val();
    totalSavings += value
    $('#savings-balance').text('$' + totalSavings)
    $('#savings div').toggleClass('zero-balance', false)
});

$('#savings-withdraw').click(function () {
    const value = + $('#savings-amount').val();
    if (value < totalSavings) {
        totalSavings -= value
        $('#savings-balance').text('$' + totalSavings)
    } else if (value === totalSavings) {
        totalSavings -= value
        $('#savings-balance').text('$' + totalSavings)
        $('#savings div').toggleClass('zero-balance', true)
    } else if (value < (totalSavings + totalChecking)) {
        const remainValue = value - totalSavings;
        totalSavings = 0;
        totalChecking -= remainValue;
        $('#checking-balance').text('$' + totalChecking)
        $('#savings-balance').text('$' + totalSavings)
        $('#savings div').toggleClass('zero-balance', true)
    } else if (value === (totalSavings + totalChecking)) {
        const remainValue = value - totalSavings;
        totalSavings = 0;
        totalChecking -= remainValue;
        $('#checking-balance').text('$' + totalChecking)
        $('#savings-balance').text('$' + totalSavings)
        $('#savings div').toggleClass('zero-balance', true)
        $('#checking div').toggleClass('zero-balance', true)
    };
});
