// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:



const planTrip = ['Times square', '6', '33rd', '34th', '28th', '23rd', 'Union Square']

//


const subWay = function (stop1, stop2) {
    let totalStops = '';
    for (let i = stop1; i <= stop2; i++) {
        let stops = planTrip[i];
        totalStops += stops;
    } 
    //console.log(totalStops);
     if (totalStops.includes(planTrip[3]) && totalStops.includes(planTrip[4]) && totalStops.includes(planTrip[5]) && totalStops.includes(planTrip[6])) {
        console.log('ALL good')
    } else {
    console.log('you must travel through stops', `${ planTrip[3] }, ${ planTrip[4] }, ${ planTrip[5] }, ${ planTrip[6] }`)
    };
};

subWay(3, 4);
subWay(0, 6);
subWay(0, 3);
subWay(3, 6);


const changeUnion = function (change) {
    let changeUnionAll = '';
    for (let i = 0; i <= change; i++) {
        let change = planTrip[i];
        changeUnionAll += change;
    }
    // console.log(changeUnionAll);
     if (changeUnionAll.includes(planTrip[6])) {
        console.log('You can change here')
    } else {
        console.log('Keep going to reach Union square')
    };
};

changeUnion(6);
changeUnion(3);


// } else if (totalStops === planTrip[6]) {
//     console.log('you need to change at ', `${ planTrip[6] }`);
// } else {
//     console.log('you must travel through stops', `${ planTrip[3] }, ${ planTrip[4] }, ${ planTrip[5] }, ${ planTrip[6] }`);
// };
// };


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