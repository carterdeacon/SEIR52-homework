function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let lowIndex = 0
    let midIndex =  Math.floor((arr.length)/2)
    let arrCopy = arr

    console.log(arr);
    console.log("array midpoint value: " + arr[midIndex]);


    if (arr.length === 1 && lowIndex != element){
        return -1
    }
    else if(arr[midIndex]==element){
        return midIndex
    }
    else if (element < arr[midIndex]){
        
        arrCopy = arr.slice(lowIndex, midIndex)

        return binarySearch(arrCopy, element)
    }
    else{
        arrCopy = arr.slice(midIndex+1)
        return binarySearch(arrCopy, element)
    }
    
}


console.log(binarySearch([1, 3, 5, 7, 9], 5))

