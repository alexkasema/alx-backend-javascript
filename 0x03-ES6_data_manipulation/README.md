# ES6 data manipulation
## Array
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
## Typed Array
JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.

Typed arrays are not intended to replace arrays for any kind of functionality. Instead, they provide developers with a familiar interface for manipulating binary data. This is useful when interacting with platform features, such as audio and video manipulation, access to raw data using WebSockets, and so forth. Each entry in a JavaScript typed array is a raw binary value in one of a number of supported formats, from 8-bit integers to 64-bit floating-point numbers.
Typed array objects share many of the same methods as arrays with similar semantics. However, typed arrays are not to be confused with normal arrays, as calling Array.isArray() on a typed array returns false. Moreover, not all methods available for normal arrays are supported by typed arrays (e.g. push and pop).
## Set Data Structure
Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

The specification requires sets to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).
## Map Data Structure
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).

The specification requires maps to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).
## WeakMap
A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols, with values of any arbitrary JavaScript type, and which does not create strong references to its keys. That is, an object's presence as a key in a WeakMap does not prevent the object from being garbage collected. Once an object used as a key has been collected, its corresponding values in any WeakMap become candidates for garbage collection as well — as long as they aren't strongly referred to elsewhere. The only primitive type that can be used as a WeakMap key is symbol — more specifically, non-registered symbols — because non-registered symbols are guaranteed to be unique and cannot be re-created.
## 0-get_list_students.js
Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco
## 1-get_list_student_ids.js
Create a function getListStudentIds that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the map function on the array.
## 2-get_students_by_loc.js
Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.

It should accept a list of students (from getListStudents) and a city (string) as parameters.

You must use the filter function on the array.
##  3-get_ids_sum.js
Create a function getStudentIdsSum that returns the sum of all the student ids.

It should accept a list of students (from getListStudents) as a parameter.

You must use the reduce function on the array.
##  4-update_grade_by_city.js
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:

  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined.
## 5-typed_arrays.js
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

It should accept three arguments: length (Number), position (Number), and value (Number).

If adding the value is not possible the error Position outside range should be thrown.
## 6-set.js
Create a function named setFromArray that returns a Set from an array.

It accepts an argument (Array, of any kind of element).
## 7-has_array_values.js
Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a set (Set) and an array (Array).
