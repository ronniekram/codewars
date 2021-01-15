

function almostIncreasingSequence(seq) {
  // variable to represent elements removed
  let rmvCount = 0
  // loop through elements of seq starting at index 1
  for (let i = 1; i < seq.length; i++) {
    // if the element at index i is less than or equal to the preceding element, add 1 to the removed count
    if (seq[i] <= seq[i-1]) {
      rmvCount++;
    }
    // if more than one element is removed, return false
    if (rmvCount > 1) return false;
    // if the element at index i is less than or equal to the element 2 places before it and the element at index i + 1 is less than or equal to the element 1 place before i return false
    if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i-1]) {
      return false;
    }
  }
  return true
}