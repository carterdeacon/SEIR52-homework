// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const mta = {
    lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
    line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};

const planTrip = function (currentLine, currentStop, goingLine, goingStop) {
    let currentInter = 0;
    let goingInter = 0;
    let stopsCurrentLine;
    let stopsGoingLine;

    if (currentLine === 'N') {
        stopsCurrentLine = mta.lineN;
        currentInter = mta.lineN.indexOf('Union Square');
    }
    if (currentLine === 'L') {
        stopsCurrentLine = mta.lineL;
        currentInter = mta.lineL.indexOf('Union Square');
    }
    if (currentLine === '6') {
        stopsCurrentLine = mta.line6;
        currentInter = mta.line6.indexOf('Union Square');
    }
    const currentIndex = stopsCurrentLine.indexOf(currentStop);
    //console.log(currentIndex);
    //console.log(currentInter);

    if (goingLine === 'N') {
        stopsGoingLine = mta.lineN;
        goingInter = mta.lineN.indexOf('Union Square');
    }
    if (goingLine === 'L') {
        stopsGoingLine = mta.lineL;
        goingInter = mta.lineL.indexOf('Union Square');
    }
    if (goingLine === '6') {
        stopsGoingLine = mta.line6;
        goingInter = mta.line6.indexOf('Union Square');
    }
    const goingIndex = stopsGoingLine.indexOf(goingStop);
    //console.log(goingIndex);
    //console.log(goingInter);

    if (currentIndex === currentInter) {
        let numberStops = 0;
        let nameStops = [];
        if (goingIndex < goingInter) {
            for (let i = goingInter-1; i > goingIndex-1; i--) {
                numberStops++;
                nameStops.push(stopsGoingLine[i]);
            }
        } else if (goingIndex > goingInter) {
            for (let i = goingInter+1; i < goingIndex+1; i++) {
                numberStops++;
                nameStops.push(stopsGoingLine[i]);
            }
        }
        // console.log(`You must travel through the following stops on the ${goingLine} line: ${nameStops}.`);
        // console.log(`${numberStops} in total.`)
        return `You must travel through the following stops on the ${goingLine} line: ${nameStops.join(', ')}. ${numberStops} stops in total.`
    };
    if (goingIndex === goingInter) {
        let numberStops = 0;
        let nameStops = [];
        if (currentIndex < currentInter) {
            for (let i = currentIndex+1; i < currentInter+1; i++) {
                numberStops++;
                nameStops.push(stopsCurrentLine[i]);
            }
        }
        if (currentIndex > currentInter) {
            for (let i = currentIndex-1; i > currentInter-1; i--) {
                numberStops++;
                nameStops.push(stopsCurrentLine[i]);
            }
        }
        // console.log(`You must travel through the following stops on the ${currentLine} line: ${nameStops}.`);
        // console.log(`${numberStops} in total.`)
        return `You must travel through the following stops on the ${currentLine} line: ${nameStops.join(', ')}. ${numberStops} stops in total.`
    };
    if (currentLine !== goingLine && currentIndex < currentInter && goingIndex < goingInter) {
        let numberStops = 0;
        let nameStops = [];
        let nameStops2 = [];
        for (let i = currentIndex+1; i < currentInter+1; i++) {
            numberStops++;
            nameStops.push(stopsCurrentLine[i]);
        }
        for (let i = goingInter-1; i > goingIndex-1; i--) {
            numberStops++;
            nameStops2.push(stopsGoingLine[i]);
        }
        // console.log(`You must travel through the following stops on the ${currentLine} line: ${nameStops}.`);
        // console.log(`Change at ${stopsCurrentLine[currentInter]}.`);
        // console.log(`Your journey continues through the following stops: ${nameStops2}.`);
        // console.log(`${numberStops} in total.`)
        return `You must travel through the following stops on the ${currentLine} line: ${nameStops.join(', ')}. Change at ${stopsCurrentLine[currentInter]}. Your journey continues through the following stops: ${nameStops2.join(', ')}. ${numberStops} stops in total.`
    };
    if (currentLine !== goingLine && currentIndex > currentInter && goingIndex > goingInter) { 
        let numberStops = 0;
        let nameStops = [];
        let nameStops2 = [];
        for (let i = currentIndex-1; i > currentInter-1; i--) {
            numberStops++;
            nameStops.push(stopsCurrentLine[i]);
        }
        for (let i = goingInter+1; i < goingIndex+1; i++) {
            numberStops++;
            nameStops2.push(stopsGoingLine[i]);
        }
        // console.log(`You must travel through the following stops on the ${currentLine} line: ${nameStops}.`);
        // console.log(`Change at ${stopsCurrentLine[currentInter]}.`);
        // console.log(`Your journey continues through the following stops: ${nameStops2}.`);
        // console.log(`${numberStops} in total.`)
        return `You must travel through the following stops on the ${currentLine} line: ${nameStops.join(', ')}. Change at ${stopsCurrentLine[currentInter]}. Your journey continues through the following stops: ${nameStops2.join(', ')}. ${numberStops} stops in total.`
    };
    if (currentLine !== goingLine && currentIndex > currentInter && goingIndex < goingInter) { 
        let numberStops = 0;
        let nameStops = [];
        let nameStops2 = [];
        for (let i = currentIndex-1; i > currentInter-1; i--) {
            numberStops++;
            nameStops.push(stopsCurrentLine[i]);
        }
        for (let i = goingInter-1; i > goingIndex-1; i--) {
            numberStops++;
            nameStops2.push(stopsGoingLine[i]);
        }
        // console.log(`You must travel through the following stops on the ${currentLine} line: ${nameStops}.`);
        // console.log(`Change at ${stopsCurrentLine[currentInter]}.`);
        // console.log(`Your journey continues through the following stops: ${nameStops2}.`);
        // console.log(`${numberStops} in total.`)
        return `You must travel through the following stops on the ${currentLine} line: ${nameStops.join(', ')}. Change at ${stopsCurrentLine[currentInter]}. Your journey continues through the following stops: ${nameStops2.join(', ')}. ${numberStops} stops in total.`
    };
    if (currentLine !== goingLine && currentIndex < currentInter && goingIndex > goingInter) { 
        let numberStops = 0;
        let nameStops = [];
        let nameStops2 = [];
        for (let i = currentIndex+1; i < currentInter+1; i++) {
            numberStops++;
            nameStops.push(stopsCurrentLine[i]);
        }
        for (let i = goingInter+1; i < goingIndex+1; i++) {
            numberStops++;
            nameStops2.push(stopsGoingLine[i]);
        }
        // console.log(`You must travel through the following stops on the ${currentLine} line: ${nameStops}.`);
        // console.log(`Change at ${stopsCurrentLine[currentInter]}.`);
        // console.log(`Your journey continues through the following stops: ${nameStops2}.`);
        // console.log(`${numberStops} in total.`)
        return `You must travel through the following stops on the ${currentLine} line: ${nameStops.join(', ')}. Change at ${stopsCurrentLine[currentInter]}. Your journey continues through the following stops: ${nameStops2.join(', ')}. ${numberStops} stops in total.`
    };
    if (currentLine === goingLine && currentIndex < goingIndex) { 
        let numberStops = 0;
        let nameStops = [];
        for (let i = currentIndex+1; i < goingIndex+1; i++) {
            numberStops++;
            nameStops.push(stopsCurrentLine[i]);
        }
        // console.log(`You must travel through the following stops on the ${currentLine} line: ${nameStops}.`);
        // console.log(`${numberStops} stops in total.`)
        return `You must travel through the following stops on the ${currentLine} line: ${nameStops.join(', ')}. ${numberStops} stops in total.`
    };
    if (currentLine === goingLine && currentIndex > goingIndex) { 
        let numberStops = 0;
        let nameStops = [];
        for (let i = currentIndex-1; i > goingIndex-1; i--) {
            numberStops++;
            nameStops.push(stopsCurrentLine[i]);
        }
        // console.log(`You must travel through the following stops on the ${currentLine} line: ${nameStops}.`);
        // console.log(`${numberStops} in total.`)
        return `You must travel through the following stops on the ${currentLine} line: ${nameStops.join(', ')}. ${numberStops} in total.`
    };
}

function test(expected, actual) {
    if (actual !== expected) {
        console.error(`${actual} should be ${expected}`);
    }; 
    
}
test(planTrip ('N', 'Times Square', '6', '33rd'), 'You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square. Change at Union Square. Your journey continues through the following stops: 23rd, 28th, 33rd. 7 stops in total.');

test(planTrip ('N', '8th', '6', 'Astor Place'), 'You must travel through the following stops on the N line: Union Square. Change at Union Square. Your journey continues through the following stops: Astor Place. 2 stops in total.');

test(planTrip ('N', '8th', '6', '33rd'), 'You must travel through the following stops on the N line: Union Square. Change at Union Square. Your journey continues through the following stops: 23rd, 28th, 33rd. 4 stops in total.');

test(planTrip ('N', 'Times Square', '6', 'Astor Place'), 'You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square. Change at Union Square. Your journey continues through the following stops: Astor Place. 5 stops in total.');

test(planTrip ('L', '8th', 'L', '1st'), 'You must travel through the following stops on the L line: 6th, Union Square, 3rd, 1st. 4 stops in total.');

test(planTrip ('L', '1st', 'L', '8th'), 'You must travel through the following stops on the L line: 3rd, Union Square, 6th, 8th. 4 stops in total.');

test(planTrip ('L', 'Union Square', 'N', '34th'), 'You must travel through the following stops on the N line: 23rd, 28th, 34th. 3 stops in total.');

test(planTrip ('N', '34th', 'L', 'Union Square'), 'You must travel through the following stops on the N line: 28th, 23rd, Union Square. 3 stops in total.');

test(planTrip ('L', 'Union Square', 'N', '8th'), 'You must travel through the following stops on the N line: 8th. 1 stops in total.');

test(planTrip ('N', '8th', 'L', 'Union Square'), 'You must travel through the following stops on the N line: Union Square. 1 stops in total.');

const resultPlanTrip = planTrip('L', 'Union Square', 'N', '34th');
console.log(resultPlanTrip);