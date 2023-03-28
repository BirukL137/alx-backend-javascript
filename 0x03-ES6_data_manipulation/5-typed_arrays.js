export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new DataView(buffer, 0);

  if (position > length - 1) throw Error('Position outside range');
  int8View.setInt8(position, value);

  return int8View;
}
