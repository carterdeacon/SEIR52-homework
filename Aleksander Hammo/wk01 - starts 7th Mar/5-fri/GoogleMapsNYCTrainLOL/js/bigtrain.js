// prompt("Where are you getting on?'")
// const prompt("Where are you getting on?") = function {

// }

// prompt("Which line will you be using? E.g. '6' or 'Line N'"

    //const line = prompt("Where are you getting on?")

const start = "23rd"
const ending = "8th"

        const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
   
        const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
    
        const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

        const onLineN = function() {
            
            for (let i = 0; i < lineN.length; i++) {
                destination = lineN[i];
            }
            return destination   
        };
        
        const onLineL = function() {
            newArr = []
            for (let i = 0; i < lineL.length; i++) {
                destination = lineL[i];
                console.log(lineL[i])
            }
            return newArray
        };

        const onLine6 = function () {
            for (let i = 0; i < line6.length; i++) {
                destination = line6[i];
            }
            return destination
        };

        const passThrough = function (a, b) {
                
            for (let i = lineN.indexOf(start); i < lineN.length; i++) {
                    through = lineN[i];
            }
            return through
        };

    const stopsRange = function () {
            
            for (let i = 3;  i <= 5; i++) {
                middleStops = lineN[i];
            }
            return middleStops;
        };

                // const stopsRange = function () {
                //     for (let i = lineN.indexOf(start);  i < lineN.indexOf(ending); i++) {
                //         middleStops = lineN[i];
                //         }
                //     return middleStops;
                //     };

const beginning = lineN.indexOf(start); //console.log('/ ')

const dest = lineN.indexOf(ending);

const middleNew = lineN.indexOf(ending) - lineN.indexOf(start)

const stopsListAgain = lineN[lineN.indexOf(start)] + lineN[lineN.indexOf(middleNew)] + lineN[lineN.indexOf(ending)];

const stopsList = [lineN.indexOf(start), lineN.indexOf(ending)];

let destNStops = lineN.indexOf(onLineN()) - beginning; // why does this only work if i have () after onLineN?

let destL = lineL.indexOf(onLineL());

let dest6 = line6.indexOf(onLine6());

console.log(`Your trip will last ${destNStops} stops and you will pass through ${stopsListAgain} on the journey!`)


// let stopsList =  lineN.indexOf(passThrough()) - lineN.indexOf(start)

// let stopsList =  lineN.indexOf(passThrough()) - lineN.indexOf(start) 

// console.log(`Your trip will last ${destNStops} stops and you will pass through ${stopsRange(stopsList)} on the journey!`)

// console.log(stopsList)


    // const nStops = function (line) { //this gives you the name of the final stop

    //     if (line === lineN) {
    //         for (let i = 0; i < lineN.length; i++) {
    //         destination = lineN[i];
    //         }
    //         return destination
    //         }

    //     else if (line === lineL) {
    //         for (let i = 0; i < lineL.length; i++) {
    //             destination = lineL[i];
    //             }
    //         return destination
    //         }

    //     else if (line === line6) {
    //         for (let i = 0; i < line6.length; i++) {
    //             destination = line6[i];
    //             }
    //         return destination



    // const nStops = function () {
    //     function onLineN () {
    //         let currentStop = "";
    //         if (lineN) {
    //             for (let i = [0]; i < lineN.length; i++) {
    //             currentStop = lineN[i];
    //             }
    //             return currentStop

//         }
        
//         }
//     };
// nStops(lineN)

// NEED TO USE: indexOf ----- 

// console.table(newYork);
// for (let i = currentStop; i < newYork.length; i++) {
//     const currentStop = newYork.stops[i];
    
    
    // console.log(`You will travel ${currentStop.stops} ${}`)


// for (let i = 0; i < cuteCats.length; i++) {
//     const cat = cuteCats[i];

// const userJourney = function(lineStart, stationStart, lineEnd, stationEnd) {
//     if (lineStart) = "N Line"
// }


    // return lineN;
    // return lineL;
    // return line6;

// OBJECTIVE: Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at