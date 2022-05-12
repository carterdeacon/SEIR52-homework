function mergeSort(arr) {
    let middleNum = Math.floor(arr.length / 2);
    // YOUR CODE HERE
    if (arr.length < 2) {
        return arr;
    } else {
        const array1 = arr.splice(0, middleNum);
        return merge(mergeSort(array1), mergeSort(arr));
    }
}

// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
    var result = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }

    return result.concat(arr1, arr2);
}

module.exports = mergeSort;
