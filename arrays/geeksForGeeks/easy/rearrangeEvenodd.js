// Segregate even and odd numbers using Lomuto’s Partition Scheme


const rearrange = (arr)=>{
    if(arr.length <= 1) return arr
    let i= 0 , j = arr.length - 1
    while( i < j){
        while(arr[i] % 2 == 0) {
            i++
        }
        while(arr[j] % 2 !== 0) {
            j--
        }
        if(i < j) {
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    } 
    console.log(arr)
    return arr
}

rearrange([1, 3, 2, 4, 7, 6, 9, 10])