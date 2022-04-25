//MTA Lab Joseph Hu
//Object containing lines as keys and arrays of stops as values.
const subwayMap = {
    N:["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L:["8th", "6th", "Union Square", "3rd", "1st"],
    6:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};

const planTrip = function(){

    //prompts user for line and station for start and destination.
    let l1 = prompt("Which line you are on? ");
    let d1 = prompt("Which station you are travelling from?");
    let l2 = prompt("Which line would you like to travel to? ");
    let d2 = prompt("Which station would you like to travel to? ") ;
    //checks if prompts are valid.
    if (l1 in subwayMap && subwayMap[l1].includes(d1)){
        if(l2 in subwayMap && subwayMap[l2].includes(d2)){
            //pass
        }
    }
    else{

        alert("Please enter a valid line and/or station!");
        planTrip();
    }

        let destMessage = `You must travel through the following stops on the ${l1} line: `
        let continueMessage = `Your journey continues through the following stops on the ${l2} line: `
        let stopCounter = 0;
        let line1 = subwayMap[l1];
        let line2 = subwayMap[l2];
        let unionSquareIndex1 = line1.indexOf("Union Square");
        let unionSquareIndex2 = line2.indexOf("Union Square");
        let d1Index = line1.indexOf(d1);
        let d2Index = line2.indexOf(d2);

        //if they are different lines they must pass through Union Square
        if (l1 != l2 && unionSquareIndex1){

            //if the start is before Union Square, loop foward until we reach Union Square
            if (d1Index  < unionSquareIndex1){
                for (i = d1Index +1 ; i <= unionSquareIndex1; i++){
                    if (i == unionSquareIndex1){
                        destMessage += line1[i];
                        destMessage += "."
                        stopCounter ++;
                    }
                    else{
                        destMessage += line1[i];
                        destMessage += ", ";
                        stopCounter ++;
                    }
                }
            }
            //if the destination is before Union Square on the destination line
            //Loop backwards from Union Square until we reach the destination.
            if (d2Index < unionSquareIndex2){
                for (i = unionSquareIndex2-1; i > 0; i--){
                    if (i == d2Index){
                        continueMessage += line2[i];
                        continueMessage += ".";
                        stopCounter ++;
                    }
                    else{
                        continueMessage += line2[i];
                        continueMessage += ", ";
                        stopCounter++;
                    }
                }
            }
            //If the start is after Union Square, loop backwards until we reach Union Square.
            if (d1Index > unionSquareIndex1){
                for (i = d1Index-1 ; i >= unionSquareIndex1; i--){
                    if (i == unionSquareIndex1){
                        destMessage += line1[i];
                        destMessage += ".";
                        stopCounter ++;
                    }
                    else{
                        destMessage += line1[i];
                        destMessage += ", ";
                        stopCounter++;
                    }
                }
            }
            //If the destination is after Union Square on the next line.
            //Loop fowards from Union Square until we reach the destination.
            if (d2Index > unionSquareIndex2){
                for (i = unionSquareIndex2+1 ; i <= d2Index; i++){
                    if (i == d2Index){
                        continueMessage += line2[i];
                        continueMessage += ".";
                        stopCounter ++;
                    }
                    else{
                        continueMessage += line2[i];
                        continueMessage += ", ";
                        stopCounter++;
                    }
                }
            }
            //if my start and destination are the same then i've already arrived.
            if (d1 == d2 && l1 == l2 || d1 == "Union Square" && d2 == "Union Square"){
                console.log("You are already here!")
                stopCounter = 0;
                return;
            }
            //If i start from Union square I change straight away.
            //So i don't need the initial travel message.
            if (d1Index == unionSquareIndex1){
                console.log("Change at Union Square.");
                console.log(continueMessage);
            }
            //If i arrive at UnionSquare on a different line i don't travel any futher.
            if (d2Index == unionSquareIndex2){
                console.log(destMessage);
                console.log("Change at Union Square.");
            }
            //else log the steps to get to Union Square and the steps after i leave.
            else{
                console.log(destMessage);
                console.log("Change at Union Square.");
                console.log(continueMessage);
            }
        }
        //if the start and destination are on the same line.
        else{
            //if the start is before the destination, loop forwards through the array.
            if(d1Index<d2Index){
                for (i = d1Index+1; i<=d2Index; i++){
                    if(i == d2Index){
                        destMessage += line1[i];
                        destMessage += ".";
                        stopCounter ++;
                    }
                    else{
                        destMessage += line1[i];
                        destMesage += ", "
                        stopCounter ++;
                    }
                }
            }
            //else if the desination is before the start, loop backwards through the array.
            else{
                for (i = d1Index+1; i>=d2Index; i--){
                    if (i == d2Index){
                        destMessage += line1[i];
                        destMessage += ".";
                        stopCounter ++;
                    }
                    else{
                        destMessage += line1[i];
                        destMessage += ", "
                        stopCounter ++;
                    }
                }
            }
            //if the user inputs the same start and estination.
            if (d1==d2 && l1 == l2){
                console.log("You are already here!")
                stopCounter = 0;
            }
        }
        console.log(`${stopCounter} stops in total.`);
        return;
}
planTrip();

