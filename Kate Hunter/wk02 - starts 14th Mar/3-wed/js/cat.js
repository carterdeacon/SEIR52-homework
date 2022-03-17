

const img = document.getElementsByTagName('img')[0];
console.log(img)

img.style.left = '0px';

const catWalk = function() {
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + 1;
  console.log(oldLeft);
  console.log(newLeft);
  //img.style.left = newLeft + 'px';
  if(newLeft === 960){
      oldLeft = 0;
      newLeft = 0;
  }
  img.style.left = newLeft + 'px';
};
setInterval(catWalk, 0.2);


// const img2 = document.getElementsByTagName('img')[1];
// console.log(img2)

// img2.style.centre = '0px';

// const catRoar = function() {
//   const littleRoar = parseInt(img2.style.centre);
//   const bigRoar = littleRoar + 1;
//   console.log(littleRoar);
//   console.log(bigRoar);
//   img.style.center = bigRoar + 'px';
  
// };
// setInterval(catRoar, 0.2);


