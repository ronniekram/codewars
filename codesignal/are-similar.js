function areSimilar(a, b) {
  // if the arrays are equal
  if (a.join('') === b.join('')) return true;
  // create variable to keep track of swapped elements
  let swaps = 0;
  // iterate through one array
  for (i in a) {
      if (a[i] !== b[i]) {
          swaps++;
      }
  }
  let c = a.sort((x, y) => {return x - y})
  let d = b.sort((x, y) => {return x - y})
  
  if (swaps < 3 && c.join('') === d.join('')) return true;
  
  return false;
}