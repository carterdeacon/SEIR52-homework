// * Keep track of the checking and savings balances somewhere

// Checking

$('<img src="https://i.giphy.com/media/hrQnFqUKTXwSSvH8AI/giphy.webp" class="moneys">').appendTo('#content');
$('.moneys').css({'width': '700px', 'margin-top' : '-250px','visibility' :'hidden'})



let total = 0; // not sure why checkingTotal + savingTotal doesn't work.. 
let checkingTotal = 0; // consider DRY? maybe code later

$('#checking-deposit').on('click', function () {
    let num = $('#checking-amount').val(); // getting the value
    if (isNaN(num) || num < 0) { // protects the balance if user enters letters or characters that are not a number or if user enters negative amount
        num = 0; // balance will show unaffected
    } else {  
        checkingTotal += Number(num);  // making it a number and adding to total
        total += Number(num);
        $('#checking-balance').removeClass('zero'); // removes background if previously amount > balance
        $('#checking-balance').text('$' + checkingTotal); // displays balance
    }
});

$('#checking-withdraw').on('click', function () {
    let num = $('#checking-amount').val();
    if (isNaN(num) || num < 0) { // protects the balance if user enters letters or characters that are not a number
        num = 0;
    } else if (num - checkingTotal === 0) { // (num === checkingTotal will still show $0 with grey background)
        $('#checking-balance').addClass('zero');
        checkingTotal = 0;
    } else if (num - savingTotal === 0 && checkingTotal === 0) {
        $('#checking-balance').addClass('zero'); // adds red background - insufficient funds
        $('#savings-balance').addClass('zero'); // adds red background - insufficient funds
        savingTotal = 0;
    } else if (checkingTotal === 0 && num > savingTotal) {
        $('#checking-balance').addClass('zero');
    } else if (num <= total && num > checkingTotal & checkingTotal >=0) {  // overdraft function
        let remainder = Number(num) - checkingTotal;
        checkingTotal = 0;
        savingTotal -= remainder;
        total -= remainder;
    } else {
        checkingTotal -= Number(num);
        total -= Number(num);
    }
    
    $('#checking-balance').text('$' + checkingTotal);  // displays balance
    $('#savings-balance').text('$' + savingTotal); // displays balance for overdraft function
    return checkingTotal;
})


// saving

let savingTotal = 0;

$('#savings-deposit').on('click', function () {
    let num = $('#savings-amount').val(); // getting the value
    if (isNaN(num) || num < 0) { // protects the balance if user enters letters or characters that are not a number
        num = 0; // balance will show unaffected
    } else {
        savingTotal += Number(num);  // making it a number and adding to total
        total += Number(num);
        $('#savings-balance').removeClass('zero'); // removes background if previously amount > balance
        $('#savings-balance').text('$' + savingTotal);
        return savingTotal;
    }
})

$('#savings-withdraw').on('click', function () {
    let num = $('#savings-amount').val();
    if (isNaN(num) || num < 0) { 
        num = 0;
    } else if (num - savingTotal === 0) {
        $('#savings-balance').addClass('zero');
        savingTotal = 0;
    } else if (savingTotal === 0 && num - checkingTotal === 0) {
        $('#savings-balance').addClass('zero'); // adds red background - insufficient funds
        $('#checking-balance').addClass('zero'); // adds red background - insufficient funds
        checkingTotal = 0;
    } else if (savingTotal === 0 && num > checkingTotal) {
        $('#savings-balance').addClass('zero'); // if 
    } else if (num <= total && num > savingTotal && savingTotal >= 0) { // overdraft function
        let remainder = Number(num) - savingTotal;
        savingTotal = 0;
        checkingTotal -= remainder;
        total -= remainder;
    } else {
        savingTotal -= Number(num);
        total -= Number(num);
    }
    
    $('#savings-balance').text('$' + savingTotal); // displays balance
    $('#checking-balance').text('$' + checkingTotal); // displays balance for overdraft function
    return savingTotal;
})





