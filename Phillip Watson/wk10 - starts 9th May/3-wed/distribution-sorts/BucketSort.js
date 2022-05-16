const bucketSort = function(arr, n = arr.length) {
  let bucket = new Array(n);

    for(let i = 0; i < n; i++){
      bucket[i] = [];
    }

    for(let i = 0; i < n; i++){
      let bucketIndex = Math.floor(arr[i]) * n;
      bucket[bucketIndex].push(arr[i]);
    }

    for(let i = 0; i < n; i++){
      bucket[i].sort();
    }
    let index = 0;
    for(let i = 0; i < n; i++) {
      for(let j = 0, size = bucket[i].length; j < size; j++) {
        arr[index++] = bucket[i][j];
      }
    }

  return arr;
}

module.exports = bucketSort;
