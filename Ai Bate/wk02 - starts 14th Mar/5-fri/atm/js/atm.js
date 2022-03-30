console.log("I am here")

///////////////saving account/////////////////////////////////////
var combinedAmount = parseInt($('#savings-balance').text().slice(1)) + parseInt($('#checking-balance').text().slice(1));   


const deposit = function(){  
    let inputInSaving =Number($('#savings-amount').val())  
    const $balance = parseInt($('#savings-balance').text().slice(1))

    let newBalance = inputInSaving + $balance
    $("#savings-balance").text(`$${newBalance}`)
    if(newBalance > 0){
        $("#savings-balance").removeClass('zero');
    }
}
$('#savings-deposit').on('click',deposit);

const withdraw = function(){  
    let inputInSaving =Number($('#savings-amount').val())  
    const $balance = parseInt($('#savings-balance').text().slice(1))
    let newBalance = - inputInSaving + $balance
    if( inputInSaving<=$balance ){
        if( newBalance< 0){
            return;
        }
        if(newBalance === 0){
            $("#savings-balance").addClass('zero');
            $("#savings-balance").text(`$${newBalance}`)    
        }
        if(newBalance > 0){
            $("#savings-balance").text(`$${newBalance}`)
        } 
    }
}
$('#savings-withdraw').on('click',withdraw);

///////////////Checking account/////////////////////////////////////
const depositCheckAcc = function(){  
    let inputInChecking =Number($('#checking-amount').val())  
    const $balance = parseInt($('#checking-balance').text().slice(1))
    let newBalance = inputInChecking + $balance
    $("#checking-balance").text(`$${newBalance}`)
    if(newBalance > 0){
        $("#checking-balance").removeClass('zero');
    }
}
$('#checking-deposit').on('click',depositCheckAcc);

const withdrawCheckAcc = function(){  
    let inputInChecking =Number($('#checking-amount').val())  
    const $balance = parseInt($('#checking-balance').text().slice(1))
    let newBalance = -inputInChecking + $balance
    if( inputInChecking <= $balance ) {
        if( newBalance< 0){
            return;
        }
        if(newBalance === 0){
            $("#checking-balance").addClass('zero');
            $("#checking-balance").text(`$${newBalance}`)   
        }
        if(newBalance > 0){
            $("#checking-balance").text(`$${newBalance}`)
        }    
    }
    
}
$('#checking-withdraw').on('click',withdrawCheckAcc);

///////////////////////////////////////////////////////
////store amount combined checking and saving , but i need to store in global scope to use in both of function..

// var combinedAmount = parseInt($('#savings-balance').text().slice(1)) + parseInt($('#checking-balance').text().slice(1));   

/// if amount combined is more than user input

//// let withdraw the money from account selected first
//// then let withdraw remaining amount from other account.



