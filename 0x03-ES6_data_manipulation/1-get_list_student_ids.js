export default function getListStudentIds(array) {
  if (array instanceof Array) {
    const ids = array.map((obj) => obj.id);
    return ids;
  }

  return [];
}
