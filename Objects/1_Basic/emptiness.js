// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

const isEmpty=(obj)=>{
   for(key in obj){
       console.log("Object is Not Empty")
       return false
   }
   console.log("Object is Empty")
   return true
}

let schedule={}
isEmpty(schedule)

schedule={
    name:"Abhishek"
}
isEmpty(schedule)

