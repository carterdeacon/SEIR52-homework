function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn
    for (let i = 0; i < array.length; i++) {
    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.
        for (let j = 0; j < array.length-i-1; j ++) {
    // Make another loop (inside the first one) to go through one 
    // round of swapping from the start of the list to the end
            if (array[j] > array[j+1]){
    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.
                let value = array[j];
                array[j] = array[j+1];
                array[j+1] = value;
    // Make sure to keep track of whether a swap happened!
            }        
    // After both loops have exited, remember to return the array
        }
    }
    return array;
}

module.exports = bubbleSort;