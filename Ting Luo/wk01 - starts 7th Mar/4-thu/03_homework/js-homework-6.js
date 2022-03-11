// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

 // Bank
 // There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

 // The bank has many accounts. Accounts should be objects that all share a set of common functionality.

 let bankAccount = [];
const addAccount = function(object) {
    for (i = 0; i < bankAccount.length; i++){
        if (bankAccount.name === object.name){
            bankAccount.push(object);
            return true;
        }else{
            console.log('Your account exist.')
        }
    }
}

 const sumBalance = function (object) {
    let balance = 0;
    for (i = 0; i < object.length; i++){
        balance += object[i].balance;
    }
    return balance;
 }



 // Accounts
 // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

 // There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

 // You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

 const depositFromAccount = function (amount, client) {
    for (i = 0; i < bankAccount.length; i++){
        clientBalance = bankAccount[i].balance; 
        if (bankAccount[i].name === client) {
            clientBalance += amount;
        }
    }
    console.log(`${amount}$ has deposited in ${client}'s account`);  
    console.log(`You account balance is ${clientBalance} now.`)
 }


 const withdrawFromAccount = function (amount, client) {
    for (i = 0; i < bankAccount.length; i++){
        clientBalance = bankAccount[i].balance; 
        if (bankAccount[i].name === client) {
            clientBalance -= amount; 
        }
    }
    console.log(`${amount}$ has withdrawn from ${client}'s account`); 
    console.log(`You account balance is ${clientBalance} now.`)
 } 



