// ***********************************
console.log(`**************** json *****************`);

/*
Turn the object into JSON and back
importance: 5

Turn the user into JSON and then read it back into another variable.
*/
let user = {
    name: "John Smith",
    age: 35
};

let userJson = JSON.stringify(user);

console.log(`json.stringify: ${userJson}`);

const anotherVariable = JSON.parse(userJson);
console.log(`json.parse: ${anotherVariable}`);
console.log(anotherVariable);

// *********************************************

/*
Exclude backreferences
importance: 5

In simple cases of circular references, 
we can exclude an offending property from serialization by its name.

But sometimes we can’t just use the name, 
as it may be used both in circular references and normal properties. 
So we can check the property by its value.

Write replacer function to stringify everything, 
but remove properties that reference meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  // your code 
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

let room = {
    number: 23,
    toJSON() {
        return this.number;
    }    
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
};
debugger;
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    // your code 


    return (/* (key == 'occupiedBy') || */(key == 'self') ) ? undefined : value;
  

}));


  
