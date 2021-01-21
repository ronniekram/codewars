function arrayChange(inputArray) {
  let moves = 0;
  // each element must be at least 1 greater than the previous
  // arr = [1, 1, 1]
  // must add 1 to arr[1] and 2 to arr[2]
  // iterate over array, start at index 1
  for (let i = 1; i < inputArray.length; i++) {
      // while current element is less than or equal to the one before it, add 1 to the value and add 1 to moves
      while (inputArray[i] <= inputArray[i - 1]) {
          inputArray[i]++;
          moves++;
      }
      
  }
  return moves;
}