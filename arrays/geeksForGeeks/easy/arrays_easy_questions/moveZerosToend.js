const moveZeros = (arr) =>{
    if(arr.length <=1) return arr
    const len = arr.length
    let i = 0,j = arr.length-1
    while(i < j){
        while( arr[i] !== 0 && i < len){
            i++
        }
        while(arr[j] === 0 && j >0){
            j--
        }
        console.log("i and j",i,j)

        if(i < j){
            swap(arr,i,j)
            i ++
            j--
        }

    }
    console.log(arr)
}

const swap = (arr,i,j)=>{
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

moveZeros([0,0,0,1,2,0,3])