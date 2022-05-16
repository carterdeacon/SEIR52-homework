function binarySearch(haystack, needle){
    let start =0; 
    let end = haystack.length -1;
    let midpoint = Math.floor((start + end) / 2);

    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    while( haystack[midpoint] !== needle && start < end){
        if(needle < haystack[midpoint]){
            end = midpoint -1;
        } else {
            start = midpoint + 1;
        }
        midpoint = Math.floor((start + end) / 2);
    }
    if (needle === haystack[midpoint]){
        return midpoint;
    } else{
        return -1;
    }
}

function recursiveBinarySearch(haystack, needle, start =0, end=haystack.length-1, midpoint=Math.floor((start+end)/2)){
    if(haystack[midpoint]=== needle)return midpoint;
    if (start>= end) return -1;
    if(needle < haystack[midpoint]){
        end = midpoint -1;
    }



    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}