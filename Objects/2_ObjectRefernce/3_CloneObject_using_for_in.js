/*
Tasks
1.Create an Object with Data
2.Create an Empty Object
3.Clone the Data using for...in loop
*/

let user = {
  name: "Abhi",
  age: 30,
  city: "Kolkata",
};

let user2 = {};

for (let key in user) {
  user2[key] = user[key];
}

console.log(user2);
