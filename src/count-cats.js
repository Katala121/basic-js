module.exports = function countCats(matrix) {
  let count = 0;
  matrix.map(arr => arr.map(i => i == '^^'? count++ : count))
  return count
};
