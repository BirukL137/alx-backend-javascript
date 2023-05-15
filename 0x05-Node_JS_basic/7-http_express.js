const express = require('express');

const countStudents = require('./3-read_file_async');

const database = process.argv.slice(2)[0];

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  try {
    const sts = await countStudents(database);
    res.send(`This is the list of our students\n${sts.join('\n')}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
