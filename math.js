/**
 * Converts two points to a vector.
 * @arg {XY} lhs
 * @arg {XY} rhs
 * @return {XY}
 */
module.exports.vector = function(lhs, rhs) {
  return {x: lhs.x - rhs.x, y: lhs.y - rhs.y}
}
