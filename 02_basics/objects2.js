
const user = new Object(); // singleton object

// console.log(user);

const user2 = {      // non singleton object

}

// console.log(user2)

user2.id = "123abc"
user2.name = "manoj"

// console.log(user2)

//object inside object

const user3 = {
    email : "himanoj@gmail.com",
    name : "saai",

    user4 : {
        user5 : {
            firstname : "says",
            lastname : "terminator"
        }
    }
}

// console.log(user3.user4.user5.firstname)


const obj1 = {'1':"a",'2':"b"}
const obj2 = {'3':"a",'4':"b"}

// const obj3 = {obj1,obj2};   // it will return in the form of {obj1 : {}, obj2 : {}};
const obj3 = Object.assign({},obj1,obj2) // it will return as {}
const obj4 = {...obj1,...obj2} // will return same as {}

// console.log(obj3)
// console.log(obj4)

// ----------------array of objects------------------------

const arr = [

    {
        id : 1,
        name : "saai"
    },

    {
        id : 2,
        name : "manoj"
    }
]

// console.log(arr[0])

const tinderUser = {}

tinderUser.id = "123abc"                // keys : values  id -> key, value -> 123abc
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // will return keys
// console.log(Object.values(tinderUser));  // will return values
// console.log(Object.entries(tinderUser));    // will return all [['key','value],[]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // wiil return true or false if isLoggedIn exists or not

