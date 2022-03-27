//this code knows nothing of negative balances or overdraft protection.

//it simply connects the DOM elements to logical functions in account.js

//Lots of event handlers and all the DOM  manipulation.
const render = function () {
    // Our handy render() function updates every single part of the DOM with the
    // latest values from our accounts objects.
    $('#checking-balance').text('$' + accounts.checkingBalance);
    $('#savings-balance').text('$' + accounts.savingsBalance);

    $('.zero').removeClass('zero');

    if (accounts.checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    if (accounts.savingsBalance <= 0) {
        $('#savings-balance').addClass('zero');
    }
};

render();

$('#checking-deposit').on('click', function() {
    //get the amount
    const amount = $('#checking-amount').val();
    //call acount.checkingDeposit(amount)
    account.checkingDeposit(amount);
    //update screen
    render();
});

$('#checking-withdraw').on('click', function(){
    const amount = $('#checking-amount').val();
    accounts.checkingWithdraw(amount);
    render();
});

$('#savings-deposit').on('click', function() {
    //get the amount
    const amount = $('#savings-amount').val();
    //call acount.checkingDeposit(amount)
    account.checkingDeposit(amount);
    render();
});

$('#savings-withdraw').on('click', function(){
    const amount = $('#savings-amount').val();
    accounts.savingsWithdraw(amount);
    render();
});
