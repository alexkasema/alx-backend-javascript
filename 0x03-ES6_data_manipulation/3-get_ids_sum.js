export default function getStudentIdsSum(array) {
  if (array instanceof Array) {
    const sum = array.reduce((a, b) => (a + b.id), 0);
    return sum;
  }

  return [];
}
