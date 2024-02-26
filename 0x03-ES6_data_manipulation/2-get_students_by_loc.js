export default function getStudentsByLocation(array, city) {
  const result = array.filter((obj) => obj.location === city);
  return result;
}
