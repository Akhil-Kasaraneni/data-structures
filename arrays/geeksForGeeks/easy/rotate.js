function rotate(arr, pos){
    pos = pos % arr.length

    // *** By rotation one by one *****
    // while(pos > 0){
    //     rotateOneByOne(arr)
    //     pos --
    // }
    temporaryArraySol(arr,pos)
    return arr
}

function rotateOneByOne (arr){
    let store = arr[arr.length-1]
    let start = 0
    while(start < arr.length){
        let num  = arr[start]
        arr[start] = store
        store = num
        start++
    }
}

function temporaryArraySol(arr,pos){
    let tempArray = arr.slice(0,arr.length-pos)
    for(let i=0;i<pos;i++){
        arr[i] = arr[arr.length-pos+i]
    }
    for(let i=pos;i<arr.length;i++){
        arr[i] = tempArray[i-pos]
    }
}

console.log(rotate([1,2,3,4,5,6,7],2))