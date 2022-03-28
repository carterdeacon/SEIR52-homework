const mainBody = document.getElementById('main');[0]
const img = document.getElementsByTagName('img')[0];

img.style.left = ('0%');
let move = 1;


const catWalk = function(){
   const catStart = parseInt(img.style.left);
   const catEnd = catStart + 10;
   img.style.left = catEnd + 'px'
 
  
}


window.setInterval(catWalk, 100)
