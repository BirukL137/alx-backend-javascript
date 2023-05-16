const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
        return;
      }
      const database = data.toString().split('\n');
      let sts = database.filter((item) => item);
      sts = sts.map((item) => item.split(','));

      const fields = {};
      for (const i in sts) {
        if (i !== 0) {
          if (!fields[sts[i][3]]) fields[sts[i][3]] = [];

          fields[sts[i][3]].push(sts[i][0]);
        }
      }
      delete fields.field;
      resolve(fields);
    });
  });
}

export default readDatabase;
