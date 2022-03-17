const img = document.getElementsByTagName('img')[0];

img.style.position = 'absolute';
img.style.left = '0px';

var catWalk = function() {
    
    
    
  
        const oldX = parseInt(img.style.left);
        const newX = oldX + 10;
        img.style.left = newX + 'px';
    
    
};
setInterval(catWalk, 20);