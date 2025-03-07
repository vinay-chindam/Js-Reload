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
/* console.log(addTwo(5));

//Arrow functions in 
//this keyword  on node 
console.log(this); */

function saihello(){
    console.log("hello jee")
}
const saihello2=()=>{
    console.log("hello jee in arrow function");
    
}
saihello()
saihello2()


/* 
setInterval(()=>{
    console.log("hello jee in set interval");
    
},1000) */


const addNums=(n1,n2)=>{
    return n1+n2
}


const addNums2=(n1,n2)=>n1+n2

console.log(addNums(2,8));

console.log(addNums2(2,8));
const arr = [2, 4, 6, 8];
arr.forEach((ele) => {
  process.stdout.write(ele.toString()+" "); // Ensure it's a string
  });

  console.log();

//iife immediately invoked functional execution

(
    function say(){
        console.log("said");
        
    }
)()




  

