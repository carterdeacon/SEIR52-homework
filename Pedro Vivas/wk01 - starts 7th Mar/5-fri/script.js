//MTA Lab
let subway = {
    N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L: ["8th", "6th", "Union Square", "3rd", "1st"],
    6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

const planTrip = function(lineOn, stopOn, lineOff, stopOff) {
    const lineOnCopy = subway[lineOn].slice();
    const lineOffCopy = subway[lineOff].slice();
    const onIndex = lineOnCopy.indexOf(stopOn);
    const offIndex = lineOffCopy.indexOf(stopOff);
    const isSameLine = lineOn === lineOff;
    let tripStops = [];
    if (isSameLine) {
        let line = onIndex < offIndex ? lineOnCopy : lineOnCopy.reverse();
        let onInd = line.indexOf(stopOn);
        let offInd = line.indexOf(stopOff);
        tripStops = line.slice(onInd+1, offInd+1);
    } else {
        let unionLineOnIndex = lineOnCopy.indexOf("Union Square");
        let unionLineOffIndex = lineOffCopy.indexOf("Union Square");
        if (onIndex < unionLineOnIndex) {
            tripStops.push(lineOnCopy.slice(onIndex + 1, unionLineOnIndex + 1));
        } else {
            lineOnCopy.reverse();
            let firstStop = lineOnCopy.indexOf(stopOn) + 1;
            let transfer = lineOnCopy.indexOf("Union Square") + 1;
            tripStops.push(lineOnCopy.slice(firstStop, transfer));
        }
        if (unionLineOffIndex < offIndex) {
            let transferLine = lineOffCopy.slice(unionLineOffIndex + 1, offIndex + 1);
            tripStops.push(transferLine);
        } else {
            lineOffCopy.reverse();
            let firstStopSecLine = lineOffCopy.indexOf("Union Square") + 1;
            let destination = lineOffCopy.indexOf(stopOff) + 1;
            let transferLine = lineOffCopy.slice(firstStopSecLine, destination);
            tripStops.push(transferLine);
        }
    }
    let strRoute = ""
    if (isSameLine) {
        strRoute = `You must travel through the following stops on the ${lineOn} line: ${tripStops}\n
        ${tripStops.length} stops in total.`
    } else {
        strRoute = `You must travel through the following stops on the ${lineOn} line: ${tripStops[0]}.\n
        Change at Union Square.\n
        Your journey continues through the following stops: ${tripStops[1]}.\n
        ${tripStops[0].length + tripStops[1].length} stops in total.`
    }
    
    return strRoute;

}

//---------------------------------------------
// WITH NOTES

const planTripB = function(lineOn, stopOn, lineOff, stopOff) {
    //create a copy of the array of each line traveler got on and off. to keep data unchanged
    const lineOnCopy = subway[lineOn].slice();
    const lineOffCopy = subway[lineOff].slice();
    //finds index of stop where traveler got on/off in each line
    const onIndex = lineOnCopy.indexOf(stopOn);
    const offIndex = lineOffCopy.indexOf(stopOff);
    //sets varaible to add each stop the traveler went through
    const isSameLine = lineOn === lineOff;
    let tripStops = [];
    //finds route if traveler went on/off in same line
    if (isSameLine) {
        let line = onIndex < offIndex ? lineOnCopy : lineOnCopy.reverse();
        let onInd = line.indexOf(stopOn);
        let offInd = line.indexOf(stopOff);
        tripStops = line.slice(onInd+1, offInd+1);
    } else {
        //finds index of union square in each line
        let unionLineOnIndex = lineOnCopy.indexOf("Union Square");
        let unionLineOffIndex = lineOffCopy.indexOf("Union Square");
        //finds if travel is left to right or r to l
        //if true, copies stops traveled in lineOn until union square
        if (onIndex < unionLineOnIndex) {
            tripStops.push(lineOnCopy.slice(onIndex + 1, unionLineOnIndex + 1));
        } else {
            //if false, reverses line direction
            lineOnCopy.reverse();
            let firstStop = lineOnCopy.indexOf(stopOn) + 1;
            let transfer = lineOnCopy.indexOf("Union Square") + 1;
            tripStops.push(lineOnCopy.slice(firstStop, transfer));
        }
        //now it does the same with the second line
        //if left to right:
        if (unionLineOffIndex < offIndex) {
            let transferLine = lineOffCopy.slice(unionLineOffIndex + 1, offIndex + 1);
            tripStops.push(transferLine);
        } else {
            //if right to left:
            lineOffCopy.reverse();
            let firstStopSecLine = lineOffCopy.indexOf("Union Square") + 1;
            let destination = lineOffCopy.indexOf(stopOff) + 1;
            let transferLine = lineOffCopy.slice(firstStopSecLine, destination);
            tripStops.push(transferLine);
        }
    }
    let strRoute = ""
    if (isSameLine) {
        strRoute = `You must travel through the following stops on the ${lineOn} line: ${tripStops}\n
        ${tripStops.length} stops in total.`
    } else {
        strRoute = `You must travel through the following stops on the ${lineOn} line: ${tripStops[0]}.\n
        Change at Union Square.\n
        Your journey continues through the following stops: ${tripStops[1]}.\n
        ${tripStops[0].length + tripStops[1].length} stops in total.`
    }
    return strRoute;
}

//TEST CASES
//both same line left to right
console.log(planTrip("N", "34th", "N", "8th")); //sould be [28th, 23rd, Union Square, 8th]

//both same line right to left
console.log(planTrip("N", "8th", "N", "28th")); //should be [Union Square, 23rd, 28th]

//different lines, both left to right
console.log(planTrip("N", "34th", "L", "1st")); // N line array, L line array 
//should be [28th, 23rd,Union Square] + [3rd, 1st];

//different lines, both right to left
console.log(planTrip("N", "8th", "L", "8th")); // N line reverse array, L line reverse array
//should be [Union Square] + [6th, 8th]

//different lines, first left to right, second right to left
console.log(planTrip("N", "28th", "6", "Grand Central")); // N line array, 6 line reverse array

//different lines, first right to left, second left to right
console.log(planTrip("6", "Astor Place", "L", "1st")); // 6 line reverse array, L line array