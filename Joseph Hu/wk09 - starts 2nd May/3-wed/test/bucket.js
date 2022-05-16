function bucketSort(items) {
    
    const bins ={}

  const longestDigits = `${Math.max(...items)}`.length
  console.log(longestDigits)
  let digitCount=1

  while(`${digitCount}`.length<=longestDigits){
      //lets you iterate each digit
      
        //gets the last digit and pushes it into the corresponding bin
      items.forEach((number)=>{
      let getLast = Math.trunc((number/digitCount))
      let lastDigit=Math.trunc(getLast%10)
      if (bins[lastDigit.toString()]){
        bins[lastDigit.toString()].push(number)
      }
      else{
        bins[lastDigit.toString()]=[]
        bins[lastDigit.toString()].push(number)
      }
    })
    console.log(bins)
  
    //temporary array
    let newArr = []

    //pushes bins in order into temporary array
    for (const bin in bins){ 
      bins[bin].forEach((number)=>{
          newArr.push(number)
          //clears the bin
          bins[bin] = []
      })
    }
    //increment to get next digit
    digitCount*=10

    //swap arrays
    items = newArr
  }

  return items;
}

// function bucketSort(items) {
//     const bins ={}
  
//     const longestDigits = `${Math.max(...items)}`.length
//     console.log(longestDigits)
//     let digitCount=1
  
//     while(`${digitCount}`.length<=longestDigits){
//         //lets you iterate each digit
        
//         //gets the last digit and pushes it into the corresponding bin
//     items.forEach((number)=>{
//     let getLast = Math.trunc((number/digitCount))
//     let lastDigit=Math.trunc(getLast%10)
//         if(bins[lastDigit.toString()]){
//             bins[lastDigit.toString()].push(number)
//         }
//         else{
//             bins[lastDigit.toString()] = []
//             bins[lastDigit.toString()].push(number)
//         }

//     })
        
//         //temporary array
//         let newArr = []
  
//         //pushes bins in order into temporary array
//         for (const bin in bins){ 
//             if(bins[bin].length!=0){
//                 console.log(bins[bin])
//                 bins[bin].forEach((number)=>{
//                     newArr.push(number)
//                     //clears the bin
//                     bins[bin] = []
//                 })
//             }
//         }
//         //increment to get next digit
//         digitCount*=10
  
//         //swap arrays
//         items = newArr

//         console.log(items)
//     }
  
//     return items;
  
// }
  

console.log(bucketSort([12,6,3,7,13,8]))