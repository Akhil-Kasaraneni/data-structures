// function bsearch(A, key_to_search)
// {
// 	let n = A.length;
// 	// Set number of bits to represent largest array index
// 	let lg = parseInt(Math.log(n-1) / Math.log(2)) + 1; 
//     console.log("lg is ",lg)

// 	//while ((1 << lg) < n - 1)
// 		//lg += 1;

// 	let pos = 0;
// 	for (let i = lg ; i >= 0; i--) {
// 		if (A[pos] == key_to_search){
//             console.log("return pos ",pos)
// 			return pos;
//         }
//         console.log("i is ",i)
// 		// Incrementally construct the
// 		// index of the target value
//         let new_pos
// 		new_pos = pos | (1 << i);
//         console.log("new_pos : calc", new_pos);

// 		// find the element in one
// 		// direction and update position
// 		if ((new_pos < n) && (A[new_pos] <= key_to_search))
// 			pos = new_pos;
//         console.log("final pos: ",pos);
// 	}

// 	// if element found return pos otherwise -1
// 	return ((A[pos] == key_to_search) ? pos : -1);
// }


function metaBinarySearch(arr,key){
    const maxKeyIndexBits = Math.ceil(Math.log2(arr.length - 1))
    let start = 0
    for(let i=maxKeyIndexBits;i>=0;i--){
        if(arr[start] === key) return start
        let newStart = start | (1<< i)
        console.log("newStart",newStart, 0 | (i <<4))
        if(newStart <=arr.length -1 && arr[newStart] <=key) start = newStart
    }
	return ((arr[start] == key) ? start : -1);
}

let A = [ -2, 10, 100, 250, 32315 ];
let B= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
console.log("bsearch(A,250) ",metaBinarySearch(B,6))