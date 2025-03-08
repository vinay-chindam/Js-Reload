

if(0) {
    console.log("hello jee");
    
    
}else{
    console.log("hi");
    
}

/*
<,>,<=,>=,==,===,!=
*/
/* , */
/*
falsy values
false,0,nan,"",undifined,,null
*/

let list=[1,2,3,4]

/* for(let ind=0;ind<10;ind++){
    console.log(ind);
    
} */

const s1="hello java script" 

/* for (const i of list) {
    console.log(i);
}

for(const i of s1){
    console.log(i);
    
} */

//Maps

const map1=new Map()

map1.set("a",1)

map1.set("b",2)

map1.set("c",3)

map1.set("d",4)

map1.set("e",5)

map1.set("f",6)

map1.set("f",7)
/* 
for(const [key,val] of map1){
    
    console.log(`map  of ${key} is ${val}`)
} */


/*

for loop
while loop
do while


for of loop (mainly on arrays)
for in loop  (mainly on objects)
for each loop  ()
*/
/* 
let arr=["java","c++","python","c"]
arr.forEach((val)=>{
    console.log(val);
    
})
 */

const users = [
    { id: 1, name: "Alice", age: 25, city: "New York", role: "Developer" },
    { id: 2, name: "Bob", age: 30, city: "San Francisco", role: "Designer" },
    { id: 3, name: "Charlie", age: 28, city: "Los Angeles", role: "Product Manager" },
    { id: 4, name: "David", age: 35, city: "Seattle", role: "Data Scientist" },
    { id: 5, name: "Eve", age: 22, city: "Chicago", role: "Intern" },
    { id: 6, name: "Frank", age: 40, city: "Austin", role: "CTO" },
    { id: 7, name: "Grace", age: 27, city: "Denver", role: "Marketing Manager" },
    { id: 8, name: "Henry", age: 32, city: "Boston", role: "Engineer" },
    { id: 9, name: "Ivy", age: 29, city: "Miami", role: "HR Manager" },
    { id: 10, name: "Jack", age: 26, city: "Dallas", role: "Sales Representative" }
        ];

users.forEach((item)=>{
    console.log(item.age);
    
})

                       