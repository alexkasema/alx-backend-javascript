const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const DATABASE = process.argv.length > 2 ? process.argv[2] : '';
const hostname = '127.0.0.1';
const PORT = 1245;

const app = createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(PORT, hostname, () => {
  // console.log(`Server running at http://${hostname}:${PORT}`);
});

module.exports = app;
