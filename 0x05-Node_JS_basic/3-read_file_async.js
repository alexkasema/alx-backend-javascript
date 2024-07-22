const { readFile } = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const response = [];
      let message;

      const content = data.toString().split('\n');

      let students = content.filter((student) => student);
      students = students.map((student) => student.split(','));

      const numberOfStudents = students.length ? students.length - 1 : 0;
      message = `Number of students: ${numberOfStudents}`;

      console.log(message);
      response.push(message);

      const fields = {};

      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];
          fields[students[i][3]].push(students[i][0]);
        }
      }

      delete fields.field;

      for (const field of Object.keys(fields)) {
        message = `Number of students in ${field}: ${
          fields[field].length}. List: ${fields[field].join(', ')}`;

        console.log(message);

        response.push(message);
      }

      resolve(response);
    });
  });
};

module.exports = countStudents;
