module.exports = function countCats(matrix) {
  return matrix.flatMap(x=>x).filter(x=>x==='^^').length;
};
