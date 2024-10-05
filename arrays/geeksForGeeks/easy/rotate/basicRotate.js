const rotate = (arr,d)=>{
    let i = 1
    if(arr.length <=1) return arr
    if(d >= arr.length) d = d % arr.length
    while(i <= d){
        const last = arr[arr.length-1]
        for(j = arr.length-2;j >= 0;j--) {
            arr[j+1] = arr[j]
        }
        arr[0] = last
        i++
    }
    return arr
}

console.log(rotate([1,2,3,4,5],10))

