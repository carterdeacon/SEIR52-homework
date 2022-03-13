// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



const  lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];


const planTrip = function () {
    let startLine = prompt("Enter your beginning line:");
    let startStation = prompt("Enter your beginning stop:");
    let stopLine = prompt("Enter your destination line:");
    let stopStation = prompt("Enter your destination stop:");


    let startPoint = []; //This array tells the name of the line and the index of the starting point
    let stopPoint = []; //This array tells the name of the line and the index of the stoping point

    if (startLine === "N") {
        startPoint[0] = "N";
        startPoint[1] = lineN.indexOf(startStation);
    }
    if (startLine === "L") {
        startPoint[0] = "L";
        startPoint[1] = lineL.indexOf(startStation);
    }
    
    if (startLine === "6") {
        startPoint[0] = "6";
        startPoint[1] = line6.indexOf(startStation);
    }  

    
    
    if (stopLine === "N") {
        stopPoint[0] = "N";
        stopPoint[1] = lineN.indexOf(stopStation);
    } 
    if (stopLine === "L") {
        stopPoint[0] = "L";
        stopPoint[1] = lineL.indexOf(stopStation);
    }
  

    if (stopLine === "6") {
        stopPoint[0] = "6";
        stopPoint[1] = line6.indexOf(stopStation);
    }

    if (startPoint[1] < 0 || stopPoint[1] < 0) {
        alert("The name of the start or stop station is not correct!");
        return 
    }
   
    
    let stops1 = []; //make an array for the all stops that are in the first line
    let stops2 = []; // make an array for the all stops that are in the second line
    // Journey for travles in one line   
    if (startPoint[0] === stopPoint[0]) {
        if (startPoint[0] === "N"){
            stops1 = lineN;;
        }
        if (startPoint[0] === "L"){
            stops1 = lineL;
        }
        if (startPoint[0] === "6"){
            stops1 = line6;
        }

        let stations = []; //an array to store the stops between staring and stoping point
        if (stopPoint[1] > startPoint[1]) {
            for (let i = startPoint[1]; i <= stopPoint[1]; i++){
                stations.push(stops1[i]);
                }            
            }
        else  {
            for (let i = startPoint[1]; i >= stopPoint[1]; i--) {
                stations.push(stops1[i]);
            }      
               
        }    
            console.log(`You must travel through the following stops on the ${startPoint[0]} line: ${stations.join(', ')}`);
            console.log(`${stations.length} stops in total.`)   

    }
    //Journey for travel on two lines
    else {
        if (startPoint[0] === "N"){
            stops1 = lineN;;
        }
        if (startPoint[0] === "L"){
            stops1 = lineL;
        }
        if (startPoint[0] === "6"){
            stops1 = line6;
        }

        if (stopPoint[0] === "N"){
            stops2 = lineN;
        }
        if (stopPoint[0] === "L"){
            stops2 = lineL;
        }
        if (stopPoint[0] === "6"){
            stops2 = line6;
        }

        let stations1 = []; //This array store the stope from the starting point to the Union Square on the first line. 
        if (startPoint[1] < stops1.indexOf("Union Square")) {
            for (let i = startPoint[1]; i <= stops1.indexOf("Union Square"); i++){
                stations1.push(stops1[i]);
                }
            console.log(`You must travel through the following stops on the ${startPoint[0]} line: ${stations1.join(', ')}`);
            }
        else  {
            for (let i = startPoint[1]; i >= stops1.indexOf("Union Square"); i--) {
                stations1.push(stops1[i]);
            } 
            console.log(`You must travel through the following stops on the ${startPoint[0]} line: ${stations1.join(', ')}`);
        }
        
        console.log("Change at Union Square.");

        let stations2 = []; //This array store the stope from the Union Square to the stopping point on the second line. 
        if (stopPoint[1] > stops2.indexOf("Union Square")) {
            for (let i = stops2.indexOf("Union Square"); i <= stopPoint[1] ; i++){
                stations2.push(stops2[i]);
                }            
            }
        else  {
            for (let i = stops2.indexOf("Union Square"); i >= stopPoint[1]; i--) {
                stations2.push(stops2[i]);
            }            
        }        
        stations2.shift();        
        console.log(`Your journey continue through the following stops on the ${stopPoint[0]} line: ${stations2.join(', ')}`);
        let numberOfStops = stations1.length + stations2.length;
        console.log(numberOfStops + " stops in total.");  
    }

};


