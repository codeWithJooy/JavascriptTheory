//Tasks
//1.Create an empty object
//2.Do console.log to show that using 'in' to find non excistant key leads to false and not Error
//3.Add key 'age' to object and console log again
//Use a variable to console log

let user = {};
console.log("age" in user);

user.age = "21";
console.log("age" in user);

let key = "age";
console.log(key in user);
