const secondLargest = (arr)=>{
    let l1 = l2 = -Infinity
    arr.forEach(el =>{
        if(el >= l1) {
            l2 = l1
            l1 = el
        }else if(el > l2 ){
            l2 = el
        }
    })
    console.log("second largest ",l2)
}

secondLargest([1,2,3,4,5])