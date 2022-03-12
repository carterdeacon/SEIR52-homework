// SUBWAY object holds line arrays of stops.
const subway = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// HELPER FUNCTIONS---------------------------------------------------------------------------
const changeRequired = function(lineAt, lineDest) {
    return lineAt != lineDest; // return true if commuter not on the line of their destination
};

// Determines whether iterator increments or decrements
const direction = function(commuter, nextStop) {
    const line = commuter.line;
    if (subway[line].indexOf(commuter.position) < subway[line].indexOf(nextStop)) {
        return 1;
    };
    return -1;
};

// Determines whether commuter has reached their next stop.
const tripOver = function(i, commuter, nextStop) {
    const line = commuter.line;
    if (direction(commuter, nextStop) > 0) {
         return i > subway[line].indexOf(nextStop);
    }
    return i < subway[line].indexOf(nextStop);
};

// Determines if commuter has reached their destination.
let destinationReached = function(commuter, lineOff, stopOff) {
    return commuter.line === lineOff && commuter.position === stopOff;
};
//--------------------------------------------------------------------------------------------

// MAIN FUNCTION--------------------------------------------------------------------------------------------------
const planTrip = function(lineOn, stopOn, lineOff, stopOff) {
    
    // Variables
    let changeOccured = false;
    let stopCount = 0;
    let stopsToTravel;
    let nextStop;
    
    // Keeps tracks of commuters line and position.
    let commuter = { 
        line: lineOn,
        position: stopOn
    };

    // Travel function moves commuter along train line to their next stop. 
    const travel = function(commuter, nextStop) {
        stopsToTravel = []; // Set new trip
    
        const line = commuter.line;
        const startPoint = subway[line].indexOf(commuter.position) + direction(commuter, nextStop)

        for (let i = startPoint; !tripOver(i, commuter, nextStop); i = i + direction(commuter, nextStop)) {
            commuter.position = subway[line][i];
            stopsToTravel.push(commuter.position);
        };

        stopCount += stopsToTravel.length; // Add stops travelled to stopCount.

        stopsToTravel = stopsToTravel.join(', '); // Convert stopsToTravel array to string for output.
    };
    
    // check if destination is on another line
    if (changeRequired(lineOn, lineOff)) {
        nextStop = 'Union Square';
    } else {
        nextStop = stopOff;
    };

    // Travel until commuter has reached their destination.
    while(!destinationReached(commuter, lineOff, stopOff)) {

        // Moves commuter from current position to their next stop.
        travel(commuter, nextStop);
        
        if (!changeOccured) {
            const output = `You must travel through the following stops on the ${lineOn} line: ${stopsToTravel}.`;
            console.log(output);
            if (changeRequired(lineOn, lineOff)) {
                console.log("Change at Union Square.");
            };
        } else {
            const output = `Your journey continues through the following stops: ${stopsToTravel}.`;
            console.log(output);
        };
        
        // Conditional for changing lines.
        if(commuter.line != lineOff) {
            commuter.line = lineOff;
            changeOccured = true;
        };
        if (nextStop != stopOff) {
            nextStop = stopOff;
        };
    };
    console.log(`${stopCount} stops in total.`);
};
//----------------------------------------------------------------------------------------------------------------