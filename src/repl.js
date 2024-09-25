// Given an array of strings arr. Return the longest common prefix among each and every strings present in the array. If there's no prefix common in all the strings, return "-1".

let arr = ["geeksforgeeks", "geeks", "geek", "geezer"]
function longestCommonPrefix(arr) {
    if(!arr || !arr.length) return -1
    if(arr.length ==1) return arr[0]
    let commonString = arr[0]
    for(let i=1;i<arr.length;i++){
        if(commonString.length < arr[i].length){
            commonString = arr[i]
        }
    }

    let common = false
    for(let i=commonString.length;i>0;i--){
        let stripped = commonString.slice(0,i)
        for(let y=0;y<arr.length;y++){
            if(!arr[y].startsWith(stripped)) {
                common = false
                break
            }
            if(y ==arr.length-1) return stripped
        }
    }
    return -1
}

console.log(longestCommonPrefix(arr))