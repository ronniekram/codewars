// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function circleOfNumbers(n, firstNumber) {
  let rtnNum = (n / 2) + firstNumber
  if (rtnNum >= n) {
      return rtnNum - n
  }
  return rtnNum
 }