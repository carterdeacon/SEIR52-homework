function bucketSort(items) {
    // items.sort((a, b) => a - b);

    const min = Math.min(...items);
    const max = Math.max(...items);
    const numOfBuckets = Math.floor(Math.sqrt(items.length))
    const buckets = Array.from({ length: Math.floor((max - min) / numOfBuckets) + 1 }, () => [])

    items.forEach(num => {
        buckets[Math.floor((num - min) / numOfBuckets)].push(num)
    });

    return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);

}

module.exports = bucketSort;
