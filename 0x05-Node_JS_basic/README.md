# NodeJS Basics
- Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

- Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

- A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

- When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

- This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

- Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

- In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
## 0-console.js
In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.
## 1-stdin.js
Create a program named 1-stdin.js that will be executed through command line:

- It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
- The user should be able to input their name on a new line
- The program should display Your name is: INPUT
- When the user ends the program, it should display This important software is now closing (followed by a new line)
## 2-read_file.js
Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js

- Create a function named countStudents. It should accept a path in argument
- The script should attempt to read the database file synchronously
- If the database is not available, it should throw an error with the text Cannot load the database
- If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
- It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
- CSV file can contain empty lines (at the end) - and they are not a valid student!
## 3-read_file_async.js
Using the database database.csv (provided in project description), create a function countStudents in the file 3-read_file_async.js

- Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
- The script should attempt to read the database file asynchronously
- The function should return a Promise
- If the database is not available, it should throw an error with the text Cannot load the database
- If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
- It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
- CSV file can contain empty lines (at the end) - and they are not a valid student!
## 4-http.js
Create a small HTTP server using Node's HTTP module 
In a file named 4-http.js, create a small HTTP server using the http module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- Displays Hello Holberton School! in the page body for any endpoint as plain text
## 5-http.js
Create a more complex HTTP server using Node's HTTP module
In a file named 5-http.js, create a small HTTP server using the http module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- It should return plain text
- When the URL path is /, it should display Hello Holberton School! in the page body
- When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!
## 6-http_express.js
Create a small HTTP server using Express
Install Express and in a file named 6-http_express.js, create a small HTTP server using Express module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- Displays Hello Holberton School! in the page body for the endpoint /

