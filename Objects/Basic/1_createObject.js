//Tasks
//1.Create an object with name and age key using literals
//2.Print Name and Age
//3.Add Key isAdmin and set it as true
//4.Delete Age Key
//5.Add MultiWord Key 'likes_birds'

let user = {
  name: "Abhishek Hazra",
  age: 21,
};
console.log(user);
console.log(`User is ${user.name}`);
console.log(`User Age is ${user.age}`);

user.isAdmin = true;
console.log(user);

delete user.age;

console.log(user);

user["like birds"] = true;

console.log(user);
console.log(`${user.name} Likes birds ? ${user["like birds"]}`);
