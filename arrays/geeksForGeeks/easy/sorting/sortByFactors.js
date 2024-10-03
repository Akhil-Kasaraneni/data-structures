const sortByFactors =(arr)=>{
    arr.sort((a,b)=> numberOfFactors(a) - numberOfFactors(b))
    return arr
}

const numberOfFactors = (num)=>{
    let i=1
    let count = 0

    while(Math.pow(i,2)<=num){
        if(num % i === 0)  count += ((num/i == i) ? 1 : 2)
        i++;
    }
    return count
}

console.log(sortByFactors([1,2,3,4,5,6,7,8,9]))