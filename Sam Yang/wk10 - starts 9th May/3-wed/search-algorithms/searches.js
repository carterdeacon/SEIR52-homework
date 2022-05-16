function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    const sortedArr = arr.sort();
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let middle = Math.floor((start + end)/2);
        if (sortedArr[midpoint]===element){
            return midpoint;
        }else if(sortedArr[midpoint] < element) {
            start = midpoint +1;
        }else{
            end = midpoint -1;
        }
    }
    return -1;
}

function recursiveBinarySearch(arr, element){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}