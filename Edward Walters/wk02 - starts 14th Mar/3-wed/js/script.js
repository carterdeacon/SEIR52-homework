
const getRandomRgb = function(){
    return Math.floor(Math.random() * 255);   // helper function for random color value
};

const catWalk = function() {
    const catPos = parseInt(catImg.style.left);
    
    if (catPos >= window.innerWidth -250){
        catImg.classList.add('flip');
        isMovingFwd = false;
    };

    if (catPos <= -50){
        catImg.classList.remove('flip');
        isMovingFwd = true;
        document.body.style.backgroundColor = `rgb(${getRandomRgb()},${getRandomRgb()},${getRandomRgb()})`;
        meow.play();
    };
    
    const walkFwd = function () {
        let newPos = catPos + 3 + 'px';
        catImg.style.left = newPos;
    };

    const walkBwd = function () {
        let newPos = catPos - 3 + 'px';
        catImg.style.left = newPos;
    };

    if (isMovingFwd){
        walkFwd();
    } else {
        walkBwd();
    }
};

const meow = new Audio('meow.wav');
const catImg = document.getElementsByTagName('img')[0];
catImg.style.left = '-50px';
const timerId = setInterval(catWalk, 20);