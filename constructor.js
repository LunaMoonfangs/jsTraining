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