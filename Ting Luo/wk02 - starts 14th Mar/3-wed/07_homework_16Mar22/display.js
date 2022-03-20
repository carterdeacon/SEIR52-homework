const siteBody = document.getElementsByTagName('body')[0];
const cat = document.getElementsByTagName('img')[0];
const click = document.getElementsByTagName('img')[1]
cat.style.left = '0%';
cat.style.opacity = 1.0;
let move = 1;

const walkLeftToRight = function () {

    const oldPosition = parseInt(cat.style.left);

    if (move === 1 && oldPosition > 72) {
        move = -1;
        cat.style.transform = 'scaleX(-1)';

    }else if (move === -1 && oldPosition < 0){
        move = 1;
        cat.style.transform = 'scaleX(1)';
    }
    console.log("current pos", oldPosition);
    const newPosition = oldPosition + move;

    //const newTop = oldTop + move;
    cat.style.left = newPosition + '%';
    //cat.style.top = newTop + '%';

};

let count = 0;
const angry = function() {
    if (count === 0) {
        setInterval(walkLeftToRight,50);
        click.style.display = 'none';
    };
    count +=1;
    if (count % 2 ===0){
        cat.src ='http://www.anniemation.com/clip_art/images/cat-walk.gif';
        siteBody.style.backgroundColor = 'pink'; 
    }else{
        cat.src = './ezgif.com-gif-maker.gif';
        siteBody.style.backgroundColor = 'black';
    }
}

cat.addEventListener('click', angry);

