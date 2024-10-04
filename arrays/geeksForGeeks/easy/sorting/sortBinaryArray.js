// Sort an array containing two types of elements
// Input :  arr[] = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
// Output : arr[] = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 

// Input :  arr[] = [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1] 
// Output : arr[] = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] 
const sortBinaryArray = (arr)=>{
    if(arr.length <=1) return arr
    let i=0;
    let j=arr.length-1

    while(i<j){
        if(arr[i] ===0 || arr[j] ===1) {
            i++
            continue
        }
        arr[i++] = 0
        arr[j--] = 1
    }

    return arr
}

console.log(sortBinaryArray([0, 1, 0, 1, 0, 0, 1, 1, 1, 0] ))
console.log(sortBinaryArray([1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1] ))