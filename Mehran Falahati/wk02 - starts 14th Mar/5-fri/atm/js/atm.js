


// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.

// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

// let $checkBal = Number($('#checking-balance').text().substring(1));

// let $checkAmount = Number($('#checking-amount').val());

$('#checking-deposit').on('click', function(){
    let $checkBal = Number($('#checking-balance').text().slice(1));
    let $checkAmount = Number($('#checking-amount').val()); // we also can use + instead of Number
    let totalCheck = $checkBal + $checkAmount
    if ($checkAmount > 0){
        $('#checking-balance').text('$' + totalCheck) // if we do not add $ sign again it will remove the first charector
    }
    //console.log(totalCheck)
    checkForZero();
})

$('#checking-withdraw').on('click', function(){
    let $checkBal = Number($('#checking-balance').text().substring(1));
    let $checkAmount = Number($('#checking-amount').val()); // only input has value
    let totalCheck = $checkBal - $checkAmount
    if (totalCheck >= 0 && $checkAmount > 0){
        $('#checking-balance').text('$' + totalCheck)
    
    }
    checkForZero();
})


$('#savings-deposit').on('click', function(){
    let $savingBal = Number($('#savings-balance').text().slice(1));
    let $savingAmount = + $('#savings-amount').val(); // + do the sam eas Number
    let totalSaving = $savingBal + $savingAmount
    if ($savingAmount > 0) {
        $('#savings-balance').text('$' + totalSaving);
    }
    checkForZero();
})


$('#savings-withdraw').on('click', function(){
    let $savingBal = Number($('#savings-balance').text().slice(1));
    let $savingAmount = Number($('#savings-amount').val());
    let totalSaving = $savingBal - $savingAmount
    if ($savingAmount > 0 && totalSaving >= 0) {
        $('#savings-balance').text('$' + totalSaving);
    }
    checkForZero();
})

// $('#checking-balance').ready(function(){
//     let $zero = Number($('#checking-balance').text().substring(1))
//     if ($zero === 0 ) {
//         $('#checking-balance').addClass('zero')
//     } else {
//         $('#checking-balance').removeClass('zero')
//     }
// })


const checkForZero = function() {
    $('.zero').removeClass('zero');

    const checkingBalance = $('#checking-balance').text().slice(1);
    if (checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    const savingsBalance = $('#savings-balance').text().slice(1);
    if (savingsBalance <= 0) {
        $('#savings-balance').addClass('zero');
    }
    
}

checkForZero(); //we need to call it first to start with red 
