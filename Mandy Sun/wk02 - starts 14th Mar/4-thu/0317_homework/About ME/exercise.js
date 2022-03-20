
$('body').css('font-family', 'Arial, sans-serif');
$('#nickname').html("Mandy Sun");
$('#favorites').html("Movies");
$('#hometown').html("Wuhan China");

$('li').addClass('listitem');
$('li').css('color', 'red');

const $newImg = $('<img>').attr('src', 'https://images.unsplash.com/photo-1543759616-e821c8e4720b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=8http0').append();
$('body').append($newImg);
