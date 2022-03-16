//bonus 1
const catImg = document.querySelector("img");
catImg.style.left = 0;
catImg.style.transform = "scaleX(1)";

const step = 10
const imgWidth = 296

// const catWalkRight = function () {
//     const maxWidth = window.innerWidth;
//     catImg.style.left = parseInt(catImg.style.left) + step + "px";
//     if (parseInt(catImg.style.left) > maxWidth - imgWidth) {
//         catImg.style.left = 0;
//     }

// }
// setInterval(catWalkRight, 50);

//bonus 2

// const catWalkForever = function () {
//     const rightDirection = "scaleX(1)";
//     const leftDirection = "scaleX(-1)";

//     if (catImg.style.transform == rightDirection) {
//         catImg.style.left = parseInt(catImg.style.left) + step + "px";
//         if (parseInt(catImg.style.left) > window.innerWidth - imgWidth) {
//             catImg.style.transform = leftDirection;
//         }
//     }
//     if (catImg.style.transform == leftDirection) {
//         catImg.style.left = parseInt(catImg.style.left) - step + "px";
//         if (parseInt(catImg.style.left) < 0) {
//             catImg.style.transform = rightDirection;
//         }
//     }
// }

// setInterval(catWalkForever, 50);

//bonus 3

const replaceImageHalfway = function () {
    const dancingImageURL = "https://c.tenor.com/tHnl1KyoN1YAAAAM/cat-cat-dance.gif"
    const rawImageURL = "http://www.anniemation.com/clip_art/images/cat-walk.gif"

    if (catImg.src == rawImageURL && parseInt(catImg.style.left) < window.innerWidth - imgWidth) {
        catImg.style.left = parseInt(catImg.style.left) + step + "px";
        if (parseInt(catImg.style.left) >= (window.innerWidth - imgWidth) / 2 && parseInt(catImg.style.left) - (window.innerWidth - imgWidth) / 2 < 10) {
            catImg.src = dancingImageURL;
        }
        if (catImg.src == dancingImageURL) {
            const changeURL = function () {
                // console.log(catImg.src);
                catImg.src = rawImageURL;
                if (catImg.src == rawImageURL) {
                    clearInterval(changeURL);
                }
            }
            setInterval(changeURL, 10000);
        }
    }
}

setInterval(replaceImageHalfway, 50);

