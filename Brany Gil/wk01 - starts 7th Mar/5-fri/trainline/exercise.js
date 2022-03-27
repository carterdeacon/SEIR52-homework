// // Activity
// // Create a program that models a simple subway system.

// // The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// // const firstStop = 0;
// // const finalStop = 1;

const subway = {

    N:['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L:['8th', '6th', 'Union Square', '3rg', '1st'],
    '6':['Grand Central', '33rd', '28th', '23rd','Union Square', 'Astor Place']


}

let stopsCount = 0;

// const to check stops... go ahead or back to firstStop

const checkStopsline = function(line, firstStop, finalStop){
    const lineArray = subway[line];
    const stopsString ="";
    const startStationIndex = lineArray.indexOf(firstStop);
    const endStationIndex = lineArray.indexOf(finalStop);

    if (startStationIndex < endStationIndex){
        for (const i = startStationIndex +1; i<= endStationIndex; i++){
            stopsString += lineArray[i] + ",";
            stopsCount++;
        }
    }else {
        for (const i = startStationIndex - 1; i>= endStationIndex; i--){
            stopsString += lineArray[i] + ",";
            stopsCount++; 
     }
    }
    return stopsString;
}

function planTrip(startLine, firstStop, endLine, finalStop){
    stopsCount = 0;
if (startLine === endLine) {
const returnedStopsString = getStopString(startLine, firstStop, finalStop);
console.log("You must travel through the following stops on the " + startLine + " line: " + returnedStopsString + ".");

}else {

    const returnedStopsStringTrip1 = (startLine, firstStop, "Union Square");
    console.log("You must travel through the following stops on the " + startLine + " line: " + returnedStopsStringTrip1 + ".");
    console.log("Change at Union Square.");
}

const returnedStopsStringTrip2 = (startLine, "Union Square", finalStop);{
console.log("Your journey continues through the following stops on the " + endLine + ": " + returnedStopsStringTrip2 + ".");
}

console.log(stopsCount + "stops in total.")
    
}



// var lines = {
//     "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th",],
//     "L": ["8th", "6th", "Union Square", "3rd", "1st"],
//     "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astorce"]
//   }
//   var stopsCount = 0;
  
//   function getStopsString(line, startStop, endStop) {
//     var lineArray = lines[line];
//     var stopsString = "";
//     // SHIFT + ALT + DOWN/UP
//     var startStationIndex = lineArray.indexOf(startStop);
//     var endStationIndex = lineArray.indexOf(endStop);
  
//     if (startStationIndex < endStationIndex) { // Go forward
//       for (var i = startStationIndex + 1; i <= endStationIndex; i++) {
//         stopsString += lineArray[i] + ", ";
//         stopsCount++;
//       }
//     } else { // Go backward
//       for (var i = startStationIndex - 1; i >= endStationIndex; i--) {
//         stopsString += lineArray[i] + ", ";
//         stopsCount++;
//       }
//     }
//     return stopsString;
//   }
  
//   // "You must travel through the following stops on the X line: stop1, stop2, stop3, stop4."
//   // "4 stops in total."
//   function planTrip(startLine, startStop, endLine, endStop) {
//     stopsCount = 0;
  
//     if (startLine === endLine) {
//       var returnedStopsString = getStopsString(startLine, startStop, endStop);
//       console.log("You must travel through the following stops on the " + startLine + " line: " + returnedStopsString + ".")
//     } else {
//       // Trip 1 - startStop to Union Square
//       var returnedStopsStringTrip1 = getStopsString(startLine, startStop, "Union Square");
//       console.log("You must travel through the following stops on the " + startLine + " line: " + returnedStopsStringTrip1 + ".")
  
//       // Change at US
//       console.log("Change at Union Square.");
  
//       // Trip 2 - Union Square to endStop
//       var returnedStopsStringTrip2 = getStopsString(endLine, "Union Square", endStop);
//       console.log("Your journey continues through the following stops on the " + endLine + ": " + returnedStopsStringTrip2 + ".")
//     }
  
//     console.log(stopsCount + " stops in total.")
//   }



