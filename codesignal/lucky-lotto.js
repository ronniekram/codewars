function isLucky(n) {
  // ticket numbers usually equal 
  // lucky if the sum of first half is equal to sum of second half
  // all inputs will have even number of digits
  // turn int into string
  let nStr = n.toString();
  // create variable for mid point - length / 2
  let mid = nStr.length / 2
  // create 2 variables for arrays w/ slice
  // let half1 = nStr.slice(0, mid).split('');
  // let half2 = nStr.slice(mid).split('');
  
  let sum1 = 0
  let sum2 = 0
  // sum numbers in each
  // creates less variables 
  nStr.slice(0, mid).split('').forEach(num => {sum1 += parseInt(num)});
  nStr.slice(mid).split('').forEach(num => {sum2 += parseInt(num)});
  // compare
  if (sum1 === sum2) return true;
  // if none of conditions are met
  return false;
}
