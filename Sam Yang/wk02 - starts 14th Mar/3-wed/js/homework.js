let newImg = document.createElement("img");
newImg.src = "js/catwalking.png";

newImg.style.left = "0px";

const catWalk = function () {
    const oldLeft = parseInt (newImg.style.left);
    const newLeft = oldLeft + 10;
    newImg.style.left = newLeft + "px";
}
setInterval (catWalk, 50) 
