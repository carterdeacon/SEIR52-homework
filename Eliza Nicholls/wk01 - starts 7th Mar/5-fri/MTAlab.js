console.log(`Let's rock!`);
// MTA Lab

// Objectives:

//     Apply your knowledge of Javascript to solve a real world problem.
//     Get really good at array manipulation.

// const planTrip = function (start, end) 



// const nySubway = {
//     N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
//     L: ['8th', '6th', 'Union Square', '3rd', '1st'],
//     six: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
//     new: N.concat(six);

// };

const myTrip = function (x, y) {
    const journey = {
        start: x,
        stop: y
    }
    console.log('Start at', x ,'station and get the effff out at', y, 'station.');
    };

myTrip();

const N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const L = ['8th', '6th', 'Union Square', '3rd', '1st'];
const six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']; 


const direction = function (){
    N.reverse();
    console.log(N);
};



direction();

// const nySubway = N.concat(six) ; 

// const start = N[5];
// const end = six[5];

const unionSquare = function (){
    if (N.includes('Union Square')) {
        console.log('Change Station');
    }
};

unionSquare();

const nySubway = N.concat(six);
        console.log(nySubway);




// const test = function(){
//     if (unionSquare === true) {
//     const newRoute = nySubway.concat(six);
// console.log(newRoute);
//     }
// }

// test();

// let journey = function () {
//     const index = nySubway.findIndex(nySubway => nySubway === start );
//             console.log(index); // 3
//             console.log(nySubway[index]); // blueberries    
         
// };

// journey();

// const stops =  function(start) {
//     for (let i = 0; i < nySubway.length; i++) {
//         if (nySubway.[i] === six[5])
//         console.log(i);{
//             break;
//         }
       
//     }
// };

// for (let i of arr) {
//     console.log(i); // logs 3, 5, 7
//  }

// console.log(why);

// const index = N.findIndex(N => N === "8th");

// console.log(index); // 3
// console.log(N[index]); // blueberries

// const myTrip = function () {
//     const journey = {
//         start: x,
//         stop: y
//     }
//     console.log('Start at', nySubway.N[1],'then', nySubway.six[5], '.');
//     return journey
//     };


        

//     nySubway.N[1], nySubway.six[5]

const fruits = ['Apple', 'Banana'];

fruits.includes('Banana'); // true
fruits.includes('Cherry'); // false

// const userImput = myTrip('start', 'stop');

//     const changeLine = function  (x/* StartmySubway.(Objects)  */, y/* same mySubway Array */ ) {
//         if (nySubway.N.indexOf/*thestart x */(x) === y /* can it be found in it's array */ ) {
//             nySubway.N.push(x);
//             console.log('TEST ' + x);/* if it can run myTrip */
//         } else { /* count from STARTstation to UNION STATION . print stations. print count */ 
//             console.log('CHANGE LINE:' + y);
//         }
// };

//     const findLine = function  (x/* ENDmySubway  */, y/* matching mySubwayLine */ ) {
//         if (nySubway.N.indexOf/* ENDmySubway x */(x) === y /* TRUE that matches go to CHANGE LINE*/ ) {
//             nySubway.N.push(x);
//             console.log('TEST ' + x);
//         // count from UNION STATION to END stop. Print stations and print count.
        
//         } else {
//             console.log('CHANGE LINE:' + y);
//         }
//     };

//     // I NEED to add CHANGELINE (numbers) + UNION STATION (numbers)
//     // THEN ADD ARRAY VALUES from BOTH TRAIN LINES

//     const changeLine = function  (x/* StartmySubway.(Objects)  */, y/* same mySubway Array */ ) {
//         if (nySubway.N.indexOf/*thestart x */(x) === y /* can it be found in it's array */ ) {
//             nySubway.N.push(x);
//             console.log('TEST ' + x);
//         } else {
//             console.log('CHANGE LINE:' + y);
//         }
//     };


//     changeLine(nySubway.N, nySubway.six) /* figure out how to call the object and not return just the array */

    // const x = [nySubway.N[4]];
    // const y = [nySubway.six[5]];

//    const updateJourney = function  (stop, start ) {
//         if (nySubway.N.indexOf(stop) === 4) {
//             nySubway.N.push(stop);
//             console.log('You must change at ' + stop);
//         } else {
//             console.log('You do not need to change to reach ' + start);
//         }
//     };

//     updateJourney(nySubway.N[4], nySubway.six[5]);

    // const stop = [nySubway.six[5]];
    // const start = [nySubway.N[1]];

    // updateJourney(stop, nySubway.six);
    // // New veggies collection is : potato,tomato,chillies,green-pepper,spinach
    // updateJourney(stop, nySubway.six);
    // // spinach already exists in the veggies collection.


//     console.log('Meow, my name is', nySubway.N);
// };


// console.log(nySubway.N);

// Activity

//     Create a program that models a simple subway system.

//     The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

//     There are 3 subway lines:
//         The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//         The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//         The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//         All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
//     Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Hints:

//     Work out how you would do it on paper first! Then start to explain that process in Javascript.
//     Get the program to work for a single line before trying to tackle multiple lines.
//     Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
//     Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
//     The key to the lab is finding the index positions of each stop. (hint: indexOf())
//     Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
