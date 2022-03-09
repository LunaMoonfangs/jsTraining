// ***************** 04.03.22**********
console.log("******************* mapAndSet.js *********************");

/*
Filter unique array members
importance: 5

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  // your code
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O

P.S. Here strings are used, but can be values of any type.

P.P.S. Use Set to store unique values.

Open a sandbox with tests.

*/

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function uniqueArr(arr) {
    
    // return Array.from(new Set(arr));
    let unique = new Set();

    for(let elm of arr){
        unique.add(elm);
    }

    unique.forEach( (value) => { 
        console.log(`value ${value}`);
        return  value; 
    });

    return Array.from(unique); 
    //nu afiseaza unique :( 
    
}

console.log(`Set arr: `);
console.log(uniqueArr(values) );

// **************************

/*

Filter anagrams
importance: 4

Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers

Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

From every anagram group should remain only one word, no matter which one.

*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    // despart cuvintele in array de litere [a,c,b,d]

    let tempArr = [];
    let set = new Set();
    let map = new Map();

    for (let char of arr){
        tempArr.push(char.toLowerCase().split("").sort().join(""));
        // am folosit aceasi comanda pt tempArr ca sa le salvez intr-un Map sub forma de [array normal , array sortat]
        map.set( char.toLowerCase().split("").sort().join("") , char );
    }
    console.log(`TempArr: `)
    console.log(tempArr); // ok [ [] , [] , [] ] 

    // sortez fiecare array [ [a,b,c,d] , arr.lenght] ]  // am trecut direct .sort() in linia 95
    
    // trebuie bagat un toLowerCase sau toUpperCase ca sa le egaleze .. error toLowerCase() is not a funciton


    // le introduc intr-un map cu pereche de [ [cuvant sortat] , [cuvant normal] ]
    let setProba = new Set();

    console.log('Map este: ');
    console.log(map);
    for (const [key, value] of map) {
        console.log(key + ' = ' + value);
        // incerc sa il trec in set in functie de value
        setProba.add([key,value]);
        set.add(value);
      }

    //map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of

    setProba.forEach( (value) => { 
        console.log(`value pt setProba este: ${value}`);
        //return  value; 
    });

    set.forEach( (value) => { 
        console.log(`value pt set este: ${value}`);
        //return  value;
    });

    
    let setArray = Array.from(set); // le ia pe toate :(

    //set.has(value) – returns true if the value exists in the set, otherwise false

    
    console.log(`Array fara anagrame este: ` + setArray);
}


aclean(arr);

// ****************** 07.03.22 **********

/*
Sum the properties
importance: 5

There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.

For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

Open a sandbox with tests.
*/

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj){
  
  let suma = 0;
  // iterare prin obj ca sa citeasca valoriile 
  // aduna elementele
  for (let value of Object.values(obj)) {
    suma += value;
  }

  return suma;

}
console.log(`***** Suma salariilor este: ${sumSalaries(salaries)}`);

const objGol = {};
console.log(`***** Suma salariilor este: ${sumSalaries(objGol)}`);

// *************************

/*
Count properties
importance: 5

Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

Try to make the code as short as possible.

P.S. Ignore symbolic properties, count only “regular” ones.

Open a sandbox with tests.
*/

function count (obj) {
  //Object.key(obj) returneaza un array
  return Object.keys(obj).length; 
  
}

console.log(`Nr de elemente din salaries este: ${count(salaries)}`);

// mijto :) console.log(Object.entries(arr));

// ********************
// https://edabit.com/challenges/javascript

// intreaba-l pe Serban daca merita :)

//export de objects in celelalte fisiere js:
// fixPwla ca nu merge fara node :)

//export { salaries };
//*****************************************