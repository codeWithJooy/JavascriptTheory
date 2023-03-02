/*
Tasks
1.Create an Object with Data
2.Create an Empty Object
3.Clone the Data using Object.assign
*/

let user1 = {
  name: "Abhi",
  age: 29,
};

let permission1 = {
  canWrite: true,
};

let permission2 = {
  canRead: true,
};

Object.assign(user1, permission1, permission2);

console.log(user1);
