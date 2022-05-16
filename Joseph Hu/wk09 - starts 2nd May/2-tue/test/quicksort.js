function quickSort(arr){

    if (arr.length<2){
        return 
    }
    else{

        let partitionPosition = partitionArray(arr)
        let sortFirstHalf = quickSort(arr.slice(0,partitionPosition))
        let sortSecondHalf = quickSort(arr.slice(partitionPosition+1, arr.length))
    }

}

function partitionArray(arr){
     // YOUR CODE HERE
    //pick last item in array as pivot
    let pivotindex = 0
    let pivot = arr[pivotindex]
    let itemFromLeftIndex = 0
    let itemFromRightIndex = 0
    let currenti = 1
    let currentj = arr.length


    while(currenti < currentj){
        
        for (let i = currenti; i < arr.length; i++){
            if (arr[i] > pivot){
                itemFromLeftIndex = i
                currenti = i
                break
            }
        }
    
        for (let j=currentj; j>=0; j-- ){
            if (arr[j] <= pivot){
                itemFromRightIndex = j
                currentj = j
                break
            }
        }
        console.log(arr)
        if (currenti > currentj){
            [arr[currentj], arr[pivotindex]] = [arr[pivotindex], arr[currentj]]
            console.log(arr)

            return currentj
        }

        [arr[itemFromLeftIndex], arr[itemFromRightIndex]] = [arr[itemFromRightIndex],arr[itemFromLeftIndex]]
    }

}

quickSort([10, 16, 8, 12, 15, 6, 3, 9, 5])