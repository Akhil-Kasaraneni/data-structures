function rotate(arr, pos){
    pos = pos % arr.length
    while(pos > 0){
        rotateOneByOne(arr)
        pos --
    }
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

console.log(rotate([1,2,3,4,5,6,7],2))