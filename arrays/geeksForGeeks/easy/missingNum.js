function missingNumApproach1(arr){
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
            break
        }
        else if (arr[i] !== (i+1)){
            missing = i+i
            repeating = sum + missing - arraySum
            break
        }
    }

    console.log(missing,repeating)
}



function printTwoElements(arr) {
    const length = arr.length
    let missing = length * (length + 1)/2
    let repeating
    for(let i=0;i<length;i++){
        let abs = Math.abs(arr[i])
        if(arr[abs-1]> 0){
            missing -= abs
            arr[abs-1] = - arr[abs-1]
        }else{
            repeating = abs
        }
    }
    console.log(missing,repeating)
}

// Driver code
let arr = [7, 3, 4, 5, 5, 6, 2];
printTwoElements(arr);

