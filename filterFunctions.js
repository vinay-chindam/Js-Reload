console.log("hi");


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


const newUsers=users.filter((item)=>{
    return item.age>35
})
console.log(newUsers);


const numbers = [5, 12, 8, 20, 15, 33, 41, 7, 18, 29, 
                     25, 36, 50, 3, 44, 9, 21, 27, 14, 30];

numbers.forEach((item)=>{
    if( item>20){
        
    }
})

