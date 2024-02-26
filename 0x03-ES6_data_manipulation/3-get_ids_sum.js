export default function getStudentIdsSum(array) {
  const result = array.reduce((acc, val) => acc + val.id, 0);
  return result;
}
