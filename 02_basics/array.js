const arr = [1,2,3,4,5,6,7]

// console.log(arr)
// console.log(arr[3])

// array methods

// arr.push(89)
// console.log(arr)

// arr.pop();
// console.log(arr)

arr.unshift(45) //adds 45 at the starting of the array by shifting all other values in array
// console.log(arr)

arr.shift()  //pops from front
// console.log(arr)


// console.log(arr.includes(5))  if 5 present then => true

// slice and splice

 console.log("A", arr)
 const myn1 = arr.slice(1,3) // it gives the subarray from 1 to 2 

 console.log(myn1)
 console.log("B ", arr)

 const myn2 = arr.splice(1,3) //splice manipulates the original array and it contains the last index value also of the range
 console.log("C ",arr)
 console.log(arr)




