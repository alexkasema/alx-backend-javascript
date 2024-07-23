import readDatabase from '../utils';

class StudentsController {
  static getAllStudents (request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        let message;

        students.push('This is the list of our students');

        for (const field of Object.keys(fields)) {
          message = `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(', ')}`;

          students.push(message);
        }
        response.status(200).send(`${students.join('\n')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (request, response, DATABASE) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((fields) => {
          const students = fields[major];

          response.status(200).send(`List: ${students.join(', ')}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    }
  }
}

export default StudentsController;
