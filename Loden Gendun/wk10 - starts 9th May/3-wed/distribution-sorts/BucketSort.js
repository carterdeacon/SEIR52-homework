function bucketSort(items) {
  // prepare buckets
  const bucketCount = Math.ceil(Math.sqrt(items.length));
  const buckets = Array(bucketCount);
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // find range
  let smallest = items[0];
  let largest = items[0];
  items.forEach( item => {
    if (item < smallest) smallest = item;
    if (item > largest) largest = item;
  });
  const range = largest - smallest;
  const bucketSpan = range / bucketCount;

  // insert items into buckets suitable for their range
  items.forEach( item => {
    // largest item breaks formula so push it in individually
    if (item !== largest) {
      buckets[Math.floor((item-smallest)/bucketSpan)] .push(item);
    } else {
      buckets[bucketCount-1].push(largest);
    }
  });

  // insertion sort each bucket
  function insertionSort (array) {
    for (let i = 1; i < array.length; i++) {
      
      if (array[i] < array[i-1]) {
        for (let j = i; j > 0; j--) {
          
          if (array[j] > array[j-1]) {
            break
          }
          [array[j], array[j-1]] = [array[j-1], array[i]];
        }
        
      }
    }
  }
  for (let i = 0; i < bucketCount-1; i++) {
    insertionSort(buckets[i]);
  }

  // join buckets
  items = buckets.flat();
  return items;
}

module.exports = bucketSort;
