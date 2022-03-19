// Calculator

// Create a new Javascript file and link to it with a script tag at the bottom.
// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.

// Square
const squareButton = document.getElementById('square-button');
const solution = document.getElementById('solution');

const square = function () {
    const squareNum = document.getElementById('square-input').value;
    solution.innerHTML = `${ squareNum } * ${ squareNum }`;
  };

button.addEventListener('click', square);


// Bonus: respond to key presses so that the user doesn't have to click the button.