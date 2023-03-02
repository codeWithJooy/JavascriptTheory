/*
 Tasks
 1.Create an Object
 2.Assign It To Another Object
 3.Change in Second Object
 4.Console log First Object and Show the Change
*/

let user = {
  name: "Abhi",
  age: 29,
};

let user2 = user;

user2.age = 30;

console.log(user.age); //Updated Age shows that objects and copy by reference
