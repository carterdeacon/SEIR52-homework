function mergeSort(arr) {
  // YOUR CODE HERE
  const half = arr.length / 2;

  // base case if array length <= 1
  if (arr.length <= 1) {
    return arr;
  }

  const arr1 = arr.splice(0, half);
  const arr2 = arr;

  return merge(mergeSort(arr1), mergeSort(arr2));
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
