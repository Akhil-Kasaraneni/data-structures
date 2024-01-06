function reverseArray(arr, start, end) {
  if (start >= end) throw new Error("Invalid");
  while (start < end) {
    const tmp = arr[start]
    arr[start] = arr[end]
    arr[end] = tmp
    start ++
    end --
  }
  return arr
}


console.log(reverseArray([1,23,4,4,5,6,7,189,'3131'],0,3))