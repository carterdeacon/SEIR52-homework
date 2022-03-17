// Create a variable to store a reference to the img

////////////////    img     //////////////////
const img = document.getElementsByTagName('img')[0];

img.style.top = (window.innerHeight - 300)+ 'px';
img.style.left = '0px';
maxWidth = window.innerWidth-img.width;

////////////////    img2 - jiji   //////////////////
const img2 = document.getElementsByTagName('img')[1];
img2.style.visibility = 'hidden';
img2.style.top = (window.innerHeight - img2.height)/2 + 'px';
img2.style.left = (window.innerWidth-img2.width)/2 + 'px';

////////////////    img3 - catbus    //////////////////
const img3 = document.getElementsByTagName('img')[2];
img3.style.right = '0px';
img3.style.width= '5px';

maxBottom = window.innerHeight - 280;
maxRight = window.innerWidth - 280;

let newWidth = 0;
let newRight = 0;
let newTop = 0;

let newLeft = 0;


let walkingBack;

const catWalk = function () {
    newLeft += 10;
     
    img.style.left = newLeft + 'px';
    
    if (newLeft > window.innerWidth-img.width) {
        img.style.transform = 'scaleX(-1)';
        walkingBack = setInterval(walkBack,50); 
        clearInterval(walk);
    }
};
    
const walkBack = function () {
    newLeft = newLeft - 10;
    
    img.style.left = newLeft + 'px';
    
    if (newLeft < 0) {
        img.style.transform = 'scaleX(1)';
        walk = setInterval(catWalk,50); // --> recalls the function
        clearInterval(walkingBack);
    }
};

let walk = setInterval(catWalk,50);

const catgrow = function () {
    newWidth += 2;
    newRight += 2;
    newTop += 3;
     
    img3.style.width = newWidth + 'px';
    img3.style.right = newRight + 'px';
    img3.style.top = newTop + 'px';
    
    if (newWidth === 300) {
        moving = setInterval(move,50);
        clearInterval(grow);
    }
};

const move = function () {
    newRight += 7;
    newTop += 8;

    img3.style.right = newRight + 'px';
    img3.style.top = newTop + 'px';

    if (newTop > maxBottom || newRight > maxRight) {
        moving2 = setInterval(move2, 50);
        clearInterval(moving);
    }

}

const move2 = function () {
    newRight += 7;
    newTop = newTop - 8;
    img3.style.right = newRight + 'px';
    img3.style.top = newTop + 'px';

    if ( (newRight > maxRight) || (newTop < 0) ) {
        moving3 = setInterval (move3,50);
        clearInterval(moving2);
    }
}

const move3 = function () {
    newRight = newRight - 7;
    newTop = newTop - 8;
    img3.style.right = newRight + 'px';
    img3.style.top = newTop + 'px';

    if ( (newRight < 0) || (newTop < 0) ) {
        moving4 = setInterval (move4,50);
        clearInterval(moving3);
    }
}

const move4 = function () {
    newRight = newRight - 7;
    newTop = newTop + 8;
    img3.style.right = newRight + 'px';
    img3.style.top = newTop + 'px';

    if ( (newRight < 0) || (newTop > maxBottom) ) {
        clearInterval(moving4);
    }
}



let moving2;
let moving;
let moving3;
let moving4;
let grow = setInterval(catgrow,50);
    




const catAppear = function () {
    img2.style.visibility = 'visible';
    window.setTimeout("img2.style.visibility='hidden';", 10000);
    clearInterval(jiji);
}
 
let jiji = setInterval(catAppear,100);




/// colourful background



const background = document.getElementById("background");
 
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
 
const getRandomColor = () => {
  const h = getRandomNumber(360);

 
  return `hsl(${h}deg, 100%, 90%)`;
};
 
const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.color = randomColor;
};
 
setBackgroundColor();
 
setInterval(() => {
  setBackgroundColor();
}, 1500);





// const catWalk = function () {
//     newLeft += 10;
 
//     img.style.left = newLeft + 'px';

//     if (newLeft > (window.innerWidth-img.width)/2) {
//         // img.style.transform = 'scaleX(-1)';
//         // walkingBack = setInterval(walkBack,50); 
//         img.style.visibility = 'hidden';
//         clearInterval(walk);
//     } 
//     dance = setInterval(catDance, 10);
// };

// const catWalk2 = function () {

//     newLeft += 10;
 
//     img.style.left = newLeft + 'px';

//     if (newLeft > (window.innerWidth-img.width)) {
//         img.style.transform = 'scaleX(-1)';
//         walkingBack = setInterval(walkBack,50); 
//         clearInterval(walk2);
//     } 
// };

// const walkBack = function () {
//     newLeft = newLeft - 10;

//     img.style.left = newLeft + 'px';

//     if (newLeft < 0) {
//         img.style.transform = 'scaleX(1)';
//         walk = setInterval(catWalk,50); // --> recalls the function
//         clearInterval(walkingBack);
//     }
// };


// let walk = setInterval(catWalk,50); // --> using let so that it can be replace via functions

// const catDance = function () {
//     img2.style.visibility = 'visible';
//     window.setTimeout("img2.style.visibility='hidden';", 10000);
//     walk2 = setInterval(catWalk2,50);
//     clearInterval(dance);
// }
 
// let dance;
// let walk2;


