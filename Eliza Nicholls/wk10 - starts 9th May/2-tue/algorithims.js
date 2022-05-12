

function bucketSort(arr){
    const testArray = [12, 6, 3, 6, 13, 8]
    let myBuckets= Math.sqrt(testArray.length)
    let bum = Math.round(myBuckets)
    console.log(bum + " buckets")

    //use largest number and smallest number to get a range like, 1-9 && 10-20
    //make these the bucket arrays.
    //numbers that match their range go into that array.


    //put them back into an array sorted.
    
  }
  bucketSort();
  // Test Script below, DO NOT TOUCH 
  
//   mocha.setup('bdd');
//   const expect = chai.expect;
  
//   describe('Bucket Sort', ()=>{
//     it('should sort the array', ()=>{
//       const myArray = [12,6,3,7,13,8];
//       const sorted = bucketSort(myArray);
//       expect(sorted).to.deep.equal([3,6,7,8,12,13]);
//       const otherArray = [-3, -1, 5, 100];
//       const otherSorted = bucketSort(otherArray);
//       expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
//     })
//   })
  
//   mocha.run()