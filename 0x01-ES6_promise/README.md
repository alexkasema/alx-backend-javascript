# ES6 Promises
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.
## 0-promise.js
Return a Promise using this prototype function getResponseFromAPI()
## 1-promise.js
Using the prototype getFullResponseFromAPI(success), return a promise. The parameter is a boolean.
When the argument is:

true
	resolve the promise by passing an object with 2 attributes:
		status: 200
		body: 'Success'
false
	reject the promise with an error object with the message The fake API is not working currently
## 2-then.js
Using the function handleResponseFromAPI(promise).
Append three handlers to the function:

When the Promise resolves, return an object with the following attributes
status: 200
body: success
When the Promise rejects, return an empty Error object
For every resolution, log Got a response from the API to the console.
## 3-all.js
In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises, use the function handleProfileSignup() to collectively resolve all promises and log body firstName lastName to the console.
In the event of an error, log Signup system offline to the console
## 4-user-promise.js
Using the function signUpUser(firstName, lastName) return a resolved promise with this object:
{
  firstName: value,
  lastName: value,
}
## 5-photo-reject.js
Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string $fileName cannot be processed.
## 6-final-user.js 
Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
