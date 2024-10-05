function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        let pivotIndex = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

// Helper function to partition the array
// function partition(arr, low, high) {
//     let pivot = arr[high]; // Choose the last element as the pivot
//     let i = low - 1; // Index of the smaller element

//     for (let j = low; j < high; j++) {
//         // If the current element is smaller than or equal to the pivot
//         if (arr[j] <= pivot) {
//             i++;
//             // Swap arr[i] with arr[j]
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }

//     // Swap the pivot element with the element at i + 1
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1;
// }

// // Example usage
// let arr = [10, 80, 30, 90, 40, 50, 70];
// console.log(quickSort(arr)); // Output: [10, 30, 40, 50, 70, 80, 90]


const searchSort = (arr)=>{
    if(arr.length <=1) return true
    for(let i=1;i<arr.length;i++){
        if(arr[i] < arr[i-1]) return false
    }
    return true
}
