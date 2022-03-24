console.log("hello")
// checking deposit
$('#checking-deposit').on("click", function () {
    const exCheckingBalance = Number($('#checking-balance').html().substring(1));
    const newActionAmount = Number($('#checking-amount').val());
    $('#checking-balance').html(`$${exCheckingBalance + newActionAmount}`);
    $('audio')[0].play();
    // table added
    const $newTr = $('<tr >').appendTo('table');
    $('<td id="historyList">').html("Checking").appendTo($newTr);
    $('<td id="historyList">').html("Deposit").appendTo($newTr);
    $('<td id="historyList">').html(`$ ${newActionAmount}`).appendTo($newTr);
    $('<td id="historyList">').html(`$ ${exCheckingBalance + newActionAmount}`).appendTo($newTr);

});
// checking withdraw
$('#checking-withdraw').on("click", function () {
    const exCheckingBalance = Number($('#checking-balance').html().substring(1));
    const newActionAmount = Number($('#checking-amount').val());
    const exSavingBalance = Number($('#savings-balance').html().substring(1));
    if (newActionAmount <= exCheckingBalance) {
        $('#checking-balance').html(`$${exCheckingBalance - newActionAmount}`);
        $('.money').toggleClass('moneyfly');
        $('audio')[1].play();
        // table added 
        const $newTr = $('<tr >').appendTo('table');
        $('<td id="historyList">').html("Checking").appendTo($newTr);
        $('<td id="historyList">').html("Withdraw").appendTo($newTr);
        $('<td id="historyList">').html(`$ ${newActionAmount}`).appendTo($newTr);
        $('<td id="historyList">').html(`$ ${exCheckingBalance - newActionAmount}`).appendTo($newTr);
    }
    if (newActionAmount > exCheckingBalance && newActionAmount <= (exSavingBalance + exCheckingBalance)) {
        $('#checking-balance').html('$0');
        $('#savings-balance').html(`$${exSavingBalance + exCheckingBalance - newActionAmount}`);

        // table added 
        const $newTr = $('<tr >').appendTo('table');
        $('<td id="historyList">').html("Checking").appendTo($newTr);
        $('<td id="historyList">').html("Withdraw").appendTo($newTr);
        $('<td id="historyList">').html(`$ ${newActionAmount}`).appendTo($newTr);
        $('<td id="historyList">').html(`$ 0`).appendTo($newTr);
        const $newTr2 = $('<tr >').appendTo('table');
        $('<td id="historyList">').html("Saving").appendTo($newTr2);
        $('<td id="historyList">').html("Withdraw").appendTo($newTr2);
        $('<td id="historyList">').html(`$ ${newActionAmount - exCheckingBalance}`).appendTo($newTr2);
        $('<td id="historyList">').html(`$ ${exSavingBalance + exCheckingBalance - newActionAmount}`).appendTo($newTr2);
        $('audio')[1].play();
    }
    if (newActionAmount > (exSavingBalance + exCheckingBalance)) {
        $('audio')[2].play();
        alert("The withdrawal amount is more than the combined account balance");

    }

});

$('#savings-deposit').on("click", function () {
    const exSavingBalance = Number($('#savings-balance').html().substring(1));
    const newActionAmount = Number($('#savings-amount').val());
    $('#savings-balance').html(`$${exSavingBalance + newActionAmount}`);
    $('audio')[0].play();

    // table added
    const $newTr = $('<tr>').appendTo('table');
    $('<td id="historyList">').html("Saving").appendTo($newTr);
    $('<td id="historyList">').html("Deposit").appendTo($newTr);
    $('<td id="historyList">').html(`$ ${newActionAmount}`).appendTo($newTr);
    $('<td id="historyList">').html(`$ ${exSavingBalance + newActionAmount}`).appendTo($newTr);

});

$('#savings-withdraw').on("click", function () {
    const exCheckingBalance = Number($('#checking-balance').html().substring(1));
    const newActionAmount = Number($('#savings-amount').val());
    const exSavingBalance = Number($('#savings-balance').html().substring(1));
    if (newActionAmount <= exSavingBalance) {
        $('#savings-balance').html(`$${exSavingBalance - newActionAmount}`);
        $('audio')[1].play();
        // table added
        const $newTr = $('<tr>').appendTo('table');
        $('<td id="historyList">').html("Saving").appendTo($newTr);
        $('<td id="historyList">').html("Withdraw").appendTo($newTr);
        $('<td id="historyList">').html(`$ ${newActionAmount}`).appendTo($newTr);
        $('<td id="historyList">').html(`$ ${exSavingBalance - newActionAmount}`).appendTo($newTr);

    }
    if (newActionAmount > exSavingBalance && newActionAmount <= (exSavingBalance + exCheckingBalance)) {
        $('#savings-balance').html('$0');
        $('#checking-balance').html(`$${exSavingBalance + exCheckingBalance - newActionAmount}`);

        // table added 
        const $newTr = $('<tr >').appendTo('table');
        $('<td id="historyList">').html("Saving").appendTo($newTr);
        $('<td id="historyList">').html("Withdraw").appendTo($newTr);
        $('<td id="historyList">').html(`$ ${newActionAmount}`).appendTo($newTr);
        $('<td id="historyList">').html(`$ 0`).appendTo($newTr);
        const $newTr2 = $('<tr >').appendTo('table');
        $('<td id="historyList">').html("Saving").appendTo($newTr2);
        $('<td id="historyList">').html("Withdraw").appendTo($newTr2);
        $('<td id="historyList">').html(`$ ${newActionAmount - exSavingBalance}`).appendTo($newTr2);
        $('<td id="historyList">').html(`$ ${exSavingBalance + exCheckingBalance - newActionAmount}`).appendTo($newTr2);
        $('audio')[1].play();
    }
    if (newActionAmount > (exSavingBalance + exCheckingBalance)) {
        $('audio')[2].play();
        alert("The withdrawal amount is more than the combined account balance")

    }

});




