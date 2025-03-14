/*
In JavaScript, Promises are objects used to handle asynchronous operations.
 They represent the eventual completion (or failure) of an asynchronous task 
 and allow chaining of subsequent operations.

 states:

 Pending
 Fullfilled
 Reject


 then()
 catch()
 finally



*/


/* 
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("I am in p1");
        resolve()

        
    },1000)
})
p1.then(function(){
    console.log("in dot then");
    
})
p1.catch(function(){
    console.log("in dot catch");
    
})
p1.finally(function(){
    console.log("in finally");
    
}) */

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){

        const check=false
        if(check){
            console.log("in p2");
            resolve()

        }
        else{
            console.log("in p2 else")
            reject(new Error("Condition failed"))
        }
        
        
    },2000)

})

p2.then(()=>{
    console.log("in p2 then");
    
})
p2.catch(()=>{
    console.log("in p2 catch");
    
})
p2.finally(()=>{
    console.log("in p2 finally");
    
})