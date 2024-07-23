const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;
const DATABASE = process.argv.length > 2 ? process.argv[2] : '';

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.status(200).send(`${message}${students.join('\n')}`);
  } catch (err) {
    res.status(404).send(`${err.message}`);
  }
});

app.listen(PORT);

module.exports = app;
