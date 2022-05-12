console.log('howdy lets go!! yeeee haaawww')

/////////////////////////////////////////////////////////////////////////////checking ///////////////


const redToggle = function (){
    const $redBack = Number($('#checking-balance').text().slice(1)) ; {
        $('#checking-balance').css({'background-color': 'red'});
    
    } 
    
};

const redSavingsToggle = function (){
    const $redBack = Number($('#savings-balance').text().slice(1)) ;  {
        $('#savings-balance').css({'background-color': 'red'});
    
    } 
    
};

  
const fakeToggle = function (){
    const $goBack = Number($('#checking-balance').text().slice(1)) ;{
        $('#checking-balance').css({'background-color': '#E3E3E3'});   
    } 
    
};

const fakeSavingsToggle = function (){
    const $goBack = Number($('#savings-balance').text().slice(1)) ;{
        $('#savings-balance').css({'background-color': '#E3E3E3'});   
    } 
    
};

const checkingDeposit = function (){
    const balance = Number($('#checking-balance').text().slice(1));
    const value = Number($('#checking-amount').val());
    const currentBalance = balance + value;
    $('#checking-balance').text('$' + currentBalance);
    fakeToggle();
};

const $depositButton = $('#checking-deposit')
    $depositButton.on('click', checkingDeposit);


    const checkingWithdraw = function (){
        const balance = Number($('#checking-balance').text().slice(1));
        const value = Number($('#checking-amount').val());
        const currentBalance = balance - value;
        if (currentBalance <= 0){
         
            overDraw();
        } else {

        $('#checking-balance').text('$' + currentBalance);
        }
        
    };

  

const $withdrawButton = $('#checking-withdraw')
    $withdrawButton.on('click', checkingWithdraw);


/////////////////////////////////////////////////////////////////////////////savings ///////////////
    const savingsDeposit = function (){
        const balance = Number($('#savings-balance').text().slice(1));
        const value = Number($('#savings-amount').val());
        const currentBalance = balance + value;
        $('#savings-balance').text('$' + currentBalance);
        fakeSavingsToggle();
    };

    const $SavingsDepositButton = $('#savings-deposit')
        $SavingsDepositButton.on('click', savingsDeposit);
     
    
    const savingsWithdraw = function (){
        const balance = Number($('#savings-balance').text().slice(1));
        const value = Number($('#savings-amount').val());
        const currentBalance = balance - value;

        if (currentBalance <= 0){
            savingsOverDraw();
   
        } else {
            console.log('savings withraw working');
            $('#savings-balance').text('$' + currentBalance);
        }
        
    };

    const $SavingsWithdrawButton = $('#savings-withdraw')
        $SavingsWithdrawButton.on('click', savingsWithdraw);   

/////////////////////////////////////////////////////////////////////////////overDraw functions ///////////////

const overDraw = function (){
    const checkingBalance = Number($('#checking-balance').text().slice(1));
    const savingsBalance = Number($('#savings-balance').text().slice(1));
    const combinedBalance =  checkingBalance + savingsBalance;
    const value = Number($('#checking-amount').val()) ;
    const currentBalance = combinedBalance - value;
        if (currentBalance >= 0) {
            let decideCheckingAccount = checkingBalance - value;
            let newWithdrawAmmount = (decideCheckingAccount + savingsBalance);
            let subtractAmount = (newWithdrawAmmount - savingsBalance);
            let next = (subtractAmount + savingsBalance)
            redToggle();
            
            $('#savings-balance').text('$' + next);
            $('#checking-balance').text('$0');
    }  
};

    const savingsOverDraw = function (){
            const checkingBalance = Number($('#checking-balance').text().slice(1));
            const savingsBalance = Number($('#savings-balance').text().slice(1));
            const combinedBalance =  checkingBalance + savingsBalance;
            const value =  Number($('#savings-amount').val()) ;
            const currentBalance = combinedBalance - value;
            if (currentBalance >= 0) {
                let decideSavingsAccount = savingsBalance - value;
                let newWithdrawAmmount = (decideSavingsAccount + checkingBalance);      
                let subtractAmount = (newWithdrawAmmount - checkingBalance);
                let next = (subtractAmount + checkingBalance)
                redSavingsToggle();
                $('#checking-balance').text('$' + next);
                $('#savings-balance').text('$0');
    }
};
   
//////JOEL'S SOLUTION//////////
// make a banking library in new file
///just make your own library! with methods. 
///bussiness logic- that's the background rules NOT what user see's
///single source of truth for balance in the accounts.
///will know about overfraft
///THIS code has nothing to do with DOM


/////////////acount.js (seperate j.s file)/////////////////////////
const accounts = {
    checkingBalance: 0,
    savingsBalance: 0,

    total: function (){
        return this.checkingBalance + this.savingsBalance
   } ,
   checkingDeposit: function (amount){
       amount = Number(amount);
       this.checkingBalance += amount;
   },

   checkingWithdraw: function (){
       if (thiamount <= this.checkingBalance)
       this.checkingBalance -= checkingWithdraw
   },

   savingsDeposit: function (amount){
    amount = Number(amount);
    this.savingsBalance += amount;
},
    savingsWithdraw: function (){
    if (amount <= this.savingsBalance)
    this.savingsBalance -= amount;
},
};

///////////atm.js - knows nothing of negative or overdraft. connects bussiness logic to DOM ///

//on click function----> get the AMOUNT from DOM. (jquery library)

//update USER screen----> onclick'button. RUN RENDER FUNCTION. Update every new change.

///** render function has all the shit that needs to change on screen. render called at start of paage and in the other objects. basically, it is correct and gets called to refresh the page

///////////final thoughts from eliza//////
///seperate the js rules. then user screen is DOM. talk to each other. 