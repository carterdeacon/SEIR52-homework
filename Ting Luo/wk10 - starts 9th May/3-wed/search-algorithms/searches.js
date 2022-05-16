function binarySearch(arr, element){
    const sortedArr = arr.sort();
    let start = 0;
    let end = arr.length;
    while(start < end){
        let middle = Math.floor((end-start)/2 + start);
        if (sortedArr[middle]===element){
            return middle;
        }else if(sortedArr[middle] < element) {
            start = middle +1;
        }else{
            end = middle;
        }
    }
    return -1;

    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

function recursiveBinarySearch(arr, element, start=0, end=arr.length-1){
    while(start <= end) {
        let middle = Math.floor((end-start)/2+start);
        if (arr[middle]=== element){
            return middle;
        }else if (arr[middle] < element) {
            start = middle+1;
            recursiveBinarySearch(arr, element, start, end);
        }else{
            end = middle-1;
            recursiveBinarySearch(arr, element, start, end);
        }
    }
    return -1;
    }
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found



module.exports = {
    binarySearch,
    recursiveBinarySearch
}