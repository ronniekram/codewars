// my solution
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length
}

// best solution

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}