console.log("Hello")


const image = document.getElementsByTagName('img')[0];

image.style.position = 'absolute';
image.style.top = "400px";
image.style.left = "0px";





const walkingCat = function() {

    let reverseDirection = false;           
    
    if (reverseDirection === false) {        
        const oldPosition = parseInt(image.style.left);
        const newPosition = oldPosition + 1;
        image.style.left = newPosition + "px";
        
    }
    if (parseInt(image.style.left) == window.innerWidth - image.width) {                        
        image.style.left = "0px";        
        console.log('here');
        //reverseDirection = true;
        console.log(reverseDirection);
    }

    
    if (reverseDirection == true) {        
        const oldPosition = parseInt(window.innerWidth);
        const newPosition = oldPosition - 1;
        image.style.left = newPosition + "px";
        console.log(image.style.right);
    }
   
       
};


const timerID = setInterval(walkingCat, 0.05);





//These lines of code is for my archieve

// const makeCatBigger = function () {           
//     image.setAttribute('width', image.width + 10);
// };

// setInterval(makeCatBigger, 1000);

// image.style.opacity = 1.0;
// const fadeAway = function () {
//     image.style.opacity = image.style.opacity - 0.1;
// }
// setInterval(fadeAway, 1000);