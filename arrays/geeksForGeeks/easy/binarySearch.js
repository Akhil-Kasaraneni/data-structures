// Assume array is sorted...
function binarySearch(arr,search){
    if(!arr.length) return -1
    let start = 0
    let end = arr.length - 1

    while(start <= end){
        const mid = Math.floor((start + end )/2)
        // console.log("start end mind",start,end,mid)
        if(arr[mid] === search) return mid
        else if(arr[mid] > search) end = mid - 1
        else start = mid + 1
    }
    return -1
}

let a = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91,89,89]
let b = [0,1,2,3,4,5,6,7,8,9,10,11]

// console.log(binarySearch(a,2))

// largest 3 distint elements...

function largestThree(arr){
    if(arr.length < 3) throw new Error('Invalid')
    let first = second = third = Number.MIN_VALUE
    for (let i = 0;i<arr.length;i++){
        if(arr[i]>= first){
            third = second
            second = first
            first = arr[i]
        }else if (arr[i] >= second) {
            third = second
            second = arr[i]
        }
        else if (arr[i] >= third){
            third = arr[i]
        }
    }
    console.log(first,second,third)
}

// largestThree(a)
// largestThree(b)

// Find the Missing Number

function findMissingNum(arr,n){
    let sum = 0
    console.log(n,((n*(n+1))/2))
    for (let el of arr){
        sum = sum + el
    }
    return ((n*(n+1))/2) - sum
}

// console.log(findMissingNum([1,2,4],4))



// Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element that occurs more than once and whose index of the first occurrence is the smallest. 
 
// Driver code
// let arr = [ 10, 5, 3, 4, 3, 5, 6 ];

// function printFirstRepeating(arr){
//     let obj = {}
//     let ans = -1
//     for (let i=arr.length - 1;i>-1;i--){
//         if(obj[arr[i]]) ans = arr[i]
//         else obj[arr[i]] = 1
//     }
//     console.log(ans)
// }

// printFirstRepeating(arr);


let arr = [1, 8, 90,90,890,1000, 1480];

function binarySearchAlgo(arr,num){
    if(!arr || !arr.length) return -1
    let start = 0
    let end = arr.length - 1

    let firstIndex = -1
    while(start <= end){
        const mid = Math.floor((start+end)/2)
        if(arr[mid] === num){
            firstIndex = mid
            end = mid - 1 
            console.log("end is ",end)
        }
        else if(arr[mid] > num) end = mid - 1
        else start = mid+1
    }
    return firstIndex
}


console.log(binarySearchAlgo(arr,90))


const binarySearchTrack = (arr,num)=>{
    let low = 0
    let high = arr.length - 1
    let lastPos = -1
    while(low <=high){
        mid = Math.floor((low+high)/2)
        if(arr[mid] == num){
            lastPos =  mid
            low = mid +1
        }
        else if (arr[mid] < num){
            high = mid -1
        }
        else{
            low = mid + 1
        }
    }
    return lastPos
}
console.log(binarySearch(arr,1)+1)




// export default binarySearchAlgo