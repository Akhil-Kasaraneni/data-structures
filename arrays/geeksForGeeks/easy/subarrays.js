const subArrays = (arr)=>{
    const res = []
    for (let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            res.push(arr.slice(i,j+1))
        }
    }
    console.log(res)
    return res
}

subArrays([1,2,3,4])