function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    let first = 0;
    let last = arr.length -1;

    while (first <= last) {  
        midpoint = Math.floor((first + last) /2);
        if (arr[midpoint] === element) {
            return midpoint;
        } else if (arr[midpoint] < element) {
            first = midpoint + 1;
        } else {
            last = midpoint -1;
        };
    };
    return -1;
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
};


// THIS IS AS FAR AS I GOT WITH RECURSIVE BEFORE RESORTING TO YOUTUBE HELP!

// function recursiveBinarySearch(arr, element, start=0, end=arr.length-1){
//
//     if (start <= end) {
//         return -1;
//     };
    
//     const midpoint = Math.floor(arr.length /2);

//     if (arr[midpoint] === element) {
//       return midpoint }
//     else if (element < arr[midpoint]) {
//       return recursiveBinarySearch(arr, element, start, midpoint - 1);
//     } else {
//       return recursiveBinarySearch(arr, element, midpoint + 1, end);
//     }
 
// }
  
  
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

function recursiveBinarySearch (arr, element) {
    return binarySearchHelper (arr, element, 0, arr.length -1)
}

function binarySearchHelper (arr, element, left, right) {
    if (left > right) {
        return -1;
    };
    let mid = Math.floor((left + right) / 2);
    if (element === arr[mid]) {
        return mid;
    } else if (element < arr[mid]) {
        return binarySearchHelper(arr, element, left, mid -1);
    } else {
        return binarySearchHelper(arr, element, mid + 1, right);
    };
};

module.exports = {
    binarySearch,
    recursiveBinarySearch
}



