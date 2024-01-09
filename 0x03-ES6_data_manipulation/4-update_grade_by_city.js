export default function updateStudentGradeByCity(array, city, newGrades) {
  const filterArray = array.filter((obj) => obj.location === city);
  const result = filterArray.map((obj) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < newGrades.length; i++) {
      if (newGrades[i].studentId === obj.id) {
        obj.grade = newGrades[i].grade; // eslint-disable-line no-param-reassign
        return obj;
      }
    }
    obj.grade = 'N/A'; // eslint-disable-line no-param-reassign
    return obj;
  });
  return result;
}
