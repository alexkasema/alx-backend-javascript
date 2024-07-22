const { readFileSync } = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  data = data.toString().split('\n');

  let students = data.filter((item) => item);
  students = students.map((item) => item.split(','));

  const numberOfStudents = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${numberOfStudents}`);
  const fields = {};

  for (const i in students) {
    if (i !== 0) {
      if (!fields[students[i][3]]) fields[students[i][3]] = [];
      fields[students[i][3]].push(students[i][0]);
    }
  }

  delete fields.field;

  for (const field of Object.keys(fields)) {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[
        field
      ].join(', ')}`,
    );
  }
};

module.exports = countStudents;
