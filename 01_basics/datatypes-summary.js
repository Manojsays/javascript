
//primitive data types

// 7 types : Number, string, Boolean, null, undefined, symbol, BigInt

const val = 50
const val2 = 50.76    // Number is for all either it is decimal or non decimal

//symbol => this type of data gives the unique value either the data is same or not

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id == id2)     // it will give false

const bignumber = 1234567892345678923456n  // using n then it will be stored inside BigInt 
console.log(bignumber)


// NON - PRIMITIVE data types (reference)

// Array, object, function

const heroes = ["iron man","thor","krish"]

let myobj = {
    name: "Manoj",
    roll_no: 19,
}

console.log(myobj)
console.log(heroes)

//data type of non-primitives is object and of function is function object