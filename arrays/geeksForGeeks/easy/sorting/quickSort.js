const partition = (arr,low = 0, high=arr.length-1)=>{
    let i = low,j= high
    const pivot = arr[low]
    while(i<=j){
        while(arr[i]<=pivot) i++
        while(arr[j]>=pivot) j--
        if(i<j){
            swap(arr,i,j)
            i++
            j--
        }
    }
    swap(arr,low,j)
    return j
}

const swap=(arr,i,j)=>{
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const quickSort = (arr,low=0,high = arr.length-1)=>{
    if(low>=high ) return arr
    const partitionIndex = partition(arr,low,high)
    // console.log("partition..",arr)
    quickSort(arr,low,partitionIndex-1)
    quickSort(arr,partitionIndex+1,high)
    return arr
}
console.log(quickSort([17, 1, 5, 21, 2, 89, 4]))