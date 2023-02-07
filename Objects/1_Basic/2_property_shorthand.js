//Tasks
//1.create a function to take name and year of birth
//2.create an object in the function to return name and age of the user
//3.Access the object outside the function
//4.Print the name and Age of the user

function createuser(name, dob) {
  let age_diff = new Date(Date.now() - dob.getTime());
  let age = Math.abs(age_diff.getUTCFullYear() - 1970);
  return {
    name,
    age,
  };
}

let user = createuser("Abhishek", new Date(1992, 5, 9));
console.log(`Hi ${user.name},your age is ${user.age}`);
