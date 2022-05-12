function binarySearch(arr, element) {
	//  search through the array non-recursively for the element

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			return i;
		}
	}
	return -1;
	//  if the element is not found, return -1
	//  if the element is found, return the index at which it was found
}

function recursiveBinarySearch(arr, element) {
	//  search through the array recursively for the element
	//  you may need to add more parameters to this function!
	//  if the element is not found, return -1
	//  if the element is found, return the index at which it was found
}

module.exports = {
	binarySearch,
	recursiveBinarySearch,
};
