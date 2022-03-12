const N =       [ "Times Square", "34th Street", "28th Street", "23rd Street", "Union Square", "8th Street"];
const L =       [ "8th Street", "6th Street", "Union Square", "3rd Street", "1st Street"];
const SIX =     ["Grand Central", "33rd Street", "28th Street", "23rd Street", "Union Square", "Astor Place"];
const mtaHub =  "Union Square"; 

const outputText = {
  mustTravel: "You must travel through the following stops on the",
  line: "line:",
  changeAt: "Change at Union Square.",
  continues: "Your journey continues through the following stops:",
  incDest: "including",
  colon: ":",
  stopsTotal: "Stops in total",
  nextDest: "Your destination is the next stop",
  USqNext: "Union Square is the next stop"
}

const calcMyTrip = function (line, startStation, endStation) {
  //NOTE: possible to imporove: how to express input arg 'line' as a variable array not a literal & can't have a const called 6. ideas? 
  if (line  === "N") { line = N; }; 
  if (line  === "L") { line  = L; }; 
  if (line  === "6") { line  = SIX; }; 
  let numberOfStops;
  let result = [];

  if ( line.indexOf(startStation) < line.indexOf(endStation)  ) {                                          //ascend the array
    numberOfStops = line.indexOf(endStation) - line.indexOf(startStation);
    for (let i = 0; i < line.indexOf(endStation) ;i++) {
        if ( i > line.indexOf(startStation) && i < line.indexOf(endStation) ) { 
          result.push(` ${ line[i] }`); 
        }
    }
  } else {                                                                                                 //descend the array 
    numberOfStops = line.indexOf(startStation) - line.indexOf(endStation); 
    for (let i = line.indexOf(startStation); i > line.indexOf(endStation); i-- ) {  
      if ( i < line.indexOf(startStation) && i > line.indexOf(endStation) ) { 
        result.push(` ${ line[i] }`); 
      }    
    }
  }
    result.push(numberOfStops);                                                                             //add number of stops to result array 
    return result; 
}

const myTrip = function (startLine, startStation, endLine, endStation) {
  let checkTrip; 
  let nStations;
  let response;
  let change = true;
 
  if (startLine === endLine) {  
    change = false;
  }
  if (!change) {
    let mustTrvl; 
    checkTrip = calcMyTrip(startLine, startStation, endStation);
    nStations = checkTrip[checkTrip.length - 1];
    checkTrip.pop();

      if (checkTrip.length === 0) {                                                                         // your dest is next stop
          mustTrvl = `${ outputText.nextDest }`;
      } else {
          mustTrvl = `${ outputText.mustTravel } ${ startLine } ${ outputText.line } ${ checkTrip }.`;
      }
        
    response = `${ mustTrvl } 
    \n${ outputText.stopsTotal } ${ outputText.incDest } ${ endStation }${ outputText.colon } ${ nStations }
    \n`;

  } else {
    let mustTrvl1st;
    let mustTrvl2nd;
    let firstHalf = calcMyTrip(startLine, startStation, mtaHub); 
    let secondHalf = calcMyTrip(endLine, mtaHub, endStation);
    let nStationsFirst = firstHalf[firstHalf.length - 1];
    firstHalf.pop();
    let nStationsSecond = secondHalf[secondHalf.length - 1];
    secondHalf.pop();
    let changeStationsTot = nStationsFirst + nStationsSecond; 

      if (firstHalf.length === 0) {
        mustTrvl1st = `${ outputText.USqNext }`;                                                               // Union is next stop 
      } else {
        mustTrvl1st = `${ outputText.mustTravel } ${ startLine } ${ outputText.line } ${ firstHalf }.`; 
      }
      if (secondHalf.length === 0) {
        mustTrvl2nd = `${ outputText.nextDest }`;                                                               // your dest is next stop from Union
      } else {
        mustTrvl2nd = `${ outputText.continues } ${ secondHalf } on line ${ endLine }`;
      }

    response = `${ mustTrvl1st } 
    \n${ outputText.stopsTotal } ${ outputText.incDest } ${ mtaHub }${ outputText.colon } ${ nStationsFirst } 
    \n${ outputText.changeAt }
    \n${ mustTrvl2nd }
    \n${ outputText.stopsTotal }${ outputText.colon } ${ changeStationsTot }`;   
  }
  return response;     
} 
                                                                     //unit tests ====> is ascending and <==== is descending    
//console.log(myTrip( "N", "34th Street", "N", "8th Street" ));      // ====>
//console.log(myTrip( "N", "Union Square", "N", "8th Street" ));     // ====>
//console.log(myTrip( "N", "34th Street", "N", "8th Street" ));      // ====>
//console.log(myTrip( "N", "23rd Street", "N", "34th Street" ));     // <====
//console.log(myTrip( "N", "8th Street", "N", "Times Square" ));     // <====
console.log(myTrip( "N", "Times Square", "N", "Union Square" ));   // ====>
//console.log(myTrip( "N", "Times Square", "N", "8th Street" ));     // ====>
//console.log(myTrip( "N", "23rd Street", "N", "8th Street" ));      // ====>
//console.log(myTrip( "L", "8th Street", "L", "1st Street" ));       // ====>
//console.log(myTrip( "L", "6th Street", "L", "3rd Street" ));       // ====>
//console.log(myTrip( "L", "1st Street", "L", "8th Street" ));       // <====
//console.log(myTrip( "L", "Union Square", "L", "8th Street" ));     // <====
//console.log(myTrip( "6", "Grand Central", "6", "Astor Place" ));   // ====>
//console.log(myTrip( "6", "33rd Street","6", "Union Square" ));     // ====>
//console.log(myTrip( "6", "Astor Place", "6", "Grand Central" ));   // <====
//console.log(myTrip( "6", "23rd Street", "6", "33rd Street" ));     // <====

console.log(myTrip( "6", "33rd Street", "N", "Times Square" ));    // multiple changes
//console.log(myTrip( "6", "28th Street", "N", "8th Street" ));      // multiple changes
//console.log(myTrip( "6", "23rd Street", "N", "8th Street" ));      // multiple changes