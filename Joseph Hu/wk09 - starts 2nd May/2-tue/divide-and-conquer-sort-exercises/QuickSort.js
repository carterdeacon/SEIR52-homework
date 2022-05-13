function quickSort(arr){
  // YOUR CODE HERE
  //pick last item in array as pivot
  let pivot = arr[arr.length+1]
  let itemFromLeftIndex = {
    number: 0,
    index: 0
  }

  let itemFromRightIndex = {
    number: 0,
    index: 0
  }

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > pivot){
      itemFromLeftIndex = i
    }
  }

  for (let j=arr.length-1; j>=0; j-- ){
    if (arr[j] < pivot){
      itemFromRightIndex = j
    }
  }

  [arr[i], arr[j]] = [arr[j],arr[i]]
  
  console.log(arr)

}

module.exports = quickSort;