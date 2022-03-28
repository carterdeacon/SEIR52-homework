const img = document.getElementsByTagName('img')[0];

img.style.position = 'absolute';
img.style.left = '0px';

var watchBillFall = function() {
  const oldTop = parseInt(img.style.left);
  const newTop = oldTop + 2;
  img.style.left = newTop + 'px';
  if (newTop > 100) {
    clearInterval(fadeTimer);
 }
};

const fadeTimer = setInterval(watchBillFall, 100);

// setInterval(watchBillFall, 10);
