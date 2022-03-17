const allTrainInfo = [
    {
        name: "N",
        stops: ["Times Square", "34th", "N_28th", "N_23rd", "Union Square", "N_8th"]
    }, {
        name: "L",
        stops: ["L_8th", "6th", "Union Square", "3rd", "1st"]
    }, {
        name: "6",
        stops: ["Grand Central", "33th", "6_28th", "6_23rd", "Union Square", "Astor Place"],
    }
];

const planTrip = function (startLine, startStop, endLine, endStop) {
    //find the right start train index and end train index.
    // console.log(allTrainInfo)
    for (let i = 0; i < allTrainInfo.length; i++) {
        if (allTrainInfo[i].name === startLine) {
            startLineIndex = i;
        }
        if (allTrainInfo[i].name === endLine) {
            endLineIndex = i;
        }
    }
    //Give it a variable to the stops array and index
    const startTrainStopArray = allTrainInfo[startLineIndex].stops;
    const endTrainStopArray = allTrainInfo[endLineIndex].stops;
    const startStopIndex = startTrainStopArray.indexOf(startStop);
    const endStopIndex = endTrainStopArray.indexOf(endStop);
    // Case 1 :If we don't need to transfer
    if (startLineIndex === endLineIndex) {
        // Case 1 _ option 1 : train's direction to right
        if (startStopIndex < endStopIndex) {
            stopNum = endStopIndex - startStopIndex;
            stopArray = startTrainStopArray.slice(startStopIndex, endStopIndex + 1).join(", ");
            stopInfo = stopArray.toString();
            console.log(`You must travel the following stops on Line_${startLine}: ${stopInfo}.`);
            console.log(`There are ${stopNum + 1} stops in total!`);
        }
        // Case 1 _ option 2 : train's direction to left
        else {
            stopNum = startStopIndex - endStopIndex;
            startTrainStopArrayReverse = startTrainStopArray.reverse();
            startStopIndexReverse = endTrainStopArray.length - startStopIndex - 1;
            endStopIndexReverse = endTrainStopArray.length - endStopIndex - 1;
            stopArray = startTrainStopArrayReverse.slice(endStopIndexReverse, startStopIndexReverse + 1).join(", ");
            stopInfo = stopArray.toString();
            console.log(`You must travel the following stops on Line_${startLine}: ${stopInfo}.`);
            console.log(`There are ${stopNum} stops in total!`);
        }
    }
    // Case 2 :We do need to transfer!!
    else {
        // check the index of Union Square in both start train and end train
        for (let n = 0; n < startTrainStopArray.length; n++) {
            if (startTrainStopArray[n] === "Union Square") {
                startTrainTransitionIndex = n;
            }
        }
        for (let n = 0; n < endTrainStopArray.length; n++) {
            if (endTrainStopArray[n] === "Union Square") {
                endTrainTransitionIndex = n;
            }
        }
        if ((endTrainTransitionIndex - endStopIndex) > 0) { IsEndTripReverse = true } else { IsEndTripReverse = false };
        if ((startTrainTransitionIndex - startStopIndex) < 0) { IsStartTripReverse = true } else { IsStartTripReverse = false };
        // from start stop to transition stop + reverse situation!!!
        if (!IsStartTripReverse) {
            stopArrayFirst = startTrainStopArray.slice(startStopIndex, startTrainTransitionIndex + 1).join(", ");
            stopInfoFirst = stopArrayFirst.toString();
            stopNumFirst = startTrainTransitionIndex - startStopIndex;
        } else {
            startTrainStopArrayReverse = startTrainStopArray.reverse();
            startStopIndexReverse = startTrainStopArray.length - startStopIndex - 1;
            startTrainTransitionIndexReverse = startTrainStopArray.length - startTrainTransitionIndex - 1;
            stopArrayFirst = startTrainStopArrayReverse.slice(startStopIndexReverse, startTrainTransitionIndexReverse + 1).join(", ");
            stopInfoFirst = stopArrayFirst.toString();
            stopNumFirst = startStopIndex - startTrainTransitionIndex;
        }
        console.log(`You must travel through the following stops on the ${startLine} line: ${stopInfoFirst}.`);
        console.log(`Change at Union Square to ${endLine} line.`);
        // from transition stop to end stop + reverse situation!!!
        if (!IsEndTripReverse) {
            stopArraySecond = endTrainStopArray.slice(endTrainTransitionIndex + 1, endStopIndex + 1).join(", ");
            stopInfoSecond = stopArraySecond.toString();
            stopNumSecond = endStopIndex - endTrainTransitionIndex;
        } else {
            endTrainStopArrayReverse = endTrainStopArray.reverse();
            endTrainTransitionIndexreverse = endTrainStopArray.length - endTrainTransitionIndex - 1
            endStopIndexReverse = endTrainStopArray.length - endStopIndex - 1;
            stopArraySecond = endTrainStopArrayReverse.slice(endTrainTransitionIndexreverse + 1, endStopIndexReverse + 1).join(", ");
            stopInfoSecond = stopArraySecond.toString();
            stopNumSecond = endTrainTransitionIndex - endStopIndex;
        }
        console.log(`Your journey continues through the following stops: ${stopInfoSecond}.`);
        console.log(`${stopNumSecond + stopNumFirst} stops in total`);
    }
}

planTrip("N", "N_8th", "6", "33th");
planTrip("6", "Grand Central", "L", "L_8th");
planTrip("6", "Grand Central", "6", "6_23rd");


