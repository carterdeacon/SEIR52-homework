
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

const scareCat = function() {
    meow.play();
    isMovingFwd = !isMovingFwd;
    catImg.classList.toggle('flip');
};



const meow = new Audio('meow.wav');
const catImg = document.querySelector('img');
catImg.style.left = '-50px';
setInterval(catWalk, 20);
document.querySelector('img').addEventListener('mouseover', scareCat);
letisMovingFwd;

