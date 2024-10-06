// Subarray with Given Sum

// Input: arr[] = { 15, 2, 4, 8, 9, 5, 10, 23}, sum = 23

const subArraySum = (arr,sum)=>{
    if(arr.length < 1) return null
    let count = arr[0]
    for(let i=0;i<arr.length;i++){
        count = arr[i]
        for(let j=i+1;j < arr.length;j++){
            count += arr[j]
            if(count === sum) {
                console.log("i and j are ",i,j)
                return
            }
        }
    }
}


subArraySum([15, 2, 4, 8, 9, 5, 10, 23],23)