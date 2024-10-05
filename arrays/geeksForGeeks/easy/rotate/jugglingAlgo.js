const reverse = (arr,low = 0,high = arr.length -1)=>{
    if((high - low) <= 0) return arr
    let i=low,j = high
    while(i<j){
        const temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        i++
        j--
    }
    return arr
}


const rotate = (arr,d)=>{
    let n = arr.length
    console.log("n is ",n)
    reverse(arr, 0, n-d-1)
    reverse(arr,n-d, n-1)
    reverse(arr)
    console.log(arr)
    return arr
}

rotate([1,2,3,4,5],4)