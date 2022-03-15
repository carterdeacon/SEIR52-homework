// // console.log('Hello World');

// // // # MTA Lab

// // // ## Objectives:
// // // * Apply your knowledge of Javascript to solve a real world problem.
// // // * Get really good at array manipulation.

// // // #### Activity
// // // * Create a program that models a simple subway system.

// // // * The program takes the line and stop that a user is getting on at and the line
// // // and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// // // ```javascript
// // // planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // // // console.log() shows output similar to this:
// // // // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // // // "Change at Union Square."
// // // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // // // "7 stops in total."
// // // ```

// // // * There are 3 subway lines:
// // //   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// // //   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// // //   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// // //   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// // // * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// // // #### Hints:
// // // * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// // // * Get the program to work for a single line before trying to tackle multiple lines.
// // // * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// // // * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// // // * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// // // * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)




// // const stopsN = ['Times Square', '34th', '28th On N', '23rd', 'Union Square', '8th']
// // for(let i = 0; i < stopsN.length; i++) {
// //     console.table(`Number of stops ${ stopsN } until end of the line`)
// // };

// const stops = [
//     {
//     id: 1,
//     station: 'Times Square'
//     },
//     {
//     id: 2,
//     station: '34th'
//     },
//     {
//     id: 3,
//     station: '28th On N'
//     },
//     {
//     id: 4,
//     station: '23rd'
//     },
//     {
//     id: 5,
//     station: 'Union Square'
//     },
//     {
//     id: 6,
//     station: '8th'
//     }
//     ];
// for(let stop of stops) {
//     console.log(stop)
// }
// //for(let i = 0; i < stops.length; i++) {
//   //  console.log(stops[i].station, stops[i].id);
// //} 
  

// //for (i = 0; i  <= 6; i++) 
// //console.log(stopsN.lastIndexOf('34th')) };
// // console.log(stopsN);
// // let stopsL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// // let stops6 = ['Grand Central', '33rd', '28th On 6', '23rd', 'Union Square', 'Astor Place'];
// // console.log(array.length);



// // // const theNLine = ['Times Square', '34th', '28th On N', '23rd', 'Union Square', '8th'];
// // // const theLLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
// // // const the6Line = ['Grand Central', '33rd', '28th On 6', '23rd', 'Union Square', 'Astor Place'];
// // // console.log(array.length);



// // // const trainLine = [
// // //     { station: 'Times Square', line: 'N' },
// // //     { station: 'Union Square', line: 'N' + "L" + 6 },
// // //     { station: 'Grand Central', line: 6 },
// // //     { station: 'Astor Place', line: 6 },
// // //     { station: '1st', line: 'L' },
// // //     { station: '3rd', line: 'L' },
// // //     { station: '6th', line: 'L'},
// // //     { station: '8th', line: 'L'},
// // //     { station: '23rd', line: 6 },
// // //     { station: '28th', line: 'N' + 6 },
// // //     { station: '33rd', line: 6 },
// // //     { station: '34th', line: 'N' }
// // // ];
// // // console.table(trainLine);

const staionsOnN = ['Times Square', 'Union Square', '28th', '34th'] 
const stationsOn6 = ['Union Square', 'Grand Central', 'Astor Place', '28th On 6', '33rd']
const stationsOnL = ['Union Square', '1st', '3rd', '6th', '8th',] 
//const stops = function(_indexOfstaionsOnN, stationsOnL, stationsOn6) {
// const planTrip = function(staionsOnN, stationsOn6, stationsOnL) {
// return staionsOnN + stationsOn6;
// };
//};

console.log(indexOf.staionsOnN) ;



