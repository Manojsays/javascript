const balance = new Number(100)     //balance is an object

console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))  // it will give values upto 2 decimal places


const othernumber = 123.8966
console.log(othernumber.toPrecision(4))  // precision is used toprint total number of value we wants to print 

// for eg precision(5) of 123.456789 => 123.45

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'))  //convert the number to indian standards


//------------------------------------------maths----------------------------------------------------------------------------------------

console.log(Math) 

//properties 
// abs => absolute => -2 = 2
// roundof Math.round(4.6) => 5
//ceil => Math.ceil(4.2) => 5
//floor => Math.floor(4.9) => 4
//sqrt
//pow calculates power
  

//random -> it alwaysgives us value between 0 and 1 it used where in some events we needs any random value so we uses random

// console.log(Math.random())  // but it gives upto many values after decimal

console.log(Math.floor((Math.random() * 10) + 1))

// if we wants any random value between some range so we can use random

const num1 = 10
const num2 = 20

console.log(Math.floor(Math.random() * (num2 - num1) + 1) + num1)  // it will always give a random value but the range of the value is between num1 and num2






