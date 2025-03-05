console.log("hello jee");

//primitive types

/*

String
Number
Boolean
null
undifined
Symbol
BigInt
*/


//Non Primitive or Reference Types

/*
Arrays
Objects
Functions
*/


const s1=Symbol('56')
const s2=Symbol('56')
console.log(s1===s2);




const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  age: 25,
  isActive: true
};

console.log(user);

user.f1=function(){
    console.log("I am function insede an object");
    
}
/* console.log(user);
user.f1()
 */


const person=new Object()
const person2={}