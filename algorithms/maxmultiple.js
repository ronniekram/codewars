// Given a divisor and a bound, find the largest integer N such that:

// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists

function maxMultiple(divisor, bound) {
  // n must be greater than 0
  // n must de divisible by divisor
  // n must be less than or equal to bound
  let n = 0
  for (let i = 0; i <= bound; i++) {
      if (i % divisor === 0) {
          n = i
      }
  }
  return n
}