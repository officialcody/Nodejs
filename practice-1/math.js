function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

exports.add = add;
module.exports = {
  ...exports,
  sub,
};
