// Rearrange an array in maximum minimum form using Two Pointer Technique

// this uses extra space
// const rearrange = (arr)=>{
//     arr.sort((a,b)=>a-b)
//     let result = []

//     let i = arr.length -1, j = 0
//     while(i>=j){
//         result.push(arr[i])
//         if(i !==j ) result.push(arr[j])
//         i --
//         j++
//     }
//     console.log(result)
//     return result
// }

const swap = (arr,i,j)=>{
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const rearrange = (arr)=>{
    if(arr.length <= 1) return
    arr.sort((a,b)=>a-b)
    let maxIndex = arr.length -1
    let minIndex = 0
    let maxValue = arr[arr.length - 1] + 1
    for(let i=0;i<arr.length;i++){
        if(i % 2 == 0){
            arr[i] = arr[i] + (arr[maxIndex] % maxValue) * maxValue
            maxIndex--

        }else {
            arr[i] = arr[i] + (arr[minIndex] % maxValue) * maxValue
            minIndex++
        }
    }
    console.log("arr",arr)
    for(let i=0;i<arr.length;i++){
        arr[i] = Math.floor(arr[i]/maxValue)
    }

    console.log(arr)
}


rearrange([1 ,2 ,3, 4, 5, 6])
