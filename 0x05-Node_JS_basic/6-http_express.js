const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.listen(PORT);

module.exports = app;
