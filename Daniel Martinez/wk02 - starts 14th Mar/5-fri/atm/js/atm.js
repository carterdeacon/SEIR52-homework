

// const checkingAcc = function(){
//     const result = '12';
    
//   console.log(result);
    

//     $('#checking-balance').text(result);
    
// }
// $('#checking-deposit').on('click', checkingAcc());


// $(document).ready(function(){
//     // call this function on click of savings deposit
//       $("#savings-deposit").click(function(){
//         // store result of the amount inputted
//          var result = $("#savings-amount").val();
//         // change savings balance to the result of above
//         $('#savings-balance').text(result);
//       });
//     // call on savings-withdraw
//       $("#savings-withdraw").click(function(){
//         // store savings balance in value variable
//          var value = $("#savings-balance").text();
//         // store current savings amount 
//         var currentSavings = $("#savings-amount").val();
//         // result is value + savings amount
//         // parseInt() to change string to number
//          var result = parseInt(value) - parseInt(currentSavings);
//         // assign the savings balance to the value of result
//         $('#savings-balance').text(result);
//       });
//   });
  
//   $(document).ready(function(){
//     // call this function on click of savings deposit
//       $("#checking-deposit").click(function(){
//         // store result of the amount inputted
//          var result = $("#checking-amount").val();
//         // change savings balance to the result of above
//         $('#checking-balance').text(result);
//       });
//     // call on savings-withdraw
//       $("#checking-withdraw").click(function(){
//         // store savings balance in value variable
//          var value = $("#checking-balance").text();
//         // store current savings amount 
//         var currentSavings = $("#checking-amount").val();
//         // result is value + savings amount
//         // parseInt() to change string to number
//          var result = parseInt(value) - parseInt(currentSavings);
//         // assign the savings balance to the value of result
//         $('#checking-balance').text(result);
//       });
//   });
//     const checkForZero = function(){
//         $('.zero').removeClass('zero');

//         const checkingBalance = $('#checking-balance').text().slice(1);
//         if (checkingBalance <= 0){
//             $('#checking-balance').addClass('.zero');
//         }
//         const savingsBalance = $('#savings-balance').text().slice(1);
//         if('#savings-balance'){
//             $('#savings-balance').addClass('.zero');
//         }
    
//     };

    
   
//   $('#checking-deposit').on('click', function(){
//     const currentBalance = + $('#checking-balance').text().slice(1); // slice removes the dollar sign.
//     const depositAmount = + $('#cheking-amount').val();

//     const newBalance =currentBalance + depositAmount;
//     $('#checking-balance').text('$' + newBalance);
//   });

//   $('#checking-withdraw').on('click', function(){
//     const currentBalance = + $('#checking-balance').text().slice(1); // slice removes the dollar sign.
//     const otherBalance = + $('#savings-balance').text().slice(1);
//     const withdrawAmount = + $('#cheking-amount').val();
//     const totalBalance = currentBalance + otherBalance;

//     const newBalance =currentBalance - withdrawAmount;
//     if (newBalance >= 0){
//     $('#checking-balance').text('$' + newBalance);
//     } else if (withdrawAmount <= totalBalance){
//         $('#checking-balance').text('$0');
//         $('#savings-balance').text('$' + (otherBalance +newBalance));
//     }
//     checkForZero();
//   });





//   $('#savings-deposit').on('click', function(){
//     const currentBalance = + $('#savings-balance').text().slice(1); // slice removes the dollar sign.
//     const depositAmount = + $('#savings-amount').val();

//     const newBalance =currentBalance + depositAmount;
//     $('#savings-balance').text('$' + newBalance);
//   });


  
//   $('#savings-withdraw').on('click', function(){
//     const currentBalance = + $('#savings-balance').text().slice(1); // slice removes the dollar sign.
//     const otherBalance = + $('#checkings-balance').text().slice(1);
//     const withdrawAmount = + $('#savings-amount').val();
//     const totalBalance = currentBalance + otherBalance;

//     const newBalance =currentBalance - withdrawAmount;
//     if (newBalance >= 0){
//     $('#savings-balance').text('$' + newBalance);
//     } else if (withdrawAmount <= totalBalance){
//         $('#savings-balance').text('$0');
//         $('#checkings-balance').text('$' + (otherBalance +newBalance));
//     }
//     checkForZero();
//   });


const render = function(){
    $('#checking-balance').text('$' + accounts.checkingBalance);
    $('#saving-balance').text('$' + accounts.savingsBalance);

    $('.zero').removeClass('zero');

    if(accounts.checkingBalance <= 0){
        $('#cheking-balance').addClass('zero');
    } if (accounts.savingsBalance <= 0){
        $('#savings-balance').addClass('zero');
    }
}

$('#checking-deposit').on('click', function(){
    const amount = $('#checking-amount').val();
    accounts.checkDeposit(amount);
    $('#chekcing-balance').text('$' + accounts.checkingBalance);
    render();
});

$('#checking-withdraw').on('click', function(){
    const amount = $('#checking-amount').val();
    accounts.checkingWithdraw(amount);
    $('checking-balance').text('$' + accounts.checkingBalance);
    render();
});
  
$('#savings-deposit').on('click', function(){
    const amount = $('#savings-amount').val();
    accounts.savingsDeposit(amount);
    $('#savings-balance').text('$' + accounts.savingsBalance);
    render();
});
$('#savings-withdraw').on('click', function(){
    const amount = $('#savings-amount').val();
    accounts.savingsWithdraw(amount);
    $('savings-balance').text('$' + accounts.savingsBalance);
    render();
});