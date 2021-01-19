function allLongestStrings(inputArray) {
  let longStrings = [];
  let longest = inputArray.sort(
  function (a, b) {
      return b.length - a.length;
  })[0];
  inputArray.forEach(string => {
      if (string.length === longest.length) {
          longStrings.push(string);
      }
  })
  return longStrings;
}