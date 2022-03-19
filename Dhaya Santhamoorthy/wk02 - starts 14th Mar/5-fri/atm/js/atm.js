
$('#checking-deposit').on('click', function () {        
    const depositValue = Number($('#checking-amount').val());
    if (depositValue > 0) {
        manageDeposit( '#checking-balance', depositValue );                        // function call passing the id of checking-balance and deposit value to calculate total checking-balance after deposit
    }    
    $('#checking-amount').val("");                                                 // Clearing the input field for checking amount
});

$('#savings-deposit').on('click', function () {    
    const depositValue = Number($('#savings-amount').val());
    if (depositValue > 0) {
        manageDeposit( '#savings-balance', depositValue );                          // function call passing the id of savings-balance and deposit value to calculate total savings-balance after deposit
    }    
    $('#savings-amount').val("");                                                   // Clearing the input field for balance amount
});

const manageDeposit = function ( iDOfAccount, depositValue ) {                     // Helper function to manage deposits
    let currBalance = Number( $(iDOfAccount).text().substring(1) );                // To extract only tne number portion of the balance removing the "$" symbol.
    currBalance += depositValue;
    $(iDOfAccount).text( '$' +  currBalance  );
    setAccountColor( iDOfAccount, currBalance );                                   // function call to set account color                                            
};

$('#checking-withdraw').on('click', function () {    
    const withDrawValue = Number($('#checking-amount').val());
    if (withDrawValue > 0) {
        manageWithdraw('#checking-balance', '#savings-balance', withDrawValue);         // function call passing the withdraw value, checking account as primary account and saving account as secondary account
    }       
    $('#checking-amount').val("");
});

$('#savings-withdraw').on('click', function () {      
    const withDrawValue = Number($('#savings-amount').val());
    if (withDrawValue > 0) {
        manageWithdraw('#savings-balance', '#checking-balance', withDrawValue);          // function call passing the saving account as primary and checking account as secondary and withdraw value
    }
    $('#savings-amount').val("");    
});

const manageWithdraw = function ( iDOfPrimaryAccount, iDOfSecondaryAccount, withDrawValue ) {            // Helper function to manage withdrawals    
    let primaryAccountBalance = Number( $(iDOfPrimaryAccount).text().substring(1) );
    let SecondaryAccountBalance = Number( $(iDOfSecondaryAccount).text().substring(1) );

    if ( primaryAccountBalance >= withDrawValue ) {
        primaryAccountBalance -= withDrawValue;
        $(iDOfPrimaryAccount).text( '$' +  primaryAccountBalance  );
    } else {
        let totalBalance = primaryAccountBalance + SecondaryAccountBalance;
        if ( totalBalance  >= withDrawValue ) {
            totalBalance -= withDrawValue;
            primaryAccountBalance = 0;
            SecondaryAccountBalance = totalBalance;
            $(iDOfPrimaryAccount).text( '$' +  primaryAccountBalance  );
            $(iDOfSecondaryAccount).text( '$' +  SecondaryAccountBalance  );
        }        
    }  

    setAccountColor( iDOfPrimaryAccount, primaryAccountBalance );                        //  function call to set primary account color  
    setAccountColor( iDOfSecondaryAccount, SecondaryAccountBalance );                    // function call to set secondary account color  
};

const setAccountColor =  function ( iDOfAccount, balance ) {                        // Helper function to set the account color
    if ( balance === 0 ) {
        $(iDOfAccount).addClass('zero');
    } else {
        $(iDOfAccount).removeClass('zero');
    }
};