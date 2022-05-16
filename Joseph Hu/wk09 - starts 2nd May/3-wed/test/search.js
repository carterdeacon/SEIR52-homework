function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let matched = 0
    let arrCopy = arr
    let lowIndex = 0
    let highIndex = arrCopy.length-1
    let midIndex =  Math.floor((lowIndex+highIndex)/2)
    while(!matched){

        console.log(arrCopy)
        console.log('low ',lowIndex)
        console.log('high ',highIndex)
        console.log('mid ',midIndex)

        if (arr[midIndex] === element){
            console.log('matched')
            matched = true
        }
        else if(highIndex<lowIndex){
            console.log('not found')
            matched = true
        }
        else if (element > arr[midIndex]){
            console.log('greater')
            arrCopy = arrCopy.slice(midIndex+1)
            lowIndex = midIndex+1
            midIndex = Math.floor((lowIndex+highIndex)/2)
        }
        else{
            console.log('lower')
            arrCopy = arrCopy.slice(0,midIndex+1)
            highIndex = midIndex-1
            midIndex = Math.floor((lowIndex+highIndex)/2)
        }
    }
    return arr.indexOf(element)
}

console.log(binarySearch([3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62], 53))