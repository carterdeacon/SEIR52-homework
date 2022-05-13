function bucketSort(items) {
  // init vars for min, max and length
  const min = Math.min(...items);
  const max = Math.max(...items);
  const n = items.length;
  let bucket = new Array(n);
  // If empty return
  if (items.length === 0) {
    return items;
  }
  // create empty buckets
  for (let i = 0; i < n; i++) {
    bucket[i] = [];
  }
  // add items to buckets
  for (let i = 0; i < n; i++) {
    let bucketIndex = Math.floor(items[i]) * n;
    bucket[bucketIndex].push(arr[i]);
  }
  // sort buckets individually
  for (let i = 0; i < n; i++) {
    bucket[i].sort();
  }
  // concat buckets - still todo
  return items;
}

module.exports = bucketSort;
