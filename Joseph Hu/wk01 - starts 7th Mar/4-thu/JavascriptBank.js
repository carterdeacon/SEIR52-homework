
let arrayAccounts = [{name: 'Joseph', balance: 10000.00}, {name: 'Jolly', balance: 60000.00}]

//takes a key as a name and returns the account balance
const returnMoney = function(key){

    for (i = 0; i < arrayAccounts.length; i++){
        let account = arrayAccounts[i]
        if (account.name == key){
            return account.balance;
        }
    }
    return "You do not have an account at this bank!"
}
//console.log(returnMoney("Jolly"));

const addAccount = function(Name, Balance){

    if (Balance >= 0){
        let newaccount={};
        newaccount.name = Name;
        newaccount.balance = parseFloat(Balance);
        arrayAccounts.push(newaccount);
        return 'You have sucessfully added an account!'
    }
    else{

        return 'you cannot provide a negative balance'
    }
}

const withdrawMoney = function(key, amount){

    for (i = 0; i< arrayAccounts.length; i++){
        let account = arrayAccounts[i];
        if (Balance >= amount){
            if (account.name == key){
                account.balance -= amount;
                return `Success! Your account balance is now $${account.balance}.`
            }
        }
        else{
            return 'you have insufficient balance to withdraw'
        }
    }
}

//console.log(addAccount('John', 5000))
//console.log(addAccount('June', 500))
//console.log(arrayAccounts);
//console.log(withdrawMoney('Jolly', 400))



