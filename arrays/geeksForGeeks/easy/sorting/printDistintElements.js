const distintEls = (arr)=>{
    if(arr.length ===0) return
    const sortedArray = mergeSort(arr)
    // console.log("sorted Array ",sortedArray)
    let prevNumber = sortedArray[0]
    console.log(prevNumber)
    for (let i=1;i<sortedArray.length;i++){
        if(sortedArray[i] !== prevNumber) {
            console.log(sortedArray[i])
            prevNumber = sortedArray[i]
        }
        // console.log("prev Number ",prevNumber)
    }
}


const mergeSort = (arr)=>{
    if(arr.length <=1) return arr
    const mid = Math.floor(arr.length/2)
    return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)))   
}

const merge = (left,right)=>{
    let leftIndex = 0
    let rightIndex = 0
    const result = []
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex ++
        }else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

distintEls([1,2,3,1,31,41,31])