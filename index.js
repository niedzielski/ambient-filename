// Error: File '/home/stephen/Desktop/ambient-filename/math.d.ts' is not a module. [2306]
const math = require('./math.js')

/**
 * @arg {XY} lhs
 * @arg {XY} rhs
 * @return {void}
 */
function main(lhs, rhs) {
  console.log(math.vector(lhs, rhs))
}

main({x: 1, y: 2}, {x: 3, y: 4}) // Prints {x: -2, y: -2}.
