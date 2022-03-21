// 1 - Keep track of the checking and savings balances somewhere

const checking = [];
const savings = [];

// 2 - Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

// Checking Deposit
$('#checking-deposit').on('click', function () { // Deposit click event listener
    const deposit = Number($('#checking-amount').val()); // Grab deposit value
    checking.push(deposit); // Push deposit into the checking array

    const newChecking = checking.reduce(function(a, b){ // Reduce function to sum checking array
        return a + b;
    }, 0);
    $('#checking-balance').text('$' + newChecking) // Change checking balance to new total
})

// Savings Deposit
$('#savings-deposit').on('click', function () { // Deposit click event listener
    const deposit = Number($('#savings-amount').val()); // Grab deposit value
    savings.push(deposit); // Push deposit into the checking array

    const newSavings = savings.reduce(function(a, b){ // Reduce function to sum checking array
        return a + b;
    }, 0);
    $('#savings-balance').text('$' + newSavings) // Change checking balance to new total
})

// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

// Checking Withdraw
$('#checking-withdraw').on('click', function () { // Deposit click event listener
    const withdraw = Number(-$('#checking-amount').val()); // Grab withdraw value as a negative number
    checking.push(withdraw); // Push withdraw value into the checking array

    const newChecking = checking.reduce(function(a, b){ // Reduce function to sum checking array
        return a + b;
    }, 0);
    $('#checking-balance').text('$' + newChecking) // Change checking balance to new total

    if (newChecking < 0) { // Overdraft test & block
        alert("Cannot withdraw beyond $0.");
        checking.pop(); // Remove last withdraw amount from checking array

        const newChecking = checking.reduce(function(a, b){ // Reduce function to sum checking array
            return a + b;
        }, 0);

        $('#checking-balance').text('$' + newChecking) // Reset checking balance display
    }

})

// Saving Withdraw
$('#savings-withdraw').on('click', function () { // Deposit click event listener
    const withdraw = Number(-$('#savings-amount').val()); // Grab withdraw value as a negative number
    savings.push(withdraw); // Push withdraw value into the savings array

    const newSavings = savings.reduce(function(a, b){ // Reduce function to sum checking array
        return a + b;
    }, 0);
    $('#svaings-balance').text('$' + newSavings) // Change savings balance to new total

    if (newSavings < 0) { // Overdraft test & block
        alert("Cannot withdraw beyond $0.");
        savings.pop(); // Remove last withdraw amount from savings array

        const newSavings = savings.reduce(function(a, b){ // Reduce function to sum checking array
            return a + b;
        }, 0);

        $('#savings-balance').text('$' + newSavings) // Reset savings balance display
    }

})

// TO DOS
// Clear input value after click
// Alert that input must be a number value?
// Shake element when user tries to withdraw

// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.

// When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.

const zeroBalance = function () {
    if ($('#checking-balance').text() === '$0') { // Test for $0 balance
        $('#checking-balance').addClass('zero'); // Change background to red
    }
    else {
        $('#checking-balance').removeClass('zero'); // Can't get this the change back to grey
    }
};
zeroBalance();

if ($('#savings-balance').text() === '$0') { // Test for $0 balance
    $('#savings-balance').addClass('zero'); // Change background to red
};

// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.