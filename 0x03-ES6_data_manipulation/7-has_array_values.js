export default function hasValuesFromArray(set, array) {
  let x = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      x += 1;
    }
  }

  if (x === array.length) {
    return true;
  }
  return false;
}
