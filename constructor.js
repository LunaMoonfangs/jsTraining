/*
Create new Calculator
importance: 5

Create a constructor function Calculator that creates objects with 3 methods:

    read() asks for two values using prompt and remembers them in object properties.
    sum() returns the sum of these properties.
    mul() returns the multiplication product of these properties.

For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/

/*
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

  // *************************************

  */
/*
function Calculator (){

    this.nr1 = 0 ;
    this.nr2 = 0 ;
   

    this.read = function () {
      this.nr1 = Number( prompt(`Primul nr= `, this.nr1) );
      this.nr2 = Number( prompt(`Al 2lea nr=  `, this.nr2) ); 
    };

    this.sum = function () {
        return this.nr1 + this.nr2 ;
        
    };

    this.mul = function() {
        return this.nr1 * this.nr2 ;
    };
}

let calculator = new Calculator();
calculator.read();

  alert( `Suma dintre ${calculator.nr1} si ${calculator.nr2} este ` + calculator.sum() );
  alert( `Produsul dintre ${calculator.nr1} si ${calculator.nr2} este ` + calculator.mul() );

*/

// ****************************************************

/*
Create new Accumulator
importance: 5

Create a constructor function Accumulator(startingValue).

Object that it creates should:

    Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
    The read() method should use prompt to read a new number and add it to value.

In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

*/

function Accumulator (startingValue){

  this.value = startingValue;

  this.read = function () {
    this.value += Number( prompt(`Suma este ${this.value}, mai adaugi ? `, this.startingValue) );
  }
  
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);
