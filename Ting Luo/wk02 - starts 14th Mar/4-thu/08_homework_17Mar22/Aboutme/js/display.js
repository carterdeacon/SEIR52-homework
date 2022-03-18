//(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// const body = document.getElementsByTagName('body');
// document.body.style.fontFamily ='Arial, sans-serif';
$('body').css({'font-family': 'Arial, sans-serif'});

//(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// document.getElementById('nickname').innerHTML = 'Chilli';
// document.getElementById('favorites').innerHTML = 'Salmon';
// document.getElementById('hometown').innerHTML = 'Moon';
$('#nickname').html('Chilli');
$('#favorites').html('Salmon');
$('#hometown').html('Moon');
//Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// const lis = document.getElementsByTagName('li');
// for (var i =0; i<lis.length; i++) {
//     lis[i].className = 'listitem';
//     lis[i].style.color = 'red';
// }
$('li').each(function(){
    $(this).addClass('listitem').css({'color':'red'});  
});

// const newImg = document.createElement('img'); // detached DOM node, but not added in yet.
// newImg.src = '/Users/tingluo/Projects/seir52-Classwork/html-css/DOM/381646874893_.pic.jpg';
// newImg.style.width ='400px';
// newImg.style.height  = '400px';
// document.body.appendChild(newImg);
const newImg ="Users/tingluo/Projects/seir52-Classwork/02-jQuery/redo-with-jQuery/Aboutme/js";
$('<img>').attr('src',newImg).appendTo($('body'));





