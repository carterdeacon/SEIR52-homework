let checking = 0;
let savings = 0;

//button click function for all the buttons
$('#checking-deposit, #checking-withdraw, #savings-deposit, #savings-withdraw').on('click', function(event){
    let approved = false
    let amountCheck = parseFloat($('#checking-amount').val()).toFixed(2)
    let amountSav = parseFloat($('#savings-amount').val()).toFixed(2)
    //IF INPUT IS VALID
    if((!isNaN(amountCheck) && amountCheck>0) || (!isNaN(amountSav) && amountSav>0)){
        //IF I AM USING MY CHECKING ACCOUNT
        if(this.id == 'checking-deposit'|| this.id=="checking-withdraw"){
            //IF I AM MAKIING A DEPOSIT FROM CHECKING
            if (this.id == 'checking-deposit'){
                $('#checking-balance').html(`$${(checking+=parseFloat(amountCheck)).toFixed(2)}`)
                approved = true;
            }
            //IF I AM MAKING A WITHDRAWL FROM CHECKING ACCOUNT
            else{
                //checks if the withdrawl amount is greater than account balance 
                if(checking+savings >= amountCheck){
                    //checks for overdraft and then adjusts balance accordingly
                    if(amountCheck > checking){
                        let overdraft = amountCheck - checking;
                        checking = 0;
                        savings -= overdraft;
                        $('#checking-balance').html(`$${(checking).toFixed(2)}`)
                        $('#savings-balance').html(`$${(savings).toFixed(2)}`)
                        approved = true
                    }
                    //Deducts amount from checking balance
                    else{
                        $('#checking-balance').html(`$${(checking-=parseFloat(amountCheck)).toFixed(2)}`)
                        approved=true
                    }
                }
            }
        }
        //IF I AM USING MY SAVINGS ACCOUNT
        else{
            //IF I'M MAKING A SAVINGS DEPOSIT
            if (this.id == 'savings-deposit'){
                $('#savings-balance').html(`$${(savings+=parseFloat(amountSav)).toFixed(2)}`)
                approved=true
            }
            //IF I'M MAKING A SAVINGS WITHDRAWL
            else{
                //Checks for overdraft protection
                if(checking+savings >= amountSav){
                    //if overdraft, adjusts overdraft accordingly
                    if(amountSav > savings){
                        let overdraft = amountSav - savings;
                        savings = 0;
                        checking -= overdraft;
                        $('#checking-balance').html(`$${(checking).toFixed(2)}`)
                        $('#savings-balance').html(`$${(savings).toFixed(2)}`)
                        approved=true
                    }
                    // deducts amount from total savings balance
                    else{
                        //decreases checking account value by amount
                        $('#savings-balance').html(`$${(savings-=parseFloat(amountSav)).toFixed(2)}`)
                        approved=true
                    }
                }
            }
        }
    }
    //if my input was accepted, flash the input box green
    if (approved){
        //flashes input box green to notify valid input
        let inputBox = $(this).prevAll('input[type="text"]').attr('id')
        $(`#${inputBox}`).toggleClass('valid');
        setTimeout(function(){$(`#${inputBox}`).removeClass('valid')},1000)
    }
    //if my input was rejected flash my input box red
    else{
        let inputBox = $(this).prevAll('input[type="text"]').attr('id')
        $(`#${inputBox}`).toggleClass('invalid');
        setTimeout(function(){$(`#${inputBox}`).removeClass('invalid')},1000)
    }
    //clears input box 
    $('#checking-amount').val('')
    $('#savings-amount').val('')

    //checks if my balance is 0 and if so make the div red, else make it grey
    if(checking == 0){
        $('#checking-balance').toggleClass('invalid');
    }
    else{
        $('#checking-balance').removeClass('invalid');
    }
    if(savings == 0){
        $('#savings-balance').addClass('invalid');
    }
    else{
        $('#savings-balance').removeClass('invalid');
    }
});



