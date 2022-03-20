const account = {
    checking: 0,
    savings: 0,
    withdraw: function(amount, acc) {
        if (this.checking + this.savings >= amount) {
            if (acc === "checking") {
                this.checking -= amount;
                if (this.checking < 0) {
                    this.savings += this.checking;
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
        return [this.checking, this.savings];
    },
    deposit: function(amount, acc) {
        this[acc] += amount;
        return [this.checking, this.savings];
    }
};

$(function() {
    $('input[type=button]').on('click', function() {
        let inAmount = parseFloat($(this).siblings('[type=text]').val());
        if(isNaN(inAmount)) {
            $('input[type=text]').val('');
            return null;
        }
        let transaction = this.value.toLowerCase();
        let accType = $(this).parents()[0].id;
        let updateVals = account[transaction](inAmount, accType);
        $('.balance').each(function(i) {
            this.innerHTML = '$' + updateVals[i];
            $('input[type=text]').val('');
            if (this.innerHTML === '$0') {
                this.style.backgroundColor = 'red';
            } else {
                this.style.backgroundColor = '#E3E3E3';
            };
        });
    });
})

