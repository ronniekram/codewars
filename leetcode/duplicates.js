/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums !== []){
    var countObj = nums.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
  
    return acc;
}, {});
    for (num in countObj) {
      if (countObj[num] > 1) {
        return true;
      }
    }
  }
  return false;
};

// Runtime: 104 ms, faster than 26.51% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 47.9 MB, less than 5.18% of JavaScript online submissions for Contains Duplicat