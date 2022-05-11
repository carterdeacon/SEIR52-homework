// Doesn't work but close I think

function quickSort(arr){
  // BASE CASE
  if (arr.length <= 1) {
    return arr;
  }
  // RECURSIVE CASE
  const pivot = arr[arr.length -1];  // pivot - last element of the array
  const lessThanPivot = [];
  const moreThanPivot = [];
  for (let item in arr) {
    if (item <= pivot) {
      lessThanPivot.push(item);
    } else {
      moreThanPivot.push(item);
    };
  };

  return [...quickSort(lessThanPivot), pivot, quickSort(moreThanPivot)];

}

module.exports = quickSort;