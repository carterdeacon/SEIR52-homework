function quickSort (arr) {


  if (arr.lenght <=1){
    return arr;
  }

  // const pivot = arr.shift();




  const pivot = arr.shift();
  const lessThan =arr.filter(element = element <pivot);

  const moreThan = arr.filter(element => element >= pivot);

  // O(N)

  // const lessThan = []
  // const moreThan = []

  // arr.forEach((element) => {

  //   if (element < pivot) {
  //     lessThan.push(element);
  //   } else {

  //     moreThan.push(element);
  //   }   
  // });

  return [...quickSort(lessThan, ...quickSort(moreThan))]



  //O (2N)

 
}

module.exports = quickSort;