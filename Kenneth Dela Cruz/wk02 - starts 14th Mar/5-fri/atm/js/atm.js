
let checkAmount = 0;
let saveAmount = 0;
const strLets = /[a-zA-Z\s]/;
const spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;

//Checks if inputs are numbers

const inputCheckC = function(){
    checkingInput = $('#checking-amount').val();
    if ((strLets.test(checkingInput) || spChars.test(checkingInput)) ){
        alert('Please enter a positive number');
    } else {
        return true;
    }
}
const inputCheckS = function(){
    savingsInput = $('#savings-amount').val();
    if (strLets.test(savingsInput) || spChars.test(savingsInput)){
        alert('Please enter a positive number');
    } else {
        return true;
    }
}

// Calculate deposit amounts into checking and savings account

const depositC = function(){
    if (inputCheckC() === true){
    checkAmount += parseFloat(checkingInput);
    $('#checking-balance').text(`$${checkAmount}`);
    }
}

$('#checking-deposit').on('click', depositC);

const depositS = function(){
    if (inputCheckS() === true){
    saveAmount += parseFloat(savingsInput);
    $('#savings-balance').text(`$${saveAmount}`);
    }
}

$('#savings-deposit').on('click', depositS);

// Calculate withrwal ammounts from checking and savings account + overdraft protection going both ways + alerts for invalid amounts

const withdrawC = function(){
    if (inputCheckC() === true){
        let totalAmount = checkAmount + saveAmount;
        if (checkingInput > totalAmount){
            alert('Insufficient fund. Withdraw an amount within your total balance.')
        } else if (checkingInput <= checkAmount) {
            checkAmount -= parseFloat(checkingInput);
            $('#checking-balance').text(`$${checkAmount}`);
        } else if (checkingInput > checkAmount && checkingInput <= totalAmount){
            saveAmount =  saveAmount - (checkingInput - checkAmount);
            $('#savings-balance').text(`$${saveAmount}`);
            checkAmount = checkAmount - checkAmount;
            $('#checking-balance').text(`$${checkAmount}`);
        }
    }
}

$('#checking-withdraw').on('click', withdrawC);

const withdrawS = function(){
    if (inputCheckS() === true){
        let totalAmount = checkAmount + saveAmount;
        if (savingsInput > totalAmount){
            alert('Insufficient fund. Withdraw an amount within your total balance.')
        } else if (savingsInput <= saveAmount) {
            saveAmount -= parseFloat(savingsInput);
            $('#savings-balance').text(`$${saveAmount}`);
        } else if (savingsInput > saveAmount && savingsInput <= totalAmount){
            checkAmount =  checkAmount - (savingsInput - saveAmount);
            $('#checking-balance').text(`$${checkAmount}`);
            saveAmount = saveAmount - saveAmount;
            $('#savings-balance').text(`$${saveAmount}`);
        }
    }
}

$('#savings-withdraw').on('click', withdrawS);

// Background color changes for when accounts have a balance or not

const balanceBgc = function(){
    if (checkAmount > 0 ) {
        $('#checking').css('background-color', 'gray');
    }
    if (saveAmount > 0 ) {
        $('#savings').css('background-color', 'gray');
    }
    if (checkAmount === 0){
        $('#checking').css('background-color', 'red');
    } 
    if (saveAmount === 0){
        $('#savings').css('background-color', 'red');
    }
}

$('body').ready(function(){
    $('.account').css('background-color', 'red')
});

$('input[type="button"]').on('click', balanceBgc)
