// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 


const img = document.getElementsByTagName('img')[0];
img.style.left = '0px';

const catWalk = function() {
    const first = parseInt(img.style.left);
    const second = first + 1;
    img.style.left = second + 'px';
    if (second > window.innerWidth - img.width) {
        clearTimeout(setTimeout);
    };
};
const setTimeout = setInterval(catWalk, 10);