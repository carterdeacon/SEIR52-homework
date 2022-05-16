function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function recursiveBinarySearch(arr, element) {
  //  search through the array recursively for the element
  let mid = Math.floor(arr.length / 2);
  // base case
  if (arr.length === 1 && arr[0] != element) {
    return -1;
  }
  if (arr[mid] === element) {
    return mid;
  } else if (element < arr[mid]) {
    return recursiveBinarySearch(arr.slice(0, mid), element);
  } else if (element > arr[mid]) {
    return recursiveBinarySearch(arr.slice(mid + 1), element);
  }
  //  you may need to add more parameters to this function!
  //  if the element is not found, return -1
  //  if the element is found, return the index at which it was found
}

module.exports = {
  binarySearch,
  recursiveBinarySearch,
};
