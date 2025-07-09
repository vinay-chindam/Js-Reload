Data Types in Typescript:

number
string 
boolean
any 



const a:number=10
const b:number
b=20

functions:

function addTwo(a:number):number{

  return a+2
}

addTwo(5)

const func=(num:number):number=>{
  return num+3
}

Objects in TS:

function check(num:number):{}{

  return {age:num}
}

never in ts:
never indicates a funciton never returns something
mostly used with functions which throws exceptions
and also with funcitons which runs for ever they never return something so its return type is never

Tuples in TS:
Special kind of array
