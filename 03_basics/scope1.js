
{
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)  // it will not print anything as a is in local scope
// console.log(b) //not print anything
// console.log(c) // it will print that's why we do not use var


let a = 100
{
    let a = 10
    console.log(a)      //o/p = 10
}

console.log(a)  //o/p = 100



// -----------------------------------------------------------------------------------

console.log(one(5))     // this will run
function one(num){
    return num + 1
}

// val(3)       // this will not run and this is also called as something like hoisting

const val = function two(nums){
    return nums + 2
}

console.log(val(3))