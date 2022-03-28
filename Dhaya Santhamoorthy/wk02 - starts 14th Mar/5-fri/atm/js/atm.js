
$('html').click(function (event) {    
    let target = event.target;

    if ( target.id === 'checking-deposit' ) {
        const depositValue = Number($('#checking-amount').val());
        if (depositValue > 0) {
            manageDeposit( '#checking-balance', depositValue );                        // function call passing the id of checking-balance and deposit value to calculate total checking-balance after deposit
        }    
        $('#checking-amount').val("");                                                 // Clearing the input field for checking amount
    }    

    if ( target.id === 'savings-deposit' ) {         
            const depositValue = Number($('#savings-amount').val());
            if (depositValue > 0) {
                manageDeposit( '#savings-balance', depositValue );                          // function call passing the id of savings-balance and deposit value to calculate total savings-balance after deposit
            }    
            $('#savings-amount').val("");                                                   // Clearing the input field for balance amount
    }

    if ( target.id === 'checking-withdraw' ) {          
            const withDrawValue = Number($('#checking-amount').val());
            if (withDrawValue > 0) {
                manageWithdraw('#checking-balance', '#savings-balance', withDrawValue);         // function call passing the withdraw value, checking account as primary account and saving account as secondary account
            }       
            $('#checking-amount').val("");       
    }

    if ( target.id === 'savings-withdraw' ) {              
            const withDrawValue = Number($('#savings-amount').val());
            if (withDrawValue > 0) {
                manageWithdraw('#savings-balance', '#checking-balance', withDrawValue);          // function call passing the saving account as primary and checking account as secondary and withdraw value
            }
            $('#savings-amount').val("");            
    }
});

const manageDeposit = function ( iDOfAccount, depositValue ) {                     // Helper function to manage deposits
    let currBalance = Number( $(iDOfAccount).text().substring(1) );                // To extract only tne number portion of the balance removing the "$" symbol.
    currBalance = depositValue + currBalance;
    $(iDOfAccount).text( '$' +  currBalance  );
    setAccountColor( iDOfAccount, currBalance );                                   // function call to set account color                                            
};

const manageWithdraw = function ( iDOfPrimaryAccount, iDOfSecondaryAccount, withDrawValue ) {            // Helper function to manage withdrawals    
    let primaryAccountBalance = Number( $(iDOfPrimaryAccount).text().substring(1) );
    let SecondaryAccountBalance = Number( $(iDOfSecondaryAccount).text().substring(1) );

    if ( primaryAccountBalance >= withDrawValue ) {
        primaryAccountBalance = primaryAccountBalance - withDrawValue;
        $(iDOfPrimaryAccount).text( '$' +  primaryAccountBalance  );
    } else {
        let totalBalance = primaryAccountBalance + SecondaryAccountBalance;
        if ( totalBalance  >= withDrawValue ) {
            totalBalance = totalBalance - withDrawValue;
            primaryAccountBalance = 0;
            SecondaryAccountBalance = totalBalance;
            $(iDOfPrimaryAccount).text( '$' +  primaryAccountBalance  );
            $(iDOfSecondaryAccount).text( '$' +  SecondaryAccountBalance  );
        }        
    }  

    setAccountColor( iDOfPrimaryAccount, primaryAccountBalance );                        //  function call to set primary account color  
    setAccountColor( iDOfSecondaryAccount, SecondaryAccountBalance );                    // function call to set secondary account color  
};

const setAccountColor =  function ( iDOfAccount, balance ) {                        // Helper function to set the class for the account
    if ( balance === 0 ) {
        $(iDOfAccount).addClass('zero');
    } else {
        $(iDOfAccount).removeClass('zero');
    }
};