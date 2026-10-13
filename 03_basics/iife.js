// immediately invoked function expression (IIFE)

// here we can use this function to invoke the function immediately after initialization by using '()'
//if we are using two IIFE then use ; after one IIFE


(function chai(){
    console.log("Hello World")
})();

( (name) => {
    console.log(`DB connected ${name}`);
})('Manoj')