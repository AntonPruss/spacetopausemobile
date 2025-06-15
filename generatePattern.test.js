const generatePattern = require('./generatePattern');

test('generatePattern returns rows x cols pattern', () => {
  const cols = 5;
  const rows = 3;
  const pattern = generatePattern(cols, rows);
  expect(pattern.length).toBe(rows);
  for (const row of pattern) {
    expect(Array.isArray(row)).toBe(true);
    expect(row.length).toBe(cols);
  }
});
