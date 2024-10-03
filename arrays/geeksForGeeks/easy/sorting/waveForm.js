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