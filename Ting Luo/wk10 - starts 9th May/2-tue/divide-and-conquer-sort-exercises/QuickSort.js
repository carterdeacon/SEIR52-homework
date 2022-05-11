function quickSort(arr){
  // YOUR CODE HERE
  if(arr.length <= 1){
    return arr;
  }
  const left = [];
  const right = [];
  let pivot = arr[0];
  for ( let i =1; i< arr.length; i++){
    arr[i] < pivot? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}


module.exports = quickSort;