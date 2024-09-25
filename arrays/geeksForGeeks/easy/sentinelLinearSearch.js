
// can be used when the data is huge and we reduced one check....
function sentinelSearch(arr,search){
    const last = arr[arr.length -1 ]
    let i = 0
    while(arr[i] !==search) i++
    if(i < arr.length -1 || last ===search) return i
    return -1
}

// How is it different from linear search
// For a very large data, we dont have check for 2 conditions. Not a big deal from linear search... 

function linearSearch(arr,search){
    for (let i=0;i<arr.length;i++){
        if(a[i]==search) return i
    }
    return -1
}

let a = [1,2,3,4,13,31,,1341,4,141,41,1]

console.log(sentinelSearch(a,1341));