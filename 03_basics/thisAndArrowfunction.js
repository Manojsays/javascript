const user = {
    username : "Manoj",
    id : "genius",

    welcomeMessages: function(){
        console.log(`${this.username} welcome`)
        console.log(this) // this will print print the whole object
    }
}

// user.welcomeMessages()

// -----------------------------------ARROW FUNCTION--------------------------------------------------

// syntax
// ()=>{

// }


const chai = ()=>{
    console.log("hello saai")
}

// chai()

//explicit return -> int this we use return keyword for this we use {}

const addnum = (a,b)=>{
    return a + b
}

console.log(addnum(2,3))

//implicit return -> here we do not use return key word but can use () or not

const addTwonum = (a,b)=>(a + b)

console.log(addTwonum(4,5))

