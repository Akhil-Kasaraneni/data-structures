function missingNum(arr){
    arr.sort()
    let prev = 0
    let repeating
    let missing
    let sum = arr.length * (arr.length+1 ) / 2
    let arraySum = 0
    for (let i=0;i<arr.length;i++){
        arraySum+= arr[i]
    }

    for (let i=0;i<arr.length;i++){
        if(arr[i] ==  prev){
            repeating = prev
            missing = arraySum + repeating - sum
        }
        else if (arr[i] !== (i+1)){
            missing = i+i
            repeating = sum + missing - arraySum
        }
    }

    console.log(missing,repeating)
}

missingNum([1,3,4,5,4])