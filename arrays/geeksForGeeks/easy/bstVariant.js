// Binary search, but the search element may ot maynot the there. If its there you return the number else return the closet element.

function nearestElement (arr,search){
    if(!arr.length) return -1
    let low = 0
    let high = arr.length - 1
    let mid = -1

    while(low <=high){
        mid = Math.floor((low+high)/2)

        if(arr[mid] == search) {
            return arr[mid]
        }else if (arr[mid] > search) {
            high = mid -1
        }
        else {
            low = mid + 1
        }
    }

    if(low >=arr.length) return arr[high]
    if(high < 0) return arr[low]

    const closest = [arr[mid-1],arr[mid],arr[mid+1]].reduce((prev,current)=>{
            return (Math.abs(current-search) - Math.abs(prev -search) < 0 ? current : prev)
    })
    return closest
}



console.log(nearestElement([-10, -3, 0, 5, 9, 20],5))