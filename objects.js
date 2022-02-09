// ************************************************

//              Objects 

/*
Hello, object
importance: 5

Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object 


let user = {};
user.name = "John";
//console.log(user);
user.surName = "Smith";
//console.log(user);
user.name = 'Pete';
//console.log(user);
delete user.name ;
//console.log(user);

*/

// *********************************

/* 
Check for emptiness
importance: 5

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

Open a sandbox with tests.
*/

/*
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
*/

/*
Sum object properties
importance: 5

We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

*/
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Marry: "unemployed"
}
let sum = 0;

for (let key in salaries) {
    if( Number(salaries[key]) ) {
        sum += salaries[key];
    }    
    
}

alert(`Suma salariilor este: ${sum}` );

*/
// **************************************************

/* 
Multiply numeric property values by 2
importance: 3

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.

Open a sandbox with tests.
*/
/*
for ( let key in salaries) {
    if( Number(salaries[key]) ){
        salaries[key] *= 2;
        alert(`Salariul dublat acum pt ${key} este: ${salaries[key]}`);
    }
}

//alert(`Salariile dublate sunt acum ${salaries}`);
console.log('Salariile dublate sunt acum : ', salaries);

*/

// ************************************** Methods **************************************

/*

Using "this" in object literal
importance: 5

Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

*/
/*
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?   // == undefined

*/
/*
function makeUser() {
    return {          
    name: "John",
      ref() {
        return this; // functie care returneaza `this` 
                    //in loc de valoare directa
      } 
    }  
}

let user = makeUser();

alert( user.ref().name ); 
*/

// ***************************************************
/*
Create a calculator
importance: 5

Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.

let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

*/

let calculator = {
  // ... your code ... 
  nr1 : 0,
  nr2 : 0,

  read () {
    this.nr1 = Number( prompt(`Primul nr= `, this.nr1) );
    this.nr2 = Number( prompt(`Al 2lea nr=  `, this.nr2) );      
    return this.nr1,this.nr2;
  },

  sum(){
    return this.nr1+this.nr2;
  },

  mul() {
    return this.nr1 * this.nr2;
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Sandbox pt calculator:
// nu mi-a iesit
/*
describe("suma este", function() {

  describe("aduna nr1 cu nr2", function() {

    function makeTest(x,y) {
      let expected = x + y;
      it(`${x} adunat cu ${y} egal ${expected}`, function() {
        assert.equal( calculator.sum(), expected);
      });
    }

    for (let key in calculator) {
      makeTest(key);
    }

  });
/*
  it("if n is negative, the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("if n is not integer, the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});

*/

// ***************************************************

/* 

Chaining
importance: 2

There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};
/*
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
*/


//ladder.up().up().down().showStep().down().showStep();

// optional: confirmari de urcare / coborare

let continua = 1;
let turn = 1;
do{
  continua = confirm( `Esti la etajul ${ladder.step} , vrei sa mai mergi?` ) ;
    
  if(continua){
  
    let pas = confirm ( ` Esti la etajul ${ladder.step}, urci sau cobori ?` );

    if ( (ladder.step === 0) && (pas === false) ){
      ladder.step = 0;
      continua = confirm('Esti deja la parter, mai continui? ');
    } else {
      if(pas){
          ladder.up();
        } else {
          ladder.down();
        }
      }

  } else {
    alert(`Te-ai oprit la etajul ${ladder.step} `);
  }
   
}while (continua);

 


