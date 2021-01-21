function palindromeRearranging(inputString) {
  // if letters in a string can be arranged to make a palindrome, return true
  // if string length is odd, count of characters must be even #s except 1
  // if string length is even, count of all chars must be even #s
  let charFreq = {}
  for (let i = 0; i < inputString.length; i++) {
      charFreq[inputString[i]] = ( charFreq[inputString[i]] || 0) + 1
  }
  let numbers = Object.values(charFreq)

  let evenCount = 0;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
          evenCount++;
      }
  }
  if (inputString.length % 2 === 0 && evenCount === numbers.length) {
      return true;
  } else if (inputString.length % 2 !== 0 && evenCount + 1 === numbers.length) {
      return true;
  }
  return false;
}
