const { readFile } = require('fs');

function readDatabase (path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
        return;
      }
      const content = data.toString().split('\n');

      let students = content.filter((student) => student);
      students = students.map((student) => student.split(','));

      const fields = {};

      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];
          fields[students[i][3]].push(students[i][0]);
        }
      }

      delete fields.field;

      resolve(fields);
    });
  });
}

export default readDatabase;
