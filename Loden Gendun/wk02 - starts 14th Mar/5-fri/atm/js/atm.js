// User input elements.
const $checkInput = $('#checking-amount');
const $saveInput = $('#savings-amount');
// Buttons (Checking)
const $buttonCheckDeposit = $('#checking-deposit');
const $buttonCheckWithdraw = $('#checking-withdraw')
// Buttons (Savings)
const $buttonSaveDeposit = $('#savings-deposit')
const $buttonSaveWithdraw = $('#savings-withdraw');

// Data
const bank = {
    checking: { balance: 0, $displayElement: $('#checking-balance') },
    savings: { balance: 0, $displayElement: $('#savings-balance') }
};

// Updates display and assigns .zero class based on account balance.
const updateBalance = function(account) {
    const $display = bank[account].$displayElement;

    $display.text("$" + bank[account].balance); // Updates display with balance.

    // Assigns .zero class if balance is empty
    if (bank[account].balance === 0) { 
        $display.addClass('zero');
    } else {
        $display.removeClass('zero');
    };
};

// Event Listeners -------------------------------------
// Deposits
$buttonCheckDeposit.on('click', function() {
    bank.checking.balance += Number($checkInput.val());
    updateBalance('checking');
});

$buttonSaveDeposit.on('click', function() {
    bank.savings.balance += Number($saveInput.val());
    updateBalance('savings');
});

// Withdrawals
$buttonCheckWithdraw.on('click', function() {
    const checkInput = Number($checkInput.val());
    const checkBalance = bank.checking.balance;

    if (checkInput <= checkBalance) {
        bank.checking.balance -= checkInput; // !!! Must update global object, not local checkBalance variable.
    } else if (checkInput <= checkBalance + bank.savings.balance) {
        bank.savings.balance -= checkInput - checkBalance;
        bank.checking.balance = 0; // !!! Must update global object, not local checkBalance variable.
        updateBalance('savings');
    };
    updateBalance('checking');
});

$buttonSaveWithdraw.on('click', function() {
    const saveInput = Number($saveInput.val());
    const saveBalance = bank.savings.balance;

    if (saveInput <= saveBalance) {
        bank.savings.balance -= saveInput; // !!! Must update global object, not local saveBalance variable.
    } else if (saveInput <= saveBalance + bank.checking.balance) {
        bank.checking.balance -= saveInput - bank.savings.balance;
        bank.savings.balance = 0; // !!! Must update global object, not local saveBalance variable.
        updateBalance('checking');
    };
    updateBalance('savings');
});
