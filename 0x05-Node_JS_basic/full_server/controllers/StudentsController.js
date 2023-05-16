import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((flds) => {
        const sts = [];
        let message;

        sts.push('This is the list of our students');

        for (const key of Object.keys(flds)) {
          message = `Number of sts in ${key}: ${
            flds[key].length
          }. List: ${flds[key].join(', ')}`;

          sts.push(message);
        }
        response.send(200, `${sts.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((flds) => {
          const sts = flds[major];

          response.send(200, `List: ${sts.join(', ')}`);
        })
        .catch(() => response.send(500, 'Cannot load the database'));
    }
  }
}

export default StudentsController;