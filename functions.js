console.log("welcome to functions");


/* function sayHi(){
    console.log("say Hi");
    
}
sayHi
sayHi() */

function returnCartItems(val1,...val){
    return val
}
console.log(returnCartItems(2,3,4));



function returnCartItems2(...val){
    return val
}
console.log(returnCartItems2(2,3,4));

//Scope in functions

//global scope local scope  block scope etc

console.log(addone(3));



function addone(one){
    return one+1
}
const addTwo=function(two){
    return two+2
}
console.log(addTwo(5));

//Arrow functions in js


