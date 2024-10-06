const maxSumSubArray  = (arr,k) => {
    if(arr.length < k ) return arr.reduce((acc,el)=> acc + el, 0)
    let windowSum = 0
    for(let i=0;i<k;i++){
        windowSum += arr[i]
    }
    let maxSum = windowSum

    for(let i=k;i<arr.length;i++){
        windowSum+= arr[i] - arr[i-k]
        maxSum = Math.max(windowSum,maxSum)
    }
}

maxSumSubArray([1,2,3,4,5],3)