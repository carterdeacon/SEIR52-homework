

// The N line has the following stops: Times Square, 34th, 28th (On N), 23rd (On N), Union Square, and 8th (On N)
// The 6 line has the following stops: Grand Central, 33rd, 28th (On 6), 23rd (On 6), Union Square, and Astor Place.
// The L line has the following stops: 8th (On L), 6th, Union Square, 3rd, and 1st


// Helper function to remove '(On <linename>)' for the purpose of comparing input station names. e.g. '28th (On N)' returns '28th'

const removeStationSuffix = function (stnName) {
    if (stnName.includes('(')) {
        index = stnName.indexOf('(');
        return stnName.slice(0, index -1);
    } else {
        return stnName;
    };   
};

// Helper function to traverse the line array (forwards or backwards) and return an array of the stations visited.
const traverseLineArray = function(startIndex, endIndex, array) {
    const stationsVisited = [];
    if (startIndex < endIndex) {    // forwards
        for (let i = startIndex + 1; i <= endIndex; i++) {
            stationsVisited.push(array[i]); 
        };
    } else {     // backwards
        for (let i = startIndex - 1; i >= endIndex; i--) {
            stationsVisited.push(array[i]); 
        };
    };
    return stationsVisited;
};


const planTrip = function(startLineInput, startStation, endLineInput, endStation) {
    
    const lineN = ["Times Square", "34th", "28th (on N)", "23rd (on N)", "Union Square", "8th (on N)"];
    const line6 = ["Grand Central", "33rd", "28th (on 6)", "23rd (on 6)", "Union Square", "Astor Place"];
    const lineL = ["8th (on L)", "6th", "Union Square", "3rd", "1st"];
    const INTERCHANGE = "Union Square";
    let startLineArray;
    let endLineArray;
    let foundStart = false;
    let foundEnd = false;
    let stationsVisited = [];
    let outputMessage = `You must travel through the following stops on the ${ startLineInput } Line: `;


    // validate startLineInput from user and initialize startLineArray to the correct Array
    if (startLineInput === "N") {
        startLineArray = lineN;
    } else if (startLineInput === "L") {
        startLineArray = lineL;
    } else if (startLineInput === "6") {  
        startLineArray = line6;
    } else {
        return `Error: Line Name does not exist. (Use 'N', 'L' or '6')`;   // returns error and exits function
    };

     // validate endLineInput from user and initialize endLineArray to the correct Array
     if (endLineInput === "N") {
        endLineArray = lineN;
    } else if (endLineInput === "L") {
        endLineArray = lineL;
    } else if (endLineInput === "6") {
        endLineArray = line6;
    } else {
        return `Error: Line Name does not exist. (Use 'N', 'L' or '6')`;     // returns error and exits function
    };

   
    // Validates user-provided startStation and endStation input.
    // Re-assigns startStation and endStation to the full station name, including (On N/6/L) suffix, taken from the array.
 
    for (let stn of startLineArray) {
        if (removeStationSuffix(stn) === startStation) {
            startStation = stn;
            foundStart = true;
        };
    };

    for (let stn of endLineArray) {
        if (removeStationSuffix(stn) === endStation) {
            endStation = stn;
            foundEnd = true;
        };
    };

    if (!foundStart || !foundEnd) {
        return `Error: Station Name(s) do not exist on train line(s).`      // returns error and exists function
    };
    

    // JOURNEY 
    // Captures the array indexes of the start station and end station - required for traversing array
    const startStationIndex = startLineArray.indexOf(startStation);
    const endStationIndex = endLineArray.indexOf(endStation);

    // Single Line Journey:
    if (startLineArray === endLineArray) {
        stationsVisited = traverseLineArray(startStationIndex, endStationIndex, startLineArray);
        outputMessage += `${ stationsVisited.join(', ') }. \n${ stationsVisited.length } stops in total.`;

    }   else {                  
        // Multi Line Journey:
        // console.log("ARRRRGH!!");
        let interchangeIndex = startLineArray.indexOf(INTERCHANGE);

        //first leg of journey from Start Station to INTERCHANGE (Union Square):
        stationsVisited = traverseLineArray(startStationIndex, interchangeIndex, startLineArray);
        outputMessage += `${ stationsVisited.join(', ') }.`;
        outputMessage += `\nChange at ${ INTERCHANGE } to the ${ endLineInput } Line.`;

        // second leg of journey from INTERCHANGE (Union Square) to destination  - extends stationsVisited array
        interchangeIndex = endLineArray.indexOf(INTERCHANGE);
        stationsVisited = stationsVisited.concat(traverseLineArray(interchangeIndex, endStationIndex, endLineArray)); 
        
        const interchangeIdxStnVisited = stationsVisited.indexOf(INTERCHANGE);
        const stationsVisited2ndLegOnly = stationsVisited.slice(interchangeIdxStnVisited + 1);
        
        outputMessage += `\nYour journey continues through the following stops: `;
        outputMessage += `${ stationsVisited2ndLegOnly.join(', ') }. \n${ stationsVisited.length } stops in total.`;
    };

    return outputMessage;
};

console.log(planTrip("N", "Times Square", "6", "33rd"));












  

