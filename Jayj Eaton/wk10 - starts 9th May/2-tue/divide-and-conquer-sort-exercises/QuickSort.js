function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const pivot = arr.shift();
	const lessThan = [];
	const moreThan = [];
	arr.forEach((element) => {
		if (element < pivot) {
			lessThan.push(element);
		} else {
			moreThan.push(element);
		}
	});

	return [...quickSort(lessThan), pivot, ...quickSort(moreThan)];
}

module.exports = quickSort;
