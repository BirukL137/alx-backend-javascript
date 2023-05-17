function calculateNumber(a, b) {
  const rnd_a = Math.round(a);
  const rnd_b = Math.round(b);

  return rnd_a + rnd_b;
}

module.exports = calculateNumber;
