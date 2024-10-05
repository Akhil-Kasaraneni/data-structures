// Pairs with Difference less than K
const binarySearch = (arr,k, low= 0 ,high = arr.length -1)=>{
    const start = low
    while(low <= high){
        const mid = Math.floor((low+high)/2)
        if(arr[mid] < k) {
            low = mid+1
        }
        else if(arr[mid] >= k) {
            high = mid -1
        }
    }
    return low
}

const pairsWithDiffK = (arr,k)=>{
    arr.sort((a,b)=> a-b)
    console.log("ar is",arr)
    let count = 0
    for(let i=0;i<arr.length;i++){
        const pos = binarySearch(arr, arr[i] + k, i + 1, arr.length - 1);
        count += pos - (i + 1);
    }
    return count
}
// console.log(binarySearch([1,2,3,4,67],5))
console.log(pairsWithDiffK([1, 8, 7],7))



