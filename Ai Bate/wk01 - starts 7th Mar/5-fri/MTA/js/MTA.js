const nLine = [ "Time square" , "34th", "28th", "23rd", "Union Square", "8th"];
const lLine = [  '8th', '6th', 'Union Square', '3rd', '1st' ];
const sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square','Astor Place' ];

const planTrip = function (dl,ds,al,as){
    let startLineArr = (dl); // setting array variables
    let stopLineArr = (al);
    let countsStartStops; // how many stops were taken before changing line
    let countsSecondStops; // how many stops were taken before changing line
    if(dl === "N"){      //allocating  departure line array from input
        startLineArr= nLine
    }else if(dl === 'L'){
        startLineArr = lLine
    }else{
        startLineArr = sixLine 
    }
    if(al === "N"){     //allocating  arrival line array from input
        stopLineArr = nLine
    }else if(al === 'L'){
        stopLineArr = lLine
    }else{
        stopLineArr = sixLine
    }
    startIndex = (startLineArr.indexOf(ds)); // finding the index from array each stops 
    stopIndex =(stopLineArr.indexOf(as));
    if(dl===al){                    // if using single line only!!
        if(startIndex<stopIndex){   // if inbound
            console.log(`You must travel through the following stops on: ${dl} line ${startLineArr.slice(startIndex+1,stopIndex+1)}`);
            console.log(`${stopIndex-startIndex} stops in total.`);
        }else{ 
            console.log(stopLineArr.slice(stopIndex,startIndex))                    //if outbound
            console.log(`You must travel through the following stops on: ${al} line ${stopLineArr.slice(stopIndex,startIndex).reverse()}`);
            console.log(`${startIndex-stopIndex} stops in total.`);
        }
    }else if(dl === 'N' && al === 'L'){
        if( startIndex < 4 ){  // inbound union square has index 4 in L line
            console.log(`You must travel through the following stops on: ${dl} line ${startLineArr.slice(startIndex+1, 4)}`)
            countsStartStops = 4 - startIndex;
        }else{
        }
        console.log("Change at Union Square."); // arrived union square and changing line to L
        if( stopIndex > 2){ //inbound union square has index 2 in L line
            console.log(`Your journey continues through the following stops: ${al} line ${stopLineArr.slice(3,stopIndex+1)}`);
            countsSecondStops = stopIndex-2;
            console.log(`${countsStartStops+countsSecondStops} stops in total.`)
        }else{ // outbound 
            console.log(`Your journey continues through the following stops: ${al} line ${stopLineArr.slice(stopIndex,2).reverse()}`)
            countsSecondStops = 2-stopIndex;
            console.log(`${countsStartStops+countsSecondStops} stops in total.`);
        }
    }else if ( dl === 'N' && al === '6') {
        if( startIndex < 4 ){  // inbound union square has index 4 in L line
            console.log(`You must travel through the following stops on: ${dl} line ${startLineArr.slice(startIndex+1, 4)}`)
            countsStartStops = 4 - startIndex;
        }else{
        }
        console.log("Change at Union Square."); // arrived union square and changing line to L
        if( stopIndex > 4){ //inbound union square has index 4 in L line
            console.log(`Your journey continues through the following stops: ${al} line ${stopLineArr.slice(5,stopIndex+1)}`);
            countsSecondStops = stopIndex-4;
            console.log(countsStartStops,countsSecondStops);
            console.log(`${countsStartStops+countsSecondStops} stops in total.`)
        }else{ // outbound 
            
            console.log(`Your journey continues through the following stops: ${al} line ${stopLineArr.slice(stopIndex,2).reverse()}`)
            countsSecondStops = 2-stopIndex;
            console.log(`${countsStartStops+countsSecondStops} stops in total.`);
            }


    }
        
        

}

console.log(planTrip("N","8th", "L", '6th'));




























