console.log("script functional");

// ## The Cat Walk

// - Create a variable to store a reference to the img.
const cats = document.querySelectorAll(".cat");
const announcer = document.querySelector(".announcer");
const pistol = document.querySelector(".pistol");

let raceOver = false;
let raceStarted;

// Helper function will prepare pos for the style attribute
const packagePos = function (pos) {
    const output = "left:" + pos + "px";
    return output;
}

// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
const positions = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
};

const checkForWinner = function() {
    for (let i = 0; i < cats.length; i++) {
        const leftNum = cats[i].getAttribute("style").slice(5, -2);
        if (leftNum > 1863) {
            raceOver = true;
            // Losers cry :'(
            for (let i = 0; i < cats.length; i++) {
                cats[i].setAttribute("src", "images/loser-cat.gif");
            };
            // Make winner dance!
            cats[i].setAttribute("src", "images/victory-dance.gif");
            cats[i].setAttribute("id", "winner");
        };
    };
};

// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
const catWalk = function(index) {
    positions[index] += 20 * Math.random();
    cats[index].setAttribute("style", packagePos(positions[index]));
    
    checkForWinner();
    
    if (raceOver) {
        for (let i = 1; i < 7; i++) {
            clearInterval(i);
        };
    };
};

const go = function() {
    for (let i = 0; i < cats.length; i++) {
        raceStarted = setInterval(catWalk, 50, i);
        raceStarted = !!raceStarted;
    };
};

// End Race

// When gun icon is clicked...
const bang = function() {
    if (!raceStarted){
        pistol.setAttribute("src", "images/starting-pistol-bang.png");
       go();
    };
};

pistol.addEventListener("click", bang);
