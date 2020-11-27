// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    s = s.split(" ");
    s = s.filter(x => x != '');
    if (s.length === 0) return 0;
    return s.pop().length;
  };

// Runtime: 80 ms, faster than 48.17% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 37.7 MB, less than 99.50% of JavaScript online submissions for Length of Last Word.