let num = 3
let negnum = -(num)

console.log(negnum)

//mathematical operatons

console.log(3 + 3)
console.log(3 * 3)
console.log(4 - 3)
console.log(3 ** 3)   // it is used for power so 3 ** 3 => 27
console.log(9 / 3)
console.log(2 % 3)

// string addition

let str1 = "manoj"
let str2 = "jaat"

console.log(str1 + " " + str2)

// weird and confusing behaviour of string addition

console.log("1" + 2) // it will give = 12
console.log("1" + "2") // => 12
console.log("1" + 2 + 2) // => 122
console.log(1 + 2 + "2")  // => 32

let num1 , num2 , num3
num2 = num2 = num3 = 2 + 2  // this is correct but we to write this code readability matters the most so thar everyone could understand it

// pre increment(++a) and post increament(a++)

let a = 10
let b = 20

a++, ++b //they both will give same output they both will add 1 in both the varibles

console.log(a)
console.log(b)

// but now

console.log(a++)  // it will still print 11
console.log(++b)  // and it will print 22

 