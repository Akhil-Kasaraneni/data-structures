// // const arr = [ 1,1, 1, 1, 0, 0, 0];


// // const binarySearch = (arr,num)=>{
// //     let low = 0
// //     let high = arr.length - 1
// //     let lastPos = -1
// //     while(low <=high){
// //         mid = Math.floor((low+high)/2)
// //         if(arr[mid] == num){
// //             lastPos =  mid
// //             low = mid +1
// //         }
// //         else if (arr[mid] < num){
// //             high = mid -1
// //         }
// //         else{
// //             low = mid + 1
// //         }
// //     }
// //     return lastPos
// // }


// // console.log(binarySearch(arr,1)+1)


// const findRepeatNum = (arr)=>{
//     const map = new Map()

//     let min = Infinity
//     arr.forEach((el,index) => {
//         if(map.has(el)){
//             min = Math.min(min,map.get(el))
//         }else {
//             map.set(el,index)
//         }
//     });
//     return isFinite(min) ? min : -1
// }
// // console.log(findRepeatNum([10, 5, 3, 4, 4, 3, 5, 6]))
// // console.log(findRepeatNum([1,2,3,4]))

// const mergeSort = (arr)=>{
//     if(arr.length <=1) return arr
//     const mid = Math.floor((arr.length)/2)
//     return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)))
// }

// const merge = (arr1,arr2)=>{
//     const arr1Len = arr1.length
//     const arr2Len = arr2.length
//     let i=j=0
//     let res = []
//     while(i <arr1Len && j < arr2Len){
//         if(arr1[i] <= arr2[j]){
//             res.push(arr1[i])
//             i++
//         }
//         else {
//             res.push(arr2[j])
//             j++
//         }
//     }

//     if(i<arr1.length) res.push(...arr1.slice(i))
//     if(j<arr2.length) res.push(...arr2.slice(j))

//     return res
// }

// console.log(mergeSort([10,9,8,7,6,5]))




const waveForm = (arr)=>{
    if(arr.length <=2) return arr
    arr.sort((a,b)=>a-b)
    // console.log(arr)
    let swap = 2
    while(swap < arr.length){
        let temp = arr[swap]
        arr[swap] = arr[swap-1]
        arr[swap-1] = temp
        swap +=2
    }
    return arr
}

console.log(waveForm([1,2,3,4,5]))
