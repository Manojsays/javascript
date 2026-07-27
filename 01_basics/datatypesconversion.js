let score = "33" //type of score is string
let score1 = 33 //type => number

let val = Number(33) // type converted to number


let num1 = "33abc" // type is string
console.log(num1) // it will print 33abc  but->

let num2 = Number(num1) //type converted to number but it will store NaN
console.log(num2)  // as 33 => number but abc => string if it is in the double quotes "33abc" it can be treated as string but without "" it can ot store any value


let num3 = null
console.log(typeof num3)
let val2 = Number(num3);
console.log(val2)  // for number null will be converted to 0

//"33" => 33
// "33abc" => NaN
//true => 1 ans false = 0

// for boolean every number except 0 and empty string or number it will be converted to true