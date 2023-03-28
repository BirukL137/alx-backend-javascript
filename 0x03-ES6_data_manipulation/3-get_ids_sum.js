export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((result, student) => result + student.id, 0);
}
