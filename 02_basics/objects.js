//objects literals

const mySym = Symbol("key1") // symbol

const jsuser = {
    name : "manoj",
    age : "22",
    location : "delhi",
    email : "humanoj44444@gmail.com",
    [mySym] : "hello"                           // symbol key
}

// console.log(jsuser.name)
// console.log(jsuser[mySym])
// console.log(jsuser["email"])  // can access the symbol key

jsuser.name = "saai"   // can change the name of the object jsuser
// Object.freeze(jsuser) // no one can change the values of the object after using freeze

jsuser.greeting = function(){
    console.log("hi this side manoj")
}

jsuser.greetingTwo = function(){
    console.log(`hi this side ,${this.name}`)
} 
console.log(jsuser.greeting)   // this will tell that this represents to a function
console.log(jsuser.greeting())   //this will print output of function
console.log(jsuser.greetingTwo())