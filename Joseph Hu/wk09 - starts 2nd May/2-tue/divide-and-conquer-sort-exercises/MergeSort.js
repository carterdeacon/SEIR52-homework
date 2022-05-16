function mergeSort(arr) {
  // YOUR CODE HERE
  //base case: array is one element or shorter
  if (arr.length <= 1){
    return arr
  }

  //divide the array into two pieces
  let half = Math.floor(arr.length/2)

  let firstHalf = arr.slice(0, half)
  let secondHalf = arr.slice(half,arr.length)

  let sortedFirstHalf = mergeSort(firstHalf)
  let sortedSecondHalf = mergeSort(secondHalf)

  return merge(sortedFirstHalf, sortedSecondHalf)
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];
  //while first array and second array are longer than 0
  while (arr1.length && arr2.length) {
    //if the first item in array 1 is smaller than the first item in array2
    if(arr1[0] <= arr2[0]) {
      //push the first item in array 1 into the results array
      result.push(arr1.shift());
    } else {
      //if the first item in array 2 is smaller than the first item in array1, push it into array 1
      result.push(arr2.shift());
    }
  }
  //combine result with array1 and array 2
  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
