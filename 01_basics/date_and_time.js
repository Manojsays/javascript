//Dates

let mydate = new Date()
console.log(mydate)

console.log(mydate.toString())
console.log(mydate.toDateString()) //convert to day month date year
console.log(mydate.toISOString())
console.log(mydate.toLocaleDateString()) // convert the date to local date structure month/date/year

let myCreatedDate = new Date("01-11-2025")
console.log(myCreatedDate.toLocaleString());

 // can use rest of the further methods when we will use them