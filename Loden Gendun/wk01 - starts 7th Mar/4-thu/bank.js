console.log("Javascript Bank script functional");


// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance. 

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 

// #### Accounts

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working. 

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance. 



const oneBank = [];

const sumBalances = function () {
    let sum = 0;
    for (let i = 0; i < oneBank.length; i++) {
        sum += oneBank[i].balance;
    }
    return sum;
}

const addAccount = function (owner, deposit) {
    oneBank.push({holder: owner, balance: deposit});
}
// *Note to self: you can DRY these methods
const deposit = function (owner, amount) {
    //iterate through bank array and check provided owner against each elements holder property to "id" the deposit.
    for (let i = 0; i < oneBank.length; i++) {
        if (owner.localeCompare(oneBank[i].holder) === 0) {
            oneBank[i].balance += amount;
            console.log("deposit successful");
        };
    };
    console.log("no account found...");
};

const withdraw = function (owner, amount) {
    //iterate through bank array and check provided owner against each elements holder property to "id" the deposit.
    for (let i = 0; i < oneBank.length; i++) {
        if (owner.localeCompare(oneBank[i].holder) === 0) {
            oneBank[i].balance -= amount;
            console.log("withdraw successful");
        };
    };
};

// ## Bonus

// - Ensure that the accounts cannot have negative values. 
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 

// ## Additional
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them. 