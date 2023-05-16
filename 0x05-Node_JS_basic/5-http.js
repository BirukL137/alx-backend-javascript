const http = require('http');

const countStudents = require('./3-read_file_async');

const database = process.argv.slice(2)[0];

const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const sts = await countStudents(database);
      res.end(`${sts.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end();
  }
});

app.listen(port);

module.exports = app;
