export default function getStudentsByLocation(array, city) {
  if (array instanceof Array) {
    const students = array.filter((student) => student.location === city);
    return students;
  }

  return [];
}
