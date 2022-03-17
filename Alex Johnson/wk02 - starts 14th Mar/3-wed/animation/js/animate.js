const terminate = 1100;
const theCat = document.getElementsByClassName('kitty')[0];
theCat.style.position = 'absolute';
theCat.style.left = '0px';

//const theCatGoesLeft = document.getElementsByClassName('kitty')[0];   //attempt 2  - tried to call catwalkr function 
//theCatGoesLeft.style.position = 'absolute';
//theCatGoesLeft.style.left = '1100px';


const catWalk = function() {
    let currPos = parseInt(theCat.style.left);
    let newPos = currPos + 10;
   if ( newPos <= terminate) { 
        theCat.style.left = newPos + 'px';
   } else { 
       
        currPos = terminate;                                        //attempt 1 at bonus 2 n.b.g - variable currPos decrements 
        while (currPos > 0 ) {                                      //but the style does not render the gif in the opposite direction.    
            currPos = currPos - 10;                   
            console.log (currPos);
            theCat.style.left = currPos + 'px';
            console.log (theCat.style.left);
        
           // setInterval(catWalkR,42);
        }
    }
}
/*
const catWalkR = function() {
    let currPos = parseInt(theCatGoesLeft.style.left);
    let newPos = currPos - 10;
    if ( newPos > 0 ) {
        theCatGoesLeft.style.left = newPos + 'px'; 

    } else {return}

}
*/


setInterval(catWalk,42);
//setInterval(catWalkR,42);

/*
# Exercises: Animation
## The Cat Walk

ToDO:

- Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. 
            They should keep walking back and forth forever and ever. 

- Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, 
            keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

- Bonus #4: Pretty much go nuts or whatever.

*/