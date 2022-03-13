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

// let N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// let L = ['8th', '6th', 'Union Square', '3rd', '1st'];
// let six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


const trainLines = {

    lines: { 
        'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }

};

// console.log(`The stops are ${trainLines.lines['N'].join(', ')}`);
// console.log(trainLines.lines['L']);
// console.log(trainLines.lines['6']);
// console.log(" ");
// console.log(trainLines.lines['L'].indexOf('none')); // --> this gives me a negative index 
// console.log(trainLines.lines['N'][2]);
// console.log(trainLines.lines['6'][5]);


const planTrip = function (line, firstStop, line2, endStop ) {
    let train = trainLines.lines[line];
    let train2 = trainLines.lines[line2];
    let intersect = 'Union Square'
    let totalStops = 0;

    if (line !== 'N' && line !== 'L' && line !== '6') { // if the train line does not exist  --> how do i make this dynamic?
        console.log(`The train line ${line} does not exist, please enter in train line N, L or 6.`);
        
    } else if (line2 !== 'N' && line2 !== 'L' && line2 !== '6') { // if the train line does not exist
        console.log(`The train line ${line2} does not exist, please enter in train line N, L or 6.`);

    } else if (train.indexOf(firstStop) === -1) {   // if the train stop does not exist on the first line
        console.log(`The beginning stop ${firstStop} does not exist on line ${line}. Please select from: ${train.join(', ')}.`);

    } else if (train2.indexOf(endStop) === -1) { // if the train stop does not exist on the second line
        console.log(`The destination stop ${endStop} does not exist on line ${line2}. Please select from: ${train2.join(', ')}.`);

    } else if (line === line2) {
        let stop = train.indexOf(firstStop);
        let stop2 = train.indexOf(endStop);
        let rideTo = [];

        if (stop < stop2) {  // this is for when you are going down the line
            for (i = stop+1; i < stop2+1; i++) {  
                rideTo.push(train[i]);
                totalStops += 1;
            }
            console.log(`You must travel through the following stops on the ${line} line: ${rideTo.join(', ')}.`);
            console.log(`${totalStops} stops in total.`)

        } else if (stop > stop2) {
            for (i = stop-1; i > stop2-1; i--) {  // this is for when you are going back up the line
                rideTo.push(train[i]);
                totalStops += 1;
            }
            console.log(`You must travel through the following stops on the ${line} line: ${rideTo.join(', ')}.`);
            console.log(`${totalStops} stops in total.`)

        } else if (stop === stop2) {  // if the user has enter the same beginning and ending stop on the same line
            console.log(`You have already arrived at your destination - stop ${endStop} on line ${line2}.`);
        } 

    } else if (line !== line2) {
        let stop = train.indexOf(firstStop);
        let stop2 = train.indexOf('Union Square');
        let rideTo = [];
        
        for (i = stop+1; i < stop2+1; i++) { // this is to the intersecting station (Union Square)
            rideTo.push(train[i]);
            totalStops += 1;
        }
        console.log(`You must travel through the following stops on the ${line} line: ${rideTo.join(', ')}.`)
        console.log(`Change at ${intersect}.`);
        
        let stop3 = train2.indexOf('Union Square'); // this is from the intersecting station (Union Square)
        let stop4 = train2.indexOf(endStop);
        let remainingStops = [];

        if (stop3 < stop4) {  // this is for when you are going down the line
            for (i = stop3+1; i < stop4+1; i++) {
                remainingStops.push(train2[i]);
                totalStops += 1;
            }
            console.log(`Your journey continues through the following stop: ${remainingStops.join(', ')}.`);
            console.log(`${totalStops} stops in total.`)

        } else {
            for (i = stop3-1; i > stop4-1; i--) {  // this is for when you are going back up the line
                remainingStops.push(train2[i]);
                totalStops += 1;
            }
            console.log(`Your journey continues through the following stop: ${remainingStops.join(', ')}.`);
            console.log(`${totalStops} stops in total.`)
        }

    }

};
        

planTrip('N','8th','N','Times Square');
console.log(' '); // --> this makes it easier to read in the console
planTrip('N', 'Times Square', '6', '33rd');
console.log(' '); // --> this makes it easier to read in the console
planTrip('L', '6th', '6', 'Grand Central');
console.log(' '); // --> this makes it easier to read in the console
planTrip('N','28th','6','28th');
console.log(' '); // --> this makes it easier to read in the console
console.log('ERROR TESTING'); // --> this makes it easier to read in the console
planTrip('L', '6th', 'L', '6th'); // --> same beginning and ending stop
console.log(' '); // --> this makes it easier to read in the console
planTrip('N', 'Times Square', '6', 'Tim Squa'); // to test errors
console.log(' '); // --> this makes it easier to read in the console
planTrip('N', 'Times Square', '8', 'Tim Squa'); // to test errors
// console.log(Object.keys(trainLines.lines).join(', ')); --> key names
// console.log(Object.keys(trainLines.lines).length); --> shows 3. how do i use this to make a dynamic formula?


