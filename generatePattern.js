const retroColors = ['#eeeeee', '#979797', '#666666', '#000000'];
function getRandomColor() {
  return retroColors[Math.floor(Math.random() * retroColors.length)];
}
function generatePattern(cols, rows) {
  const p = [];
  for (let y = 0; y < rows; y++) {
    const row = [];
    for (let x = 0; x < cols; x++) {
      row.push(getRandomColor());
    }
    p.push(row);
  }
  return p;
}
module.exports = generatePattern;
