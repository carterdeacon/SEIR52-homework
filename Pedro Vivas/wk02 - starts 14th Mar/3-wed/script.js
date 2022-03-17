const cat = document.getElementById("catImg");
let leftGlide = "";
let catWidth = "";
const startCat = function() {
    catWidth = parseInt(cat.width);
    leftGlide = setInterval(catWalk, 100);
}
window.setTimeout(startCat, 20);
cat.style.left = "1px";

cat.style.top = "35rem";

let returnB = "";
const catWalk = function() {
    let leftVal = parseInt(cat.style.left);
    let walkLength = window.innerWidth;
    cat.style.left = (leftVal + 10) + "px";
    if(parseInt(cat.style.left) > walkLength - catWidth) {
        clearInterval(leftGlide);
        cat.style.transform = "scaleX(-1)";
        returnB = setInterval(walkBack, 100);
    }
};

const walkBack = function() {
    let leftVal = parseInt(cat.style.left);
    cat.style.left = (leftVal - 10) + "px";
    if(parseInt(cat.style.left) <= 0 ) {
        clearInterval(returnB);
        cat.style.transform = "scaleX(1)";
        leftGlide = setInterval(catWalk, 100);
    };
};

