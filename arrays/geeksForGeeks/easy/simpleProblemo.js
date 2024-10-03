// Problem: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.


function largestConsequitive(arr){
    if(arr.length ==1) return 1
    arr.sort((a,b)=>a-b)

    let maxCount = -1
    let counter = 1
    for(let i=1;i<arr.length;i++){
        if(arr[i] == (arr[i-1]+1)){
            counter ++
        }
        else {
            maxCount = Math.max(counter,maxCount)
            counter = 1
        }
    }

    return maxCount
}

function example2(arr){
    const set = new Set(arr)
}

console.log(largestConsequitive( [100, 4, 200, 1, 3, 2]))
