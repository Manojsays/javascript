console.log(2 > 1)
console.log(2 >= 1)
console.log(2 != 1)
console.log(2 == 1)

// compairing different data types

console.log("2" > 1)  // it will convert string "2" to number and give output true but it is not a good practice

// so do not compare different data types it is not a good practice


//some different data type comparisons with null

console.log(1 > null)  //false
console.log(0 < null)   // true
console.log(0 == null)  //false as null > 0


//some checks with undefined

console.log(0 > undefined)  //false
console.log(0 < undefined)  //false
console.log(0 == undefined)     //false

// note => comparison with null and undefined is not good and there is no use and meaning of comapiring with them

// strict check ==> "==="  it not only checks value but also checks datatype also

console.log("2" == 2) // true
console.log("2" === 2) //false
console.log(2 === 2)  // true