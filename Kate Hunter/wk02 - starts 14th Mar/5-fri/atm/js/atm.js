const checking = function {
    $(.balance)
}


//
//Number function to change string to number
//Number()

//.val() = get value

const checkingDeposit = function (){
    const balance = Number($('#checking-balance').text().slice(1));
    const value = Number($('#checking-amount').val());
    const currentBalance = balance + value;
    $('#checking-balance').text('$' + currentBalance);
};

const $depositButton = $('#checking-deposit')
    $depositButton.on('click', checkingDeposit);