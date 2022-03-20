// Data
const bank = {
    checking: { balance: 0, $accountDiv: $('#checking') },
    savings: { balance: 0, $accountDiv: $('#savings') }
};

// Updates display and assigns .zero class based on account balance.
const updateBalance = function(account) {
    const $display = bank[account].$accountDiv.children('.balance');

    $display.text("$" + bank[account].balance); // Updates display with balance.

    // Assigns .zero class if balance is empty
    if (bank[account].balance === 0) { 
        $display.addClass('zero');
    } else {
        $display.removeClass('zero');
    };
};

// Handle account deductions
const accountDeduct = function(account, deduction) {
    bank[account].balance -= deduction;
    updateBalance(account);
};

// Event Listeners -------------------------------------
const setListener = function(account) {
    const $accountDiv = bank[account].$accountDiv;
    const $buttons = $accountDiv.children('input[type="button"]');

    $buttons.on('click', function() {
        const input = Number($accountDiv.children('input[type="text"]').val())

        if ($(this).val() === 'Deposit') {
            bank[account].balance += input;
        } else if (input <= bank[account].balance){
            bank[account].balance -= input;
        } else if (input <= bank.checking.balance + bank.savings.balance) {
            const deduction = input - bank[account].balance;

            if (bank.checking.$accountDiv != $accountDiv) {
                accountDeduct('checking', deduction);
            } else {
                accountDeduct('savings', deduction);
            };
            bank[account].balance = 0;
        };
        
        updateBalance(account);
    });
};

setListener('checking');
setListener('savings');
