 // functions and methods of the string

 const name = "manoj"
 const repcnt = "50"

 console.log(`hello my name is ${name} and my rep count is ${repcnt}`)

 const gamename = new String('manoj')

 console.log(gamename.toUpperCase())
 console.log(gamename.length)

 console.log(name.toUpperCase())
 console.log(name.charAt(2))

 console.log(gamename.substring(0,2)) // int this we can not give negative values

 console.log(name.slice(-5,4))  // here -1 value represents to the last value of the string and it uses negative values as cycle

 const val = "    manoj singh    "

 console.log(val.trim())  // it will remove all the exttra spaces 
  
const url = "https://manoj.com/manoj%20singhkuntal"

//if my url is wrong and i have to change something from it than i uses
console.log(url.replace('%20','-'))
console.log(url)
console.log(url.includes('manoj'))// if manoj is present in the than it will give output as true


// there are still more methods present in strings but we will use them as required
