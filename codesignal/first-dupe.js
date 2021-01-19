function firstDuplicate(a) {
  // return the number that that has the first duplicate index (second occurence, smallest index)
  // create object to store index of each value
  let freqCounter = {};
  for (let i = 0; i < a.length; i++) {
    if (freqCounter[a[i]]) {
        freqCounter[a[i]].push(i)
    } else {
        freqCounter[a[i]] = [i]
    }
  }
  let kvArr = Object.entries(freqCounter);
  let pairs= [];
  let min = null;
  // find all keys where value.length > 1 
  // find freqCounter[a[i]] where idx[1] is smallest and return 
  for (let i = 0; i < kvArr.length; i++) {
      if (kvArr[i][1].length > 1) {
        pairs.push(kvArr[i])
      }
  }
  // returns num with duplicate value if only 1 exists
  if (pairs.length === 1) {
    return parseInt(pairs[0][0])
  } else if (pairs.length > 1) {
    // returns value if pairs length is greater than 1
    min = pairs[0]
    for (let i = 0; i < pairs.length; i++) {
      if (pairs[i][1][1] < min[1][1]) {
          min = pairs[i]
      }
    }
    return parseInt(min[0])
  }
  // returns -1 if no duplicates exist
  return -1
}