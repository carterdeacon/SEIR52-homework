const data = [
  241, 511, 553, 775, 361, 232, 146, 836, 650,
  818, 520, 459, 413, 985, 967, 954, 274, 173,
  645, 503, 813, 377, 198, 228, 750, 714, 214,
  408, 707, 184, 317, 890, 623, 488, 856,  44,
  94, 793, 541, 244,  49, 830, 147, 370, 785,
  81, 605, 690, 207, 482
];

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
      buckets[Math.floor((item-smallest)/bucketSpan)].push(item);
    } else {
      buckets[bucketCount-1].push(largest);
    }
  });
  console.log("buckets:", buckets);
  // insertion sort each bucket
  function insertionSort (array) {
    for (let i = 1; i < array.length; i++) {
      
      if (array[i] < array[i-1]) {
        for (let j = i; j > 0; j--) {
          if (array[j] > array[j-1]) {
            break
          }
          const temp = array[j];
          array[j] = array[j-1];
          array[j-1] = temp;
        }
        
      }
    }
  }
  for (let i = 0; i < bucketCount; i++) {
    insertionSort(buckets[i]);
  }
  
  console.log("sorted buckets:", buckets);
  // join buckets
  items = buckets.flat();
  return items;
}
console.log("data to sort:", data);
console.log("sorted data:", bucketSort(data));

module.exports = bucketSort;
