// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
const trainSystem = function (online, onstation, offline, offstation) {
	let arr = [];
	let arrEnd = [];
	let userOn = {};
	let startPoint = "";
	let userOff = {};
	let endPoint = "";
	lastCharEndPoint = "";
	lastCharStartPoint = "";
	const stopsArray = [];
	let finalStops = [];
	const trainLines = {
		nLine: {
			stations: ["Times Square n", "34th n", "28th n", "23rd n", "Union Square n", "8th n"],
		},
		lLine: {
			stations: ["8th l", "6th l", "Union Square l", "3rd l", "1st l"],
		},
		sLine: {
			stations: ["Grand Central s", "33rd s", "28th s", "23rd s", "Union Square s", "Astor Place s"],
		},
	};
	const lineOn = function (online) {
		if (online === "n") {
			userOn = trainLines.nLine;
			stationOn(onstation);
		} else if (online === "l") {
			userOn = trainLines.lLine;
			stationOn(onstation);
		} else if (online === "s") {
			userOn = trainLines.sLine;
			stationOn(onstation);
		} else {
			console.log("invalid train line does not exist");
			userOn = "invalid please try a train line that exists";
		}
	};
	const stationOn = function (onstation) {
		for (let i = 0; i < userOn.stations.length; i++) {
			let sliced = userOn.stations[i].slice(0, -2);

			if (onstation !== sliced) {
				startPoint = "not a valid station check stations for current line";
			} else if (onstation === sliced) {
				startPoint = userOn.stations[i];
				lineOff(offline);

				return startPoint;
			}
		}
	};
	const lineOff = function (offline) {
		if (offline === "n") {
			userOff = trainLines.nLine;
			stationOff(offstation);
		} else if (offline === "l") {
			userOff = trainLines.lLine;
			stationOff(offstation);
		} else if (offline === "s") {
			userOff = trainLines.sLine;
			stationOff(offstation);
		} else {
			console.log("invalid train line does not exist");
			userOff = "invalid please try a train line that exists";
		}
	};
	const stationOff = function (offstation) {
		for (let i = 0; i < userOff.stations.length; i++) {
			let sliced = userOff.stations[i].slice(0, -2);

			if (offstation !== sliced) {
				endPoint = "not a valid station check stations for that line";
			} else if (offstation === sliced) {
				endPoint = userOff.stations[i];
				travelLine(startPoint, endPoint);
				return endPoint;
			}
		}
	};
	// if they change lines this function runs
	//  ---- i need to refactor this part to create new array where it is reversed i thought the ++ and -- would work but it doesnt ----
	const changedTrains = function () {
		if (arrEnd.indexOf(endPoint) < arrEnd.indexOf(`Union Square ${lastCharEndPoint}`)) {
			for (let i = arrEnd.indexOf(endPoint); i <= arrEnd.indexOf(`Union Square ${lastCharEndPoint}`); i++) {
				cutStops = arrEnd[i];
				stopsArray.push(cutStops); // might be able to just push to new array if start is higher then union sqr then join arrays
			}
		}
		if (arrEnd.indexOf(endPoint) > arrEnd.indexOf(`Union Square ${lastCharEndPoint}`)) {
			console.log("here > end");
			for (let i = arrEnd.indexOf(endPoint); i >= arrEnd.indexOf(`Union Square ${lastCharEndPoint}`); i--) {
				cutStops = arrEnd[i];
				stopsArray.push(cutStops);
			}
		}
	};
	const travelLine = function (startPoint, endPoint) {
		arr = userOn.stations;
		arrEnd = userOff.stations;
		lastCharStartPoint = startPoint.charAt(startPoint.length - 1);
		lastCharEndPoint = endPoint.charAt(endPoint.length - 1);

		if (arr.indexOf(startPoint) < arr.indexOf(endPoint) && lastCharStartPoint === lastCharEndPoint) {
			for (let i = arr.indexOf(startPoint); i <= arr.indexOf(endPoint); i++) {
				cutStops = arr[i].slice(0, -2);
				stopsArray.push(`${cutStops}, `);
			}
			// console.log(`you stopped ${stopsArray.length - 1} times and your stops were ${stopsArray.toString()}`);
		} else if (arr.indexOf(startPoint) > arr.indexOf(endPoint) && lastCharStartPoint === lastCharEndPoint) {
			for (let i = arr.indexOf(startPoint); i >= arr.indexOf(endPoint); i--) {
				cutStops = arr[i].slice(0, -2);
				stopsArray.push(`${cutStops}, `);
			}
			// ----this is start of change lines------
		} else if (lastCharStartPoint !== lastCharEndPoint) {
			if (arr.indexOf(startPoint) < arr.indexOf(`Union Square ${lastCharStartPoint}`)) {
				for (let i = arr.indexOf(startPoint); i <= arr.indexOf(`Union Square ${lastCharStartPoint}`); i++) {
					cutStops = arr[i];
					stopsArray.push(cutStops);
				}
				changedTrains();
			}
			if (arr.indexOf(startPoint) > arr.indexOf(`Union Square ${lastCharStartPoint}`)) {
				for (let i = arr.indexOf(startPoint); i >= arr.indexOf(`Union Square ${lastCharStartPoint}`); i--) {
					cutStops = arr[i];
					stopsArray.push(cutStops);
				}
				changedTrains();
			}
		}
	};
	lineOn(online);
	//	----- final loop/array for all stations including on and off needs refactor for reverse off stations-----
	for (let i = 0; i < stopsArray.length; i++) {
		dandy = stopsArray[i].slice(0, -2);
		finalStops.push(` ${dandy}`);
	}
	// ------- should fix the bug removing matching stations except for union sqr ----
	union = " Union Square";
	lastElement = finalStops[finalStops.length - 1];
	if (lastElement === union) {
		finalStops.pop();
		if (onstation === "Union Square") {
			finalStops.push(" Union Square");
		}
		if (offstation === "Union Square") {
			finalStops.push(" Union Square");
		}
	}
	// 		----- final logs -----
	console.log(`You boarded the train at ${startPoint}`);
	console.log(`you exited the train at ${endPoint}`);
	console.log(`your trip was ${finalStops.length} stops long and your stops were,${finalStops}`);
};
trainSystem("n", "Times Square", "s", "Grand Central");
trainSystem("l", "6th", "n", "28th");
trainSystem("l", "8th", "l", "1st");
// nLine stations: Times Square, 34th, 28th, 23rd, Union Square, 8th
// lLine stations: 8th, 6th, Union Square, 3rd, 1st
// sLine stations: Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place
