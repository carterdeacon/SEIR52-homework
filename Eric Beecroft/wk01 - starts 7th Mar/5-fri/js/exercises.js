console.log('Choo choo!');

// MTA Lab

// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.

// Activity
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Set the data in arrays
const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
const sLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

// Create a function that tells the stops in order they will pass through.
// const namesOfStops = function (on, off) {
//     let nStart = nLine.indexOf(on);
//     let nEnd = nLine.indexOf(off);
//     const nLineStops = nLine.slice(nStart, nEnd + 1);
//     console.log(`You must travel through the following stops on the N Line:`);
//     for ( let i = 0; i <= nLine.indexOf(off); i++ ) {
//         console.log(`${ (i, nLineStops[i]) }`);
//      }
//  };
//  namesOfStops('Times Square', '23rd');

// Create a function that counts the stops on nLine
// const howManyStops = function (on, off) {
//     let nStart = nLine.indexOf(on);
//     let nEnd = nLine.indexOf(off);
//     console.log(`${ nEnd - nStart } stops in total.`);
// }
// howManyStops('Times Square', '23rd');

// Create function to determine which array to use
// const whichLine = function (lineA, lineB) {
//     let startLine = [];
//     let endLine = [];
//     if ( lineA === 'N' ) {
//         startLine = nLine
//     }
//     else if ( lineA === 'L' ) {
//         startLine = lLine
//     }
//     else {
//         startLine = sLine
//     }
//     if ( lineB === 'N' ) {
//         endLine = nLine
//     }
//     else if ( lineB === 'L' ) {
//         endLine = lLine
//     }
//     else {
//         endLine = sLine
//     }
//     console.log(`You must travel through the following stops on the ${lineA} Line:`);
//     return endLine;
// };
// whichLine('N', '6');

// Create a function that determines if you need to change lines
// const changeLine = function (lineA, lineB) {
    // if ( lineA != lineB ) {
    //     console.log('Change at Union Square.');
    // }
// };
// changeLine('N', '6')


// Combine into one function
const firstLeg = `You must travel through the following stops on the`;
const secondLeg = `Your journey continues through the following stops:`;

const planTrip = function (lineA, on, lineB, off) {
    let startLine = '';
    let endLine = '';
    if ( lineA === 'N' ) {
        startLine = nLine
    }
    else if ( lineA === 'L' ) {
        startLine = lLine
    }
    else {
        startLine = sLine
    };
    if ( lineB === 'N' ) {
        endLine = nLine
    }
    else if ( lineB === 'L' ) {
        endLine = lLine
    }
    else {
        endLine = sLine
    }
    let stopStart = startLine.indexOf(on);
    let stopEnd = endLine.indexOf(off);
    let totalStops = stopEnd - stopStart;
    // if ( startLine.indexOf(off) < startLine.indexOf('Union Square') ) {
    //     startLine.reverse();
    //     console.log(startLine); // Test
    //     let stopStart = startLine.indexOf(on);
    // }
    if ( lineA === lineB ) {
        let startLineStops = startLine.slice(stopStart + 1, stopEnd + 1);
        for ( let i = 0; i <= startLine.indexOf(off); i++ ) {
            console.log(`${ firstLeg } ${ lineA } Line: ${ (startLineStops) }`);
        }
        console.log(`${ totalStops } stops in total.`);
    }
    else if ( lineA !== lineB ) {
        let toUnionSquare = '';
        let fromUnionSquare = '';
        if ( lineA === 'N' ) {
            toUnionSquare = 5;
        }
        else if ( lineA === 'L' ) {
            toUnionSquare = 3;
        }
        else {
            toUnionSquare = 5;
        }
        if ( lineB === 'N' ) {
            fromUnionSquare = 5;
        }
        else if ( lineB === 'L' ) {
            fromUnionSquare = 3;
        }
        else {
            fromUnionSquare = 5;
        }
        let startLineStops = startLine.slice( stopStart +1 , toUnionSquare );
        for ( let i = 0; i <= startLine.indexOf('Union Square'); i++ ) {
            console.log(`${ firstLeg } ${ lineA } Line: ${ (startLineStops) }`);
        }
        console.log('Change at Union Square.');
        if ( endLine.indexOf(off) < endLine.indexOf('Union Square') ) {
            endLine.reverse();
            let stopEnd = endLine.indexOf(off);
            let fromUnionSquareReversed = endLine.indexOf('Union Square') + 1
            let endLineStops = endLine.slice( fromUnionSquareReversed, stopEnd + 1 );
            for ( let i = fromUnionSquare; i <= endLine.length; i++ ){
                console.log(`${ secondLeg } ${ (endLineStops) }`)
            }
            let listOfStops = startLineStops.concat(endLineStops);
            console.log(` ${ listOfStops.length } stops in total.`);
        } else {
            let endLineStops = endLine.slice( fromUnionSquare , stopEnd + 1 );
            for ( let i = fromUnionSquare; i <= endLine.length; i++ ){
                console.log(`${ secondLeg } ${ (endLineStops) }`)
            }
            let listOfStops = startLineStops.concat(endLineStops);
            console.log(` ${ listOfStops.length } stops in total.`);
        }
    }
};
planTrip('N', 'Times Square', 'S', '33rd');

// const listOfStops = startLine.concat(endLine);
// console.log(listOfStops);

// const namesOfStops = function (on, off) {
//     let tripLine = [];
//     let nStart = nLine.indexOf(on);
//     let nEnd = nLine.indexOf(off);
//     tripLine = nLine.pop(nEnd - nStart);
//     console.log(`You must travel through the following stops on the nLine: ${ tripLine }.`)
// };
// namesOfStops('Times Square', '28th');



// Create a function that counts the stops from 'Boarding' to 'Union Square'
// const stopsToUnion = function (on) {
//     let toUnion = 0;
//     for ( let i = 0; i < nLine.length; i++ ) {
//         if (nLine[i] !== 'Union Square');
//         return toUnion;
//     }
// }
// console.log(stopsToUnion('Times Square'));