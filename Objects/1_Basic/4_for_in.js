/*
  Tasks
  1.Create and Object
  2.Use for...in to loop through it
  3.Now loop again and change value of one of the key on the go
*/

let user = {
  name: "Abhi",
  age: 29,
  city: "Kolkata",
  State: "West bengal",
};

for (let key in user) {
  console.log(`Key : ${key} and Value : ${user[key]}`);
}

for (let key in user) {
  if (key === "age") {
    user[key] = "30";
  }
}

console.log(user);
