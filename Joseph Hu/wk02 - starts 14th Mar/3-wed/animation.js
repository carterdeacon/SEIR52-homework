const img = document.getElementsByTagName('img')[0];
let screenSize = window.innerWidth
img.style.position = 'absolute';
img.style.left = '0px';
let flipped = false;
let catForward;
let catBackward;

//function to make the cat walk forward
const catWalkForward = function(){

    let oldleft = parseInt(img.style.left);
    let newleft = oldleft + 1;
    img.style.left = newleft + 'px';
    //when the cat reaches the end of the screen, flip it and stop it going forward
    if (newleft == screenSize-img.width){
        img.style.transform = "scale(-1, 1)"
        flipped = true;
        window.clearInterval(catForward);
    }
};


const catWalkBackward = function(){
    let oldleft = parseInt(img.style.left);
    let newleft = oldleft - 1;
    console.log(newleft)
    img.style.left= newleft + 'px';
    //when the cat reaches the left side of the browser, flip it and stop it.
    if (newleft == 0){
        img.style.transform = "scale(1, 1)"
        flipped = false;
        window.clearInterval(catBackward);
    }
};

//this part dosen't work for different screen sizes, i have to adjust the interval call length.
//it basically checks every couple seconds what the status of the cat is. If it's walking forward or backwards.
//if it's walking forward, its reached the end then call the other function. 
//This makes it loop but only if my interval time is the same rate that the cat reaches the end of the page or slightly greater than that.
//not sure what a better way of doing it could be... when i try call both functions at the same time it dosen't work and the cat does weird stuff.
const call = function(){
    if(flipped == false){
        catForward=window.setInterval(catWalkForward, 5)
        window.clearInterval(catBackward);

    }
    else{
        catBackward=window.setInterval(catWalkBackward, 5)
        window.clearInterval(catForward);
    }
}

window.setInterval(call, 9500)