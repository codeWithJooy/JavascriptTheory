var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let initObj={ youngVotes:0,
              youngPeople:0,
              midVotes:0,
              midPeople:0,
              oldVotes:0,
              oldPeople:0,
            }

let result=voters.reduce((final,current)=>{
     if(current.age>=18 && current.age <= 25){
         final["youngPeople"]=final["youngPeople"] + 1
         current.voted==true ? final.youngVotes=+1 :final.youngVotes
     }
    //  else if(current.age>=26 && current.age <= 35){
    //     final.midPeople+=1
    //     current.voted==true ? final.midVotes=+1 :final.midVotes
    // }
    else if(current.age>=36 && current.age <= 55){
        final.oldPeople+=1
        current.voted==true ? final.oldVotes=+1 :final.oldVotes
    }
},initObj)            

console.log(result.json)