const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            reject(Error('Cannot load the database'));
            return;
        }
        const res = [];
        const database = data.toString().split('\n');
        let sts = database.filter((item) => item);
        sts = sts.map((item) => item.split(','));
        console.log(`Number of students: ${sts.length - 1}`);
        res.push(`Number of students: ${sts.length - 1}`);

        const cs = [];
        const swe = [];
        for (const i in sts) {
            if (sts[i][3] === 'CS') {
            cs.push(sts[i][0]);
            } else if (sts[i][3] === 'SWE') {
            swe.push(sts[i][0]);
            }
        }

        console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
        console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
        res.push(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
        res.push(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
        resolve(res);
    });
  });
}

module.exports = countStudents;
