
// document.body.style.fontFamily = "Arial, sans-seif";

 $('body').css({"font-family":"Arial, sans-seif",});

// const myName = document.getElementById("nickname");
// myName.innerHTML = " Ai"

// document.getElementById('hometown').innerHTML = 'chiba'
// document.getElementById('favorites').innerHTML = 'SuShi'

// $("#nickname").append("Ai");
const $nickname = $("#nickname");
$nickname.text("Ai") /// use html for replacing the hmtl
$('#hometown').html('Chiba, <em>Tokyo</em>');////
$('#favorites').append('Sushi');/// if you are adding existing text

// const findListArr = document.getElementsByTagName('li');
// for( let i=0 ; i < findListArr.length ; i++){
//     const item = findListArr[i];
//     item.className = "listitem";
// }


const $liArr = $('li');
for( let i =0 ; i < $liArr.length ; i++){
   const $list = $liArr.eq(i);
   const ls = $list.addClass('listitem');
   $('.listitem').css({'color': 'red'})
}

// $('li').addClass('listitem');


const $image = $('<img>'); //creating html tug, not selecting!
$image.attr('src', "http://www.fillmurray.com/250/400");
$('body').append($image)

// const image = document.createElement('img');
// image.src = "http://www.fillmurray.com/250/400"
// document.body.appendChild(image);



