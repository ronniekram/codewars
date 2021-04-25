// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


const moveZeroes = function(nums) {
  for (let num of nums) {
      if (num === 0) {
          let zero = nums.indexOf(num);
          nums.splice(zero, 1);
          nums.push(0);
      }
  }
return nums; 
};