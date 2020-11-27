// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

var strStr = function(haystack, needle) {
    if (haystack === "" && needle === "") return 0;
    return haystack.indexOf(needle);
  };


//   Runtime: 76 ms, faster than 86.94% of JavaScript online submissions for Implement strStr().
//   Memory Usage: 37.8 MB, less than 99.89% of JavaScript online submissions for Implement strStr().