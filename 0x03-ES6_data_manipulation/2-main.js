import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const myStudents = getListStudents();

console.log(getStudentsByLocation(myStudents, 'San Francisco'));
