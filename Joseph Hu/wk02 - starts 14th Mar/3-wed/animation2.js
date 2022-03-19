let img = document.getElementsByTagName('img')[0];
let screenSize = window.innerWidth
img.style.position = 'absolute';
img.style.left = '0px';
let midpoint = Math.round(screenSize/2)
console.log(midpoint);
let flipped = false;
let dance = false;
let catForward;
let catBackward;
let catDance;

//function makes the cat walk left to right
const catWalkForward = function(){
    let oldleft = parseInt(img.style.left);
    let newleft = oldleft + 1;
    img.style.left = newleft + 'px';
    //if the cat has reached the middle of the screen switch it to a different cat and call the dance function then stop it going forward
    if(newleft == midpoint-100){
        img.src = "catdance.gif"
        catDance = window.setInterval(danceCat, 1000);
        window.clearInterval(catForward);
    }
    //if the cat has reached the end of the page flip it and stop it going forward and make it go backward.
    else if (newleft == screenSize-img.width){
        img.style.transform = "scale(-1, 1)"
        flipped = true;
        window.clearInterval(catForward);
        catBackward=window.setInterval(catWalkBackward, 10)
    }
};

const catWalkBackward = function(){
    let oldleft = parseInt(img.style.left);
    let newleft = oldleft - 1;
    img.style.left= newleft + 'px';
    //if the cat has reached the middle of the screen switch it to a different cat and call the dance function then stop it going backward
    if(newleft == midpoint-100){
        img.src = "catdance.gif"
        catDance = window.setInterval(danceCat, 1000);
        window.clearInterval(catBackward);
    }
    //if the cat has reached the end flip it.
    else if (newleft == 0){
        img.style.transform = "scale(1, 1)"
        flipped = false;
        window.clearInterval(catBackward);
        //i tried using catForward=window.setInterval(catWalkForward, 10) here but it dosen't work for some reason. Not sure why i can't just keel calling each function at the end.
    }
};

//function called when the cat gets to middle of the screen
const danceCat = function(){
    //changes the cat back to the original cat
    img.src="http://www.anniemation.com/clip_art/images/cat-walk.gif"
    //if the cat is walking foward, continue it walking foward and stop it dancing.
    if (flipped == false){
        catForward=window.setInterval(catWalkForward, 10)
        window.clearInterval(catDance)
    }
    //if the cat is walking backard, continue it walking backward and stop it dancing.
    else{
        catBackward=window.setInterval(catWalkBackward, 10)
        window.clearInterval(catDance)
    }
}
//this function dosen't work for different screen sizes. 
//I want it to restart the cat when it reaches the start and loop it.
//it does weird stuff when i don't sync it with the rate the cat is walking.
let restart = function(){
    if (flipped == false){
        window.clearInterval(catBackward);
        console.log('wtf')
        catForward=window.setInterval(catWalkForward, 10)
    }
}

catForward=window.setInterval(catWalkForward, 10)
catBackward=window.setInterval(catWalkBackward, 10)
restartCat = window.setInterval(restart, 12000)





