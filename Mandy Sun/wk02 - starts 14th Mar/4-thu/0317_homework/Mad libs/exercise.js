
$('#lib-button').click(function () {
    const noun = $("input#noun").val();
    const adjective = $("input#adjective").val();
    const person = $("input#person").val();
    $('body').append($('<p>').html(`${person} really likes ${adjective} ${noun}!`))
});

