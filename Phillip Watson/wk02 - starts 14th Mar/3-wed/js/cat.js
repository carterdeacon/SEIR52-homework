const img = document.getElementsByTagName('img')[0];

img.style.position = 'absolute';
img.style.bottom = '0px';
//img.style.right = '10px';

const catWalk = function() {
    const oldBottom = parseInt(img.style.bottom);
    const newBottom = oldBottom + 2;
    img.style.bottom = newBottom + 'px';
};
setInterval(catWalk, 10);

// Not my code below just using it to try and work out how it all works.

// // Set the starting position and direction of the cat
// img.style.left = '0px';
// const direction = "right";

// // 
// const catWalk = function () {
  
//   // Decide the amount the image moves depending on the direction
//   const displacement = (direction === "right") ? 5 : -5;

//   // Calculate the new value for the image's LEFT style
//   const currentLeft = parseInt(img.style.left);
//   const newLeft = currentLeft + displacement;
//   img.style.left = newLeft + 'px';
  
//   // Turn the cat around at left edge of the screen
//   if(currentLeft < 0-img.width) {
//     window.clearInterval(timer);                    // Stop the current animation
//     direction = "right";                            // Set the direction
//     img.className = "right-cat";                    // Change the image orientation
//     timer = window.setInterval(catWalk, 40);        // Start the new animation
//   }
// };
// // Turn the cat around at right edge of the screen
//   if(currentLeft > window.innerWidth) {
//     window.clearInterval(timer);                    // Stop the current animation
//     direction = "left";                             // Set the direction
//     img.className = "left-cat";                     // Change the image orientation
//     timer = window.setInterval(catWalk, 40);   // Start the new animation
//   }