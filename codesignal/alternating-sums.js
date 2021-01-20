function alternatingSums(a) {
  // add even idx to one array
  // odd idx to separate array
  // sum each array and return 2 concat
  // sum of even array should come first
  let even = []
  let odd = []
  for (let i = 0; i < a.length; i++) {
      // need case for 0th index
      if (i === 0) {
          even.push(a[i]);
      } else if (i % 2 === 0) {
          even.push(a[i]);
      } else {
          odd.push(a[i]);
      }
  }
  even = even.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue
      }, 0);
  odd = odd.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue
      }, 0);
  return [even, odd];

}
