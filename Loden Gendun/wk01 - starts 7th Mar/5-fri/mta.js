console.log("mta script functional");

// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// SUBWAY object
const subway = {
    // ARRAYS of stops
    lineN: [
        'Times Square', 
        '34th', 
        '28th', 
        '23rd', 
        'Union Square',
        '8th'
    ],
    lineL: [
        '8th', 
        '6th', 
        'Union Square', 
        '3rd',
        '1st'
    ],
    line6: [
        'Grand Central', 
        '33rd', 
        '28th', 
        '23rd', 
        'Union Square',
        'Astor Place'
    ]
};

// HELPER FUNCTIONS
const changeRequired = function(lineAt, lineDest) {
    return lineAt != lineDest;
};

// vector function will determine whether iterator increments or decrements
const direction = function(commuter, destination) {
    const line = commuter.line;
    if (subway[line].indexOf(commuter.position) < subway[line].indexOf(destination)) {
        return 1;
    };
    return -1;
};

const tripOver = function(commuter, destination) {
    const line = commuter.line;
    if (direction(commuter, destination) > 0) {
         return i < subway[line].indexOf(destination);
    }
    return i > subway[line].indexOf(destination);
};

const travel = function(commuter, destination) {
    const line = commuter.line;
    for (let i = subway[line].indexOf(commuter.position); !tripOver(commuter, destination); i + direction(commuter, destination)) {
        commuter.position = subway[line][i];
        console.log(commuter.position);
    };
};

// MAIN FUNCTION
const planTrip = function(lineOn, stopOn, lineOff, stopOff) {

    // Object keeps tracks of commuters line and position
    let commuter = { 
        line: lineOn,
        position: stopOn
    };

    // check if destination is on another line
    if (changeRequired) {
        destination = 'Union Square'
    };

    // travel until commuter is at the line and stop they need to be at.
    while(commuter.line != lineOff || commuter.position != stopOff) {
        travel(commuter, destination);
        if(commuter.line != lineOff) {
            commuter.line = lineOff;
            console.log("changed lines...")
        };
        if (destination != stopOff) {
            destination = stopOff;
        };
    };
};