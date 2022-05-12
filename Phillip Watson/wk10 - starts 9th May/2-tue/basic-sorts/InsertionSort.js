function insertionSort (items) {
  for (let i = 0; i < items.length; i++) {
    const start = items[i];

    for (var j = i-1; j >= 0 && items[j] > start; j--) {
      items[j+1] = items[j];
    }

    items[j+1] = start; 
  }

  return items;
}

module.exports = insertionSort;
