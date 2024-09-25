const arr = [ 1,1, 1, 1, 0, 0, 0];


const binarySearch = (arr,num)=>{
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


// console.log(binarySearch(arr,1)+1)


