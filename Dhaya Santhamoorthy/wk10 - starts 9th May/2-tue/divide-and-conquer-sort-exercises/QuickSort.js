function quickSort(arr) {
  // YOUR CODE HERE

  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];

  const smaller = arr.filter((item) => item < pivot);
  const bigger = arr.filter((item) => item > pivot);

  return quickSort(smaller).concat(pivot).concat(quickSort(bigger));
}

module.exports = quickSort;
