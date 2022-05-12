function quickSort(arr){
  // YOUR CODE HERE
  if (arr.length <= 1){
    return arr
  }
  const pivot = arr[0];
  const left = arr.filter(num => num < pivot);
  const right = arr.filter(num => num > pivot);
  return quickSort(left).concat([pivot]).concat(quickSort(right)) 
}

module.exports = quickSort;

