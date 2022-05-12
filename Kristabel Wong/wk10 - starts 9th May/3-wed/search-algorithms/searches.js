function binarySearch(arr, element) {
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found



    // return arr.indexOf(element); is this cheating?



    // for (let i = 0; i < arr.length; i++) {  // passes both test but don't think thats what a binary search is?
    //     if (arr[i] === element) {
    //         return i;
    //     }
    // }

    // return -1;

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // we do start and end - so the walls are closing in
        if (arr[mid] === element) {
            return mid;
        } else if (arr[mid] < element) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }

    return -1;

}


function recursiveBinarySearch(arr, element) {
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    let mid = Math.floor(arr.length / 2)

    // base case
    if (arr.length === 1 && arr[0] !== element) {
        return -1;
    }

    if (element === arr[mid]) {
        return mid;
    } else if (element < arr[mid]) {  // look left
        return recursiveBinarySearch(arr.slice(0, mid), element);
    } else if (element > arr[mid]) { // look right
        return recursiveBinarySearch(arr.slice(mid), element);
    }


}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}