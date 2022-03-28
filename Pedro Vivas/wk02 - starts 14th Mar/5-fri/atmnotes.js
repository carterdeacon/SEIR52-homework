//object containing both accounts with getters/setters f() to avoid
//direct handling of accounts // simulate an 'api'
const account = {
    checking: 0,
    savings: 0,
    withdraw: function(amount, acc) {
        //params: number, str
        //return: list[number, number]
        //condition: check if there is enough money in accounts
        //'else do nothing'
        if (this.checking + this.savings >= amount) {
            //process  check/savings accounts
            if (acc === "checking") {
                this.checking -= amount;
                //if overdraft
                if (this.checking < 0) {
                    //take from other account
                    this.savings += this.checking;
                    //balance of empty account = 0
                    this.checking = 0;
                }
            } else {
                this.savings -= amount;
                if (this.savings < 0) {
                    this.checking += this.savings;
                    this.savings = 0;
                };
            };
        };
        //tuple with accounts updated values
        return [this.checking, this.savings];
    },
    //same params/return as above
    deposit: function(amount, acc) {
        this[acc] += amount;
        return [this.checking, this.savings];
    }
};

$(function() {
    //All accounts start with $0
    $('.balance').addClass('zero');
    //selects all buttons, sets onlick event
    $('input[type=button]').on('click', function() {
        //gets user input using reference to clicked button and turns into float
        let inAmount = parseFloat($(this).siblings('[type=text]').val());
        //clear input/dont run script if input is NaN
         if(isNaN(inAmount)) {
            $('input[type=text]').val('');
            return null;
        ;}
        //finds methods to call on accounts withdraw/deposit
        let transaction = this.value.toLowerCase();
        let accType = $(this).parents()[0].id;
        //updates accounts with desired transaction. gets updated values
        let updateVals = account[transaction](inAmount, accType);
        //applies f() to both display balances. i optional param for each method
        $('.balance').each(function(i) {
            //updates display in accounts
            this.innerHTML = '$' + updateVals[i];
            //resets input after transaction
            $('input[type=text]').val('');
            //toggles color if account is empty or not
            if (this.innerHTML === '$0') {
                $(this).addClass('zero');
            } else {
                $(this).removeClass('zero');
            };
        });
    });
})

