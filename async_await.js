console.log("***************** async / await *****************");
/*
// Rewrite using async/await

// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404


async function loadJson(url) {
  // am schimbat return fetch() cu:
  let response = await fetch(url);
  if (response.status == 200) {
    console.log(`json ok: `, response);
    return response.json();
  } else {
    throw new Error(response.status);
  }

}

loadJson('https://javascript.info/no-such-user.json')
  .catch(console.log); // Error: 404

loadJson(`https://api.github.com/users/LunaMoonfangs`)
  .catch(console.log); // json ok

// *****************************************************

function delay() {
  console.log(`***************************`);
}
setTimeout(delay, 1000);


// Call async from non-async

// We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?

// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   // ...what should you write here?
//   // we need to call async wait() and wait to get 10
//   // remember, we can't use "await"
// }

// P.S. The task is technically very simple, but the question is quite common for developers new to async/await

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  //console.log(`10`);
  return 10;
}

function f() {
  let result = wait();
  result.then((val) => { console.log(`result: `, val); })
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
}
f();

// ***************************************************
setTimeout(delay, 1000);
*/

// Rewrite "rethrow" with async/await

// Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.

// And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     });
// }

// // Ask for a user name until github returns a valid user
// function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();


class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  //return fetch(url)
  let response = await fetch(url);
  //.then(response => {

  if (response.status == 200) {
    console.log(`json loaded: `, response);
    return response.json();
  } else {
    throw new HttpError(response);
  }
  //});
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {

  //let name = prompt("Enter a name?", "Vony");
  //let done = false;  
  while (true) {
    let name = prompt("Enter a name?", "Vony");
    try {
      let user = await loadJson(`https://api.github.com/users/${name}`);
      console.log(`Full name: ${user.name}.`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        //return demoGithubUser(); // n-am stiut cum sa fac :(
      } else {
        console.log(`error: `, err);
        throw err;
      }
    };
  }
}

demoGithubUser();
