const marvel_heroes = ["spideman","ironman","thor"]
const dc_heroes = ["superman","batman","wonderwomen"]

// marvel_heroes.push(dc_heroes)   ==> it will push dc whole array as a single element in the marvel array
// console.log(marvel_heroes)

const allheros = marvel_heroes.concat(dc_heroes)  // => this will merge both the arrays into the single array named allheros
console.log(allheros)

// similarly we can merge two or more arrays using the spread operator
const arr = [...marvel_heroes,...dc_heroes]
console.log(arr)

const newarr = [1,2,3,[4,5,6],7,[5,6,[8,9,[10,34]]]]

const anotherarr = newarr.flat(Infinity) //it will flat the array with the given depth here we use infinity it means it will flat it till the final depth
console.log(anotherarr)

console.log(Array.isArray("Manoj")) //gives false bcz it is not an array
console.log(Array.from("Manoj")) // will convert it into the array of single character of the string


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  // it merge all the value into a single array