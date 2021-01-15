// Given an integer n, return the largest number that contains exactly n digits.

function largestNumber(n) {
  let numStr = ''
  while (n > 0) {
      numStr += '9'
      n--;
  }
  return parseInt(numStr)
}