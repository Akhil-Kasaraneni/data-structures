// Assume array is sorted...
function binarySearch(arr,search){
    if(search < arr[0] || search > arr[arr.length]) return -1
    let start = 0
    let end = arr.length
    while(start <= end){
        let middle = start+ Math.floor((end-start)/2)
        if(a[middle] ===search) return middle
        else {
            a[middle] > search ? end = middle - 1 : start = middle + 1
        }
    }
    return -1 
}

let a = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]

console.log(binarySearch(a,16))