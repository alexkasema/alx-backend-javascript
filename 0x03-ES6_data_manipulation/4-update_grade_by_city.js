export default function updateStudentGradeByCity(myStudents, city, newGrades) {
  const studentsLocation = myStudents.filter((student) => student.location === city);

  const studentsGrades = studentsLocation.map(
    (student) => {
      for (const grades of newGrades) {
        if (student.id === grades.studentId) {
          student.grade = grades.grade; // eslint-disable-line no-param-reassign
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
      return student;
    },
  );

  return studentsGrades;
}
