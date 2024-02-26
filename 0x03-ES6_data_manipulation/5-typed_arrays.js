export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const array = new DataView(new ArrayBuffer(length), 0, length);

  array.setUint8(position, value);

  return array;
}
