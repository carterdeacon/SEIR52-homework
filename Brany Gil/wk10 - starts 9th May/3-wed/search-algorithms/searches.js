function binarySearch (haystack, needle) {


let start = 0;
let end = haystack.length - 1
let midpoint = Math.floor((start + end) / 2);

while (haystack[midpoint] !== needle && start < end) {
    if (needle < haystack[midpoint]) {

        end = midpoint - 1;

    } else {

        start = midpoint + 1;
    }

    midpoint = Math.floor((start + end) / 2);

    }
return (needle === haystack[midpoint]) ? midpoint : -1;
}

function recursiveBinarySearch(haystack,
    needle,
    start=0,
    end=haystack.length-1,
midpoint=Math.floor((start+end)/2) 
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}