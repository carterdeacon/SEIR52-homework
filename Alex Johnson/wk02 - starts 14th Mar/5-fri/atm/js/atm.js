console.log('atm is running... ');
const accounts = {
    checkingBal: 0,
    savingsBal: 0
}; 
if (Number($('#checking-balance').val()) === 0) {                                         //check acct is $0
    $('#checking-balance').addClass('zero');
} else {
    $('#checking-balance').removeClass('zero');
}
if (Number($('#savings-balance').val()) === 0 ) {                                         //savings acct is $0
    $('#savings-balance').addClass('zero');
}
const dToCheck = function() {
    console.log(`running deposit to check`);
    let amount = Number($('#checking-amount').val());
    accounts.checkingBal = accounts.checkingBal + amount;
    $('#checking-balance').html(`$${ accounts.checkingBal }`).removeClass('zero');        
}
const dToSavings = function() {
    console.log(`running deposit to savings`);
    let amount = Number($('#savings-amount').val());
    accounts.savingsBal = accounts.savingsBal + amount;
    $('#savings-balance').html(`$${ accounts.savingsBal }`).removeClass('zero');        
}

const wFromCheck = function() {
    console.log(`running withdraw from check`);
    let amount = Number($('#checking-amount').val());
    if (accounts.checkingBal <= 0 || amount > accounts.checkingBal) {
        return
        // console.log('calling overdraft protection...');        //TO DO... uncomment 
        // odProtect(amount, check);
    }
    accounts.checkingBal = accounts.checkingBal - amount;
    if (accounts.checkingBal === 0) {
        $('#checking-balance').addClass('zero');
    } 
    $('#checking-balance').html(`$${ accounts.checkingBal }`);                              
}

const wFromSavings = function() {
    console.log(`running withdraw from savings`);
    let amount = Number($('#savings-amount').val());
    if (accounts.savingsBal <= 0 || amount > accounts.savingsBal) {
        return
        //  console.log('calling overdraft protection...');        //TO DO... uncomment
        //  odProtect(amount, save);
    }
    accounts.savingsBal = accounts.savingsBal - amount;
    if (accounts.savingsBal === 0) {
        $('#savings-balance').addClass('zero');
    } 
    $('#savings-balance').html(`$${ accounts.savingsBal }`);                              
}

const odProtect = function (withdrawalAmount, type) {
    //refactor - first attempt not working for all scenarios. simpler with type? TO DO 
    const acct = type;
    let chkBal = accounts.checkingBal;
    let savBal = accounts.savingsBal;

if ((chkBal + savBal) > withdrawalAmount) {

    if (chkBal > savBal) {        
        console.log ('not enough in savings')
        let savRemainder;                                  //not enough cash in savings   
        savRemainder = withdrawalAmount - chkBal;
        accounts.savingsBal = savBal - savRemainder; 
    }
    if (savBal > chkBal) {                                 //not enough cash in checking
        console.log ('not enough in checking')
        let chkRemainder;
        chkRemainder = withdrawalAmount - savBal; 
        accounts.checkingBal = chkBal - chkRemainder; 
        console.log(accounts.checkingBal);
    }
    //also if chkbal  = savbal
} else {
    return;
}

console.log (`checking both accounts...chk : ${chkBal}  sav: ${savBal}`); 

}

$('#checking-deposit').on('click', dToCheck); 
$('#checking-withdraw').on('click', wFromCheck);
$('#savings-deposit').on('click',dToSavings);
$('#savings-withdraw').on('click', wFromSavings);