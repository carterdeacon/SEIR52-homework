$('body').css('font-family','Arial, sans-serif');

$('#nickname').html('bill');
$('#favorites').html('gym');
$('#hometown').html('sydney');


$('li').addClass('listItem');
$('.listItem').css('color', 'red');

$('<img>').attr('src','https://placebear.com/300/300').appendTo('body')