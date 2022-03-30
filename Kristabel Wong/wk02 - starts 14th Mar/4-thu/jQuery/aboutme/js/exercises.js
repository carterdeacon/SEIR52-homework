
// change the body tag style to font-family of "Arial, sans-serif".
$('body').css({'font-family': 'Arial, sans-serif'});


// Replace each of the spans (nickname, favorites, hometown) with your own information.

$('#nickname').html('Kris'); // grabbing ID name and then add html text
$('#favorites').html('Climbing');
$('#hometown').html('Sydney');

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

$('li').addClass('listitem');
$('li').css('color','red'); // trying a diff syntax to like 3

//Create a new img element and set its src attribute to a picture of you. Append that element to the page.

$('<img>').attr('src','http://www.fillmurray.com/250/400').prependTo('ul'); // putting this before my information about me. 

// jQuery is cool af
