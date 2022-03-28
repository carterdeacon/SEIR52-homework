// //deposit money into checkings
$('#checking-deposit').on('click', function() {
    const checkDepo = $('#checking-amount').val();
    $('#checking-amount') = checkDepo;
});

$('#checkingAddMoney').on('click', addMoney);
$('#savingsAddMoney').on('click', addMoney);

$('#withdrawCheckings').on('click', subtractMoney);
$('#withdrawSavings').on('click', subtractMoney);

function addMoney() {
    const prevBalance = $('#checking-balance');
    const result = prevBalance.text();

    const currentBalance = parseInt(result.replace('$', ""));

    const newEntry = parseInt($('#checking-balance'('input.moneyInBank'.valueOf())));

    $(prevBalance).text(function (){
        const total = newEntry + currentBalance;
        return "$" + total;
    });

    $('#checking-balance'("input.moneyInBank").val(""));
    $('#checking-balance'("div.balance").css("background-color", "#E3E3E3"))
}