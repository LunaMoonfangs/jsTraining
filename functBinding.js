// ************************ Function Binding ***********************
console.log( `********************* Function Binding ****************`);

// Fix a function that loses "this"
// importance: 5

// The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.

// But it leads to an error. Why?

// Fix the highlighted line for everything to start working right (other lines are not to be changed).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "RockStar{Ac/Dc}@2022") ok();
  else fail();
}

let user = {
  name: 'You',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

// fix this : askPassword(user.loginOk, user.loginFail);

// let userOK = user.loginOk.bind(user); // (*)
// let userNOK = user.loginFail.bind(user);
// askPassword(userOK, userNOK);
// e ok , dar ca sa o trec intr-o singura linie am facut asa:
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// ***** Tentativa de user login pt cursa sponsorilor ******

/*  *** pe alta data ca m-am pus sa citesc
const echipe = {
    Visma: "Vism@12%",
    Compa: "TataDeac123",
    Continental: "ContY3,14"
}


let userEchipe = prompt("User?","");

function userAndPass(user) {
    
    let passwordEchipe = prompt("Password?", '');
    let 
    
    else fail();
  }
  
  let connect = {
    
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  */