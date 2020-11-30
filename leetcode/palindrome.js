// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.


var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z\d]/gi,"");
    sReverse = s.split("").reverse().join("");
    return (s === sReverse ? true : false)
};


// Runtime: 100 ms, faster than 47.26% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 43.1 MB, less than 42.94% of JavaScript online submissions for Valid Palindrome.