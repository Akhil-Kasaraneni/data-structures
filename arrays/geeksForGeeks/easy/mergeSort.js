const mergeSort = (arr)=>{
    if(arr.length <=1) return arr
    const mid = Math.floor((arr.length)/2)
    return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)))
}

const merge = (arr1,arr2)=>{
    const arr1Len = arr1.length
    const arr2Len = arr2.length
    let i=j=0
    let res = []
    while(i <arr1Len && j < arr2Len){
        if(arr1[i] <= arr2[j]){
            res.push(arr1[i])
            i++
        }
        else {
            res.push(arr2[j])
            j++
        }
    }

    if(i<arr1.length) res.push(...arr1.slice(i))
    if(j<arr2.length) res.push(...arr2.slice(j))

    return res
}

console.log(mergeSort([10,9,8,7,6,5]))