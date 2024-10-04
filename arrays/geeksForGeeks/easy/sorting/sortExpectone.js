// Sorting all array elements except one

// Input : arr[] = {10, 4, 11, 7, 6, 20}
//             k = 2;
// Output : arr[] = {4, 6, 11, 7, 10, 20}

// Input : arr[] = {30, 20, 10}
//          k = 0
// Output : arr[] = {30, 10, 20} 




const sortExceptOne = (arr,k)=>{
    const n = arr.length
    const temp = arr[k]
    arr[k] = arr[n-1]
    arr[n-1] = temp
    arr.pop()
    arr.sort((a,b)=>a-b)

    for(let i=arr.length;i>k;i--){
        arr[i] = arr[i-1]
    }
    arr[k] = temp
    return arr
}

console.log(sortExceptOne([30, 20, 10],0))
