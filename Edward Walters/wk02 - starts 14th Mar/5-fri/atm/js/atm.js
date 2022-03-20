// Object to store the data and methods relating to a single bank account
const createBankAC = function (startBalance, accountName) {
    const bankAC = {
        
        balance: startBalance,
        
        name: accountName,

        deposit: function(depositAmtStr) {
            if (validateInput(depositAmtStr)) {
                this.balance += validateInput(depositAmtStr);
            }
        },
        
        withdraw: function(withdrawalAmtStr) {
            if (validateInput(withdrawalAmtStr)) {
                this.balance -= validateInput(withdrawalAmtStr)
           }
        },

        getBalance: function() {
            return this.balance;
        },

        getName: function() {
            return this.name;
        }
    };

    return bankAC;  
};


// updates bg color of #checking-balance / #savings-balance
const updateBGColor = function(account) {
    if (account.getBalance() > 0) {
        $(`#${account.getName()}-balance`).removeClass('zero');
    } else {
        $(`#${account.getName()}-balance`).addClass('zero');
    };
};
// clears input values from #checking-amount and/or #savings-amount
// accepts mainAccount parameter and optional secAccount
const removeFormValues = function (mainAccount, secAccount) {
    $(`#${mainAccount.getName()}-amount`).val('');
    if (secAccount) {
        $(`#${secAccount.getName()}-amount`).val('');  
    }
};

// updates the relevant html elements to match the current Object state
const render = function(account) {
    $(`#${account.getName()}-balance`).text('$' + account.getBalance());
    removeFormValues(account);
    updateBGColor(account);
};

// validates user input (str), returns false if invalid, otherwise converts input to integer and returns this.
const validateInput = function(inputStr) {
    if (!inputStr) {
        return false;  //empty
    };
    for (let char of inputStr) {
        if (isNaN(char)){
            return false;   // illegal characters (non numeric)
        };
    };
    return parseInt(inputStr);
}

// handles deposit request to either account (depending on Object passed in - Checking or Savings)
const handleDeposit = function(account) {
    const amt = $(`#${account.getName()}-amount`).val();
    account.deposit(amt);
    render(account);
};

// handles withdrawal requests. Requires both account Objects as parameters. mainAccount is the account that the user is requesting a withdrawal from, secAccount is the alternate account.
const handleWithdrawal = function(mainAccount, secAccount) {
      const withdrawalStr = $(`#${mainAccount.getName()}-amount`).val();
      
      if (!validateInput(withdrawalStr)) {
        removeFormValues(mainAccount);
        return;
    
      } else {
        withdrawalNum = validateInput(withdrawalStr);

        // if withdrawal balance is available in the account user is requesting from
        if (withdrawalNum <= mainAccount.getBalance()) {
            mainAccount.withdraw(withdrawalStr);
            render(mainAccount);

         // if withdrawal balance is available across both accounts
      } else if (withdrawalNum <= (mainAccount.getBalance() + secAccount.getBalance())) {
            const prevMainAccountBalance = mainAccount.getBalance();
            mainAccount.withdraw(String(mainAccount.getBalance()));
            secAccount.withdraw(String(withdrawalNum - prevMainAccountBalance));
            render(mainAccount);
            render(secAccount);
        
        // if funds are insufficient
      } else {
            removeFormValues(mainAccount, secAccount);
            return;
        }
      }  
};

//initializes accounts
const checking = createBankAC(100, 'checking');
const savings = createBankAC(0, 'savings');
render(checking);
render(savings);
   
// sets click event handlers
$('#checking-deposit').on('click', () => handleDeposit(checking));

$('#savings-deposit').on('click', () => handleDeposit(savings));

$('#checking-withdraw').on('click', () => handleWithdrawal(checking, savings));

$('#savings-withdraw').on('click', () => handleWithdrawal(savings, checking));
