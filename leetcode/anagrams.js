
var isAnagram = function(s, t) {
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  if (s === t) {
    return true;
  } else {
    return false;
  }
};

// Runtime: 156 ms, faster than 7.99% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 44.4 MB, less than 30.32% of JavaScript online submissions for Valid Anagram.
