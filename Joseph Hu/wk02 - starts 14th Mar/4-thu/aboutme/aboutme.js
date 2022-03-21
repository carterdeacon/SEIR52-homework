// let pageNode = document.body;
// pageNode.style.fontFamily = "Arial, sans-serif"

// let nickName = document.getElementById("nickname");
// nickName.innerHTML += ' Jojo'
// let favorites = document.getElementById("favorites");
// favorites.innerHTML += ' Anime, Larping, Bjj, Cookies'
// let hometown = document.getElementById("hometown");
// hometown.innerHTML += ' Doncaster'

// let listItems = document.querySelectorAll('ul li');
// //console.log(listItems);

// for (i = 0; i<listItems.length; i++){
//     listItems[i].className = "listitem";
// }

// //console.log(listItems);
// let elements = document.getElementsByClassName("listitem");
// for (let i = 0; i<elements.length; i++){
//     elements[i].style.color = "red";
// }

// let newImg = document.createElement('img');
// newImg.src = "./joseph.jpg";
// pageNode.appendChild(newImg);

$('body').css('font-family', 'Arial, sans-serif');
$('#nickname').html('Jojo');
$('#favorites').html(' Anime, Larping, Bjj, Cookies');
$('#hometown').html(' Doncaster');
$('span').each(function(){$(this).addClass('listitem')});
$('span').css('color', 'red');
$('body').append($('<img>').attr('src', "./joseph.jpg"));