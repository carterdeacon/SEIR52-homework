// There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
const subway = {
    nLine: ['Times Square', '34th', '28thn', '23rdn', 'Union Square', '8thn'],
    lLine: ['8thl', '6th', 'Union Square', '3rd', '1st'],
    sixLine:['Grand Central', '33rd', '28ths', '23rds', 'Union Square', 'Astor Place']
}
let transitStop = 'Union Square';

//check which line the stop belongs to.
const lineCheck = function (stopName) {
    
    for (var element in subway) {
        for (i = 0; i < subway[element].length; i++) {
            if (stopName === subway[element][i] && stopName !== 'Union Square') {
                return element;
            }
            if (stopName === transitStop) {
                return transitStop;
            }            
        }
    }
};

// return true if change at Union Square.
const needTransit = function (start, destination)  {

    if (lineCheck(start) !== transitStop && lineCheck (destination) !== transitStop && lineCheck(start) !== lineCheck(destination)) {
        return true;
    }else{
        return false;
    }
}


// list a string showing all the stops between start and end stops.
const checkStopList = function (start, destination) {
    if (start === transitStop) {
        Line = subway[lineCheck(destination)];
        startIndex = Line.indexOf(transitStop);
        endIndex = Line.indexOf(destination);
    };

    if (destination === transitStop) {
        Line = subway[lineCheck(start)];
        startIndex = Line.indexOf(start);
        endIndex = Line.indexOf(transitStop);
    };
    
    if (startIndex < endIndex) {
        stopArray = Line.slice((startIndex + 1), (endIndex + 1));
        stopCount = stopArray.length;

    }else{
        stopArray = Line.slice(endIndex, (startIndex));
        stopCount = stopArray.length;
        stopArray.reverse();
    }    
    return stopArray;
}

// main function
const planTrip = function (start,destination) {
    let startLine = lineCheck(start);

    if (needTransit(start,destination)) {
        changeMessage = 'Change at Union Square\n';
        beforeTransit = checkStopList(start, transitStop);
        afterTransit = checkStopList (transitStop, destination);
        beforeTransitSummary = beforeTransit.join(', ');
        afterTransitSummary = afterTransit.join(', ');
        totalStopCount = afterTransit.length;

        console.log(`You must travle through the following stops on the ${startLine}: ${beforeTransitSummary}.`);
        console.log(`${changeMessage}Your journey continues through the following stops: ${afterTransitSummary} `);

    }else{
        stopList = checkStopList(start,destination);
        stopOutput = stopList.join(', ');
        totalStopCount = stopList.length;

        console.log(`You must travle through the following stops on the ${startLine}: ${stopOutput}.`);
    }
};

planTrip('8thl', 'Grand Central');
planTrip('Times Square', '33rd');
planTrip('Astor Place','Times Square');