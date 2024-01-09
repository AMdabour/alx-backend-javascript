export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const arrayBuffer = new ArrayBuffer(length);
  const int8array = new Int8Array(arrayBuffer);

  int8array[position] = value;

  return int8array;
}
