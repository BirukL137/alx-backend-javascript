function calculateNumber(type, a, b) {
  const rnd_a = Math.round(a);
  const rnd_b = Math.round(b);

  if (type === 'SUBTRACT') {
    return rnd_a - rnd_b;
  }
  if (type === 'DIVIDE') {
    if (rnd_b === 0) {
      return 'Error';
    }
    return rnd_a / rnd_b;
  }

  return rnd_a + rnd_b;
}

module.exports = calculateNumber;
