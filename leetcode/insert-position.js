// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

var searchInsert = function(nums, target) {
    let added = nums
    if (nums.includes(target)) {
      return nums.indexOf(target);
    } else {
        added.push(target);
        return added.sort(function(a, b) {
          return a - b;
        }).indexOf(target);
    }
  }

// Runtime: 88 ms, faster than 6.55% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.3 MB, less than 6.09% of JavaScript online submissions for Search Insert Position.