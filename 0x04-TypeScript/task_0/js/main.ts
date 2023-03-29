interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1 = new Student('John', 'Doe', 25, 'Seattle');
const student2 = new Student('Jane', 'Doe', 23, 'New York');

// Create an array named studentsList containing the two variables
const studentsList = [student1, student2];

// Render a table and for each element in the array, append a new row to the table
const table2 = document.createElement('table');
document.body.appendChild(table2);

for (let i = 0; i < studentsList.length; i++) {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');

  cell1.appendChild(document.createTextNode(studentsList[i].firstName));
  cell2.appendChild(document.createTextNode(studentsList[i].location));

  row.appendChild(cell1);
  row.appendChild(cell2);

  table2.appendChild(row);
}
