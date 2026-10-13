function Name(){
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("O")
    console.log("j")
}

// Name()

function AddNumbers(number1, number2){
    return number1 + number2;                                     
}


const val = AddNumbers(2,5)
// console.log(val)  // will return 7


function loginUserName(username){
    if(username === undefined){
        console.log("please enter a user name")
        return
    }

    return `${username} just logged in`
}

const ans = loginUserName("manoj")
console.log(ans);           //it will return manoj just logged in

console.log(loginUserName())    // it will return undefined just logged in



function addCartItems(...nums){       // this will return array of the parameters
    return nums
}

// console.log(addCartItems(85,90,10,100))


const user = {
    name : "Manoj",
    id : "genius"
}

function handleJob(anyobject){
    console.log(`username is ${anyobject.name} and his id is ${anyobject.id}`)
}

// handleJob(user)

handleJob({
    username : "saai",
    id : "devil"
})


const mynewArray = [200,400,100,600]

function getarr(arr){
    return arr[0];
}

console.log(getarr(mynewArray))