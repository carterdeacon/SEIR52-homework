const convertToNum = function(obj) {
    return parseInt((obj.text()).replace('$', ""));
};

const inputNum = function(obj) {
    return parseInt(obj.val());
};


$('#checking-deposit , #savings-deposit').on('click', function(){
    const newBalance = convertToNum ($(this).parent().children('.balance')) + inputNum ($(this).parent().children('input[type = text]'));
    $(this).parent().children('.balance').text(`$${newBalance}`);
    if (newBalance !== 0) {
        $(this).parent().children('.balance').removeClass('zero');
    }
})

console.log($('#checking-withdraw').parent().children('.balance').val())
;
$('#checking-withdraw, #savings-withdraw').on ('click', function () {
    let balanceObj = $(this).parent().children('.balance');
    let siblingObj = $(this).parent().siblings('.account').children('.balance');
    let currentBalance = convertToNum(balanceObj);
    let siblingBalance = convertToNum(siblingObj);
    let withdrawAmount = inputNum($(this).parent().children('input[type ="text"]'));
    let totalBalance = currentBalance + siblingBalance;
    let newBalance = currentBalance - Math.min(currentBalance, withdrawAmount);
    let siblingNewBalance = siblingBalance + Math.min(0, (currentBalance - withdrawAmount));

    if (withdrawAmount > totalBalance) {
        return 
    }

    balanceObj.text(newBalance);
    siblingObj.text(siblingNewBalance);

    if (newBalance === 0) {
        balanceObj.addClass('zero');
    }

    if (siblingNewBalance === 0) {
        siblingObj.addClass('zero');
    }
    
});


///////////////////////////////////////////////////////////////////////////////////////////////

//First Version: 

// let currentCheckingBalance =convertToNum($('#checking-balance'));
// let currentSavingsBalance = convertToNum($('#savings-balance'));
// const totalBalance = currentCheckingBalance + currentSavingsBalance;

// $('#checking-withdraw').on('click', function(){
//     let currentCheckingBalance =convertToNum($('#checking-balance'));
//     let currentSavingsBalance = convertToNum($('#savings-balance'));
//     const totalBalance = currentCheckingBalance + currentSavingsBalance;
//     // input value from checking account
//     let withdrawFromChecking = inputNum($('#checking-amount'));
 
//      // if withdraw from checking account
//     let newCheckingBalance = currentCheckingBalance - Math.min(currentCheckingBalance, withdrawFromChecking);

//     // withdraw amount is more than checking account amount.
//     let newSavingBalance = currentSavingsBalance + Math.min(0, (currentCheckingBalance - withdrawFromChecking));
    
//     if (withdrawFromChecking > totalBalance) {
//         return
//     }else{
//         $('#checking-balance').text(newCheckingBalance);
//         $('#savings-balance').text(newSavingBalance);
//         if (newCheckingBalance === 0) {
//             $('#checking-balance').addClass('zero');
//         }
//         if (newSavingBalance === 0) {
//             $('#savings-balance').addClass('zero');
//         }
//     };
// });


// $('#savings-withdraw').on('click', function(){
//     let currentCheckingBalance =convertToNum($('#checking-balance'));

//     let currentSavingsBalance = convertToNum($('#savings-balance'));

//     const totalBalance = currentCheckingBalance + currentSavingsBalance;

//     let withdrawFromSaving = inputNum($('#savings-amount'));
//     // input value from savings account
//     let newCheckingBalance = currentCheckingBalance + Math.min(0, (currentSavingsBalance - withdrawFromSaving));
//     let newSavingBalance = currentSavingsBalance - Math.min(currentSavingsBalance, withdrawFromSaving);
    
//     if (withdrawFromSaving > totalBalance) {
//         return
//     }else{
//         $('#checking-balance').text(newCheckingBalance);
//         $('#savings-balance').text(newSavingBalance);
//         if (newCheckingBalance === 0) {
//             $('#checking-balance').addClass('zero');
//         }
//         if (newSavingBalance === 0) {
//             $('#savings-balance').addClass('zero');
//         }
//     };
// });

