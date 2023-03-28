export default function cleanSet(set, startString) {
  const result = [];

  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) return '';

  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}
