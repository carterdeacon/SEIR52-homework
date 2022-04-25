console.log(`The console is ready`);

const planTrip =  function( startLine, startingStop, endLine, endingStop) {    
    let resultString = "";
    let numberOfStopsInStartingLine = 0;
    let numberOfStopsInEndingLine = 0;

    const lines  = [
        {
            lineName : "N",
            lineStops : [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
        },
        {
            lineName : "L",
            lineStops : [ "8th" , "6th", "Union Square", "3rd", "1st" ]
        },        
        {
            lineName : "6",
            lineStops : [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
        }
    ];    
   
    const lineStopsArr = function (linesArr, line) {                                            // function to return all stops in a line as an array
        for ( const lineObj of linesArr ){
            if ( line === lineObj.lineName ) {
                return lineObj.lineStops;
            }
        }
    };

    const startingLineStopsArr =  lineStopsArr(lines, startLine);                               // function call to store all the stops in starting line as array   
    const endingLineStopsArr = lineStopsArr(lines, endLine);                                    // function call to store all the stops in ending line as array

    const stopsInStartLine = function (startingStop, lineArr) {                                 // function to get number of stops in starting line  
        if ( lineArr.indexOf(startingStop) > lineArr.indexOf("Union Square") ){                 // and return a string containing stops in starting line 
            lineArr = lineArr.reverse();                                                        // from starting stop (excluding) to "Union Square" (including)
        }             
        for ( let i = 0; i < lineArr.length; i++){
            if ( startingStop === lineArr[i] ){
                let slicedArr = lineArr.slice( i + 1, lineArr.indexOf("Union Square")+ 1 );
                numberOfStopsInStartingLine = slicedArr.length;
                let slicedArrAsString = slicedArr.join(", ");
                return slicedArrAsString
            }
        }
    };

    const stopsInEndLine = function (endingStop, lineArr) {                                     // function to get number of stops in ending line      
        if ( lineArr.indexOf("Union Square") > lineArr.indexOf(endingStop) ){                   // and return a string contiang stops in ending line 
            lineArr = lineArr.reverse();                                                        // from "Union Square" (excluding) to ending stop (including)
        }
        for ( let i = 0; i < lineArr.length; i++){
            if ( endingStop === lineArr[i] ){
                let slicedArr =  lineArr.slice( lineArr.indexOf("Union Square") + 1 , i + 1 );
                numberOfStopsInEndingLine = slicedArr.length;
                let slicedArrAsString = slicedArr.join(", ");
                return slicedArrAsString;
            }
        }
    };

    const stopsInStartingLine = stopsInStartLine(startingStop, startingLineStopsArr);           // function call to store all the stops in starting line as a string   
    const stopsInEndingLine = stopsInEndLine(endingStop, endingLineStopsArr);                   // function call to store all the stops in ending line as a string
    const totalStops = numberOfStopsInStartingLine + numberOfStopsInEndingLine;

    const startLineString = `You must travel through the following stops on the ${ startLine } line: ${ stopsInStartingLine }.`;
    const changeLineSting = `Change at Union Square.`
    const endLineString = `Your journey continues through the following stops: ${ stopsInEndingLine }.`;
    const totalStopsString = `${ totalStops } stops in total.`;

    resultString = startLineString + "\n" + changeLineSting + "\n" + endLineString + "\n" + totalStopsString;
    return resultString;    
};

console.log(planTrip('N', 'Times Square', '6', '33rd'));
console.log(planTrip('N', '8th', 'L', '1st'));
console.log(planTrip('L', '1st', '6', 'Grand Central'));
console.log(planTrip('6', 'Astor Place', 'N', 'Times Square'));
console.log(planTrip('6', '28th', 'N', '28th'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// MTA Lab using prompt () to get user input ////////////

const planTripWithPrompt =  function() {  
    const lines  = [
        {
            lineName : "N",
            lineStops : [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
        },
        {
            lineName : "L",
            lineStops : [ "8th" , "6th", "Union Square", "3rd", "1st" ]
        },        
        {
            lineName : "6",
            lineStops : [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
        }
    ];    

    
    let startLine = "";    
    while ( startLine.toUpperCase() !== "N" && startLine.toUpperCase() !== "L" && startLine.toUpperCase() !== "6" ){
        startLine = prompt(`Enter you starting line. Starting line should be N, L or 6`);
    };
    startLine = startLine.toUpperCase();

    const lineStopsArr = function (linesArr, line) {                                            // function to return all stops in a line as an array
        for ( const lineObj of linesArr ){
            if ( line === lineObj.lineName ) {
                return lineObj.lineStops;
            }
        }
    };

    const startingLineStopsArr =  lineStopsArr(lines, startLine);                               // function call to store all the stops in starting line as array  

    let startingStop = "";
    while ( !startingLineStopsArr.includes( startingStop )) {
        startingStop = prompt(`Enter your starting stop. Starting stop must be one of ${ startingLineStopsArr.join(", ") }`);
    };

    let endLine = "";
    while ( endLine.toUpperCase() !== "N" && endLine.toUpperCase() !== "L" && endLine.toUpperCase() !== "6" ){
        endLine = prompt(`Enter you ending line. Ending line should be N, L or 6`);
    };
    endLine = endLine.toUpperCase();

    const endingLineStopsArr = lineStopsArr(lines, endLine);                                    // function call to store all the stops in ending line as array

    let endingStop = ""; 
    while ( !endingLineStopsArr.includes( endingStop )) {
        endingStop = prompt(`Enter your ending stop. Ending stop must be one of ${ endingLineStopsArr.join(", ") }`);
    };


    let resultString = "";
    let numberOfStopsInStartingLine = 0;
    let numberOfStopsInEndingLine = 0;    

    const stopsInStartLine = function (startingStop, lineArr) {                                 // function to get number of stops in starting line  
        if ( lineArr.indexOf(startingStop) > lineArr.indexOf("Union Square") ){                 // and return a string containing stops in starting line 
            lineArr = lineArr.reverse();                                                        // from starting stop (excluding) to "Union Square" (including)
        }             
        for ( let i = 0; i < lineArr.length; i++){
            if ( startingStop === lineArr[i] ){
                let slicedArr = lineArr.slice( i + 1, lineArr.indexOf("Union Square")+ 1 );
                numberOfStopsInStartingLine = slicedArr.length;
                let slicedArrAsString = slicedArr.join(", ");
                return slicedArrAsString
            }
        }
    };

    const stopsInEndLine = function (endingStop, lineArr) {                                     // function to get number of stops in ending line      
        if ( lineArr.indexOf("Union Square") > lineArr.indexOf(endingStop) ){                   // and return a string contiang stops in ending line 
            lineArr = lineArr.reverse();                                                        // from "Union Square" (excluding) to ending stop (including)
        }
        for ( let i = 0; i < lineArr.length; i++){
            if ( endingStop === lineArr[i] ){
                let slicedArr =  lineArr.slice( lineArr.indexOf("Union Square") + 1 , i + 1 );
                numberOfStopsInEndingLine = slicedArr.length;
                let slicedArrAsString = slicedArr.join(", ");
                return slicedArrAsString;
            }
        }
    };

    const stopsInStartingLine = stopsInStartLine(startingStop, startingLineStopsArr);           // function call to store all the stops in starting line as a string   
    const stopsInEndingLine = stopsInEndLine(endingStop, endingLineStopsArr);                   // function call to store all the stops in ending line as a string
    const totalStops = numberOfStopsInStartingLine + numberOfStopsInEndingLine;

    const startLineString = `You must travel through the following stops on the ${ startLine } line: ${ stopsInStartingLine }.`;
    const changeLineSting = `Change at Union Square.`
    const endLineString = `Your journey continues through the following stops: ${ stopsInEndingLine }.`;
    const totalStopsString = `${ totalStops } stops in total.`;

    resultString = startLineString + "\n" + changeLineSting + "\n" + endLineString + "\n" + totalStopsString;
    return resultString;    
};

// console.log(planTripWithPrompt());