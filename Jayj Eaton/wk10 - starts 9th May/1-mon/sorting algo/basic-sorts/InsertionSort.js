function insertionSort(items) {
	// Loop through each element
	for (let i = 1; i < items.length; i++) {
		let j = i - 1;
		let temp = items[i];
		while (j >= 0 && items[j] > temp) {
			items[j + 1] = items[j];
			j--;
		}
		items[j + 1] = temp;
	}
	return items;
}

module.exports = insertionSort;
