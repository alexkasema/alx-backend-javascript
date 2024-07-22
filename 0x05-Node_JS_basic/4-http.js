const { createServer } = require('http');

const hostname = '127.0.0.1';
const PORT = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, hostname, () => {
  // console.log(`Server running at http://${hostname}:${PORT}`);
});

module.exports = app;
