function firstNotRepeatingCharacter(s) {
  // return first instance of a non-repeating character
  // convert s to object
  // find a key with a value of 1
  // return and break
  let freqCounter = {}
  for (let i = 0; i < s.length; i++) {
      freqCounter[s[i]] = (freqCounter[s[i]] || 0) + 1
  }
  let freqArr = Object.entries(freqCounter)
  for (let i = 0; i < freqArr.length; i++) {
      if (freqArr[i][1] === 1) {
          return freqArr[i][0];
          break;
      }
  }
  // return if no non-repeating characters exist
  return "_"
}