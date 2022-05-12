function bubbleSort(array) {
	for (let i = 1; i < array.length; i++) {
		for (let j = 0; j < array.length - i; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	return array;
}

module.exports = bubbleSort;
