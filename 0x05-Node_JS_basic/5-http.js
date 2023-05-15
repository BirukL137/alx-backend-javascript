const http = require('http');

const countStudents = require('./3-read_file_async');
const database = process.argv.slice(2)[0];

const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === './students') {
    res.write('This is the list of our students\n');
    try {
      const sts = await countStudents(database);
      res.end(`${sts.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.write('Hello Holberton School!');
  }
});

app.listen(port);

module.exports = app;
