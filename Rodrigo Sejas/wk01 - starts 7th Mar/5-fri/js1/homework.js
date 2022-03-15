// Please commit this
// Try again
const subwayLines = {
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};

function getLineStopsFromLine(startStation, stopStation, lineStr) {
  let travelArr = [];
  const line = subwayLines[lineStr];
  let startIdx = line.indexOf(startStation);
  let stopIdx = line.indexOf(stopStation);
  if (startIdx > stopIdx) {
    let temp = stopIdx;
    stopIdx = startIdx;
    startIdx = temp;
    travelArr = line.slice(startIdx, stopIdx);
    travelArr.reverse();
  } else {
    travelArr = line.slice(startIdx + 1, stopIdx + 1);
  }
  return travelArr;
}

function planTrip(lineOn, stationOn, lineOff, stationOff) {
  if (lineOn !== lineOff) {
    const firstTravelArr = getLineStopsFromLine(
      stationOn,
      "Union Square",
      lineOn
    );
    const secondTravelArr = getLineStopsFromLine(
      "Union Square",
      stationOff,
      lineOff
    );
    const str = firstTravelArr.join(", ");
    const secondStr = secondTravelArr.join(", ");
    console.log(
      `You must travel through the following stops on the ${lineOn}: ${str}.`
    );
    console.log("Change at Union Square.");
    console.log(
      `Your journey continues through the following stops: ${secondStr}.`
    );
    console.log(
      `${firstTravelArr.length + secondTravelArr.length} stops in total.`
    );
  } else {
    const firstTravelArr = getLineStopsFromLine(stationOn, stationOff, lineOn);
    const str = firstTravelArr.join(", ");
    console.log(
      `You must travel through the following stops on the ${lineOn}: ${str}.`
    );
    console.log(`${firstTravelArr.length} stops in total.`);
  }
}
