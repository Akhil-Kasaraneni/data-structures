// Count the number of possible triangles

// unOptimised
// const numOfTraingles = (arr)=>{
//     if(arr.length < 3) return 0
//     let count = 0
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             for(let z=j+1;z<arr.length;z++){
//                 if(isValidTriangle(arr[i],arr[j],arr[z])) count ++
//             }
//         }
//     }
//     console.log(count)
// }

// optimised

const binarySearch = (arr, low, high, k) => {
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] < k) {
            // Current element is less than k, move to the right part of the array
            result = mid; // Update result to the current mid index
            low = mid + 1;
        } else {
            // Current element is greater than or equal to k, move to the left part
            high = mid - 1;
        }
    }

    return result; // Return the index of the last element less than k, or -1 if not found
};

 const numOfTraingles = (arr)=>{
    if(arr.length < 3) return 0
    let count = 0
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length;j++){
            const pos = binarySearch(arr,j+1,arr.length,arr[i]+arr[j])
            // console.log("j, pos ",j, pos)
            if(pos > j) count += pos - j
        }
    }
    // console.log(count)
 }


const isValidTriangle = (val1,val2,val3)=>{
    return (val1+val2) > val3 &&  (val1+val3) > val2 && (val2+val3) > val1
}

numOfTraingles([10, 21, 22, 100, 101, 200, 300])