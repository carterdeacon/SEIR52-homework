function mergeSort(array) {
  if (array.length === 1) {
    // return once we hit an array with a single item
    return array;
  }


// Get the middle item of the array rounded down by creating a variable
const middle = Math.floor(array.length / 2);
// create a variable for the items on the left side
const left = array.slice(0, middle);
// create a variable for the items on the right
const right = array.slice(middle);

return merge(
  mergeSort(left),
  mergeSort(right)
  )
}

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if(left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++
    } else {
      result.push(right[indexRight]);
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

module.exports = mergeSort;
