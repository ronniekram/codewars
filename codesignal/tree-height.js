function sortByHeight(a) {
  // -1 represents trees
  // iterate through original array and replace non -1 with sorted array elements
  // create empty array
  let b = [];
  // add elements that are not -1 to empty array
  a.forEach(num => {
      if (num !== -1) {
          b.push(num);
      }
  })
  // sort new array
  b = b.sort((x, y) => {return x - y})
  // iterate through original array and replace non -1 elements with each element of new array
  // a.forEach(x => {
  //     console.log(x)
  //     // let bIdx = 0;
  //     // if (a[x] !== -1) {
  //     //     a.splice(a, 1, b[bIdx]);
  //     // }
  //     // bIdx++;
  // })
  let bIdx = 0
  for (let i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
          a.splice(i, 1, b[bIdx]);
          bIdx++;
      }
  }
  return a;
}
