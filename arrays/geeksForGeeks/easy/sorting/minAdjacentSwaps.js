// Minimum adjacent swaps required to Sort Binary array

// Given a binary array, task is to sort this binary array using minimum swaps. We are allowed to swap only adjacent elements



const minSwaps = (arr)=>{
    let finalCounter = 0
    let count = 0
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i] === 0) count ++
        else {
            finalCounter +=count
        }
    }
    console.log(finalCounter)
}

console.log(minSwaps([1, 1, 1, 1, 0]))