const img = document.getElementsByTagName(`img`)[0];
img.style.left = `0px`;
const maxWidth = window.innerWidth - 296;                    // width of image is 296
let animateBackward;

const catWalk =  function () {    
    const oldLeft = parseInt(img.style.left);
    let newLeft = oldLeft + 1;
    img.style.left = newLeft + `px`;  

    let walkBack = function () {    
        newLeft = newLeft - 1;
        img.style.left = newLeft + `px`;
        if ( parseInt( img.style.left ) === 0 ) {
            clearInterval(animateBackward);  
            img.classList.remove(`flipped`);
            animateForward = setInterval(catWalk, 5);
        }
    };

    if( parseInt( img.style.left ) >= maxWidth ) {
        clearInterval(animateForward);  
        img.className = `flipped`;
        animateBackward = setInterval(walkBack, 5);    
    };   
};

let animateForward = setInterval(catWalk, 5);