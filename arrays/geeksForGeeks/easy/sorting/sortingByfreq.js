// Input:  arr[] = {2, 5, 2, 8, 5, 6, 8, 8}
// Output: arr[] = {8, 8, 8, 2, 2, 5, 5, 6}


// Input: arr[] = {2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8}
// Output: arr[] = {8, 8, 8, 2, 2, 5, 5, 6, -1, 9999999}
const sortByFreq = (arr)=>{
    const map = new Map()
    arr.forEach((el,index) =>{
        if(map.has(el)) {
            const elementData = map.get(el)
            map.set(el,{
                firstIndex: elementData.firstIndex,
                count : elementData.count + 1
            })
        } else map.set(el,{
            firstIndex : index,
            count : 1
        })
    })
    // console.log(map)
    arr.sort((a,b)=> {
        const aDetails = map.get(a)
        const bDetails = map.get(b)

        if(aDetails.count === bDetails.count){
            return aDetails.firstIndex - bDetails.firstIndex
        }else return -aDetails.count + bDetails.count
    })
    console.log(arr)
}


sortByFreq([2, 5, 2, 8, 5, 6, 8, 8])
sortByFreq([2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8])


