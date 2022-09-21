     // Write a Program to:
    // 1.Createconsole.log(`After Step 2 ${user}`) an empty object user.
    // 2.Add the property name with the value John.
    // 3.Add the property surname with the value Smith.
    // 4.Change the value of the name to Pete.
    // 5.Remove the property name from the object.


    let user={}  //Task 1
    console.log(user)
    
    user.name="John"  //Task 2
    console.log(user)

    user.surname="Smith" //Task 3
    console.log(user)

    user.name="Pete"
    console.log(user)

    delete user.name
    console.log(user)
