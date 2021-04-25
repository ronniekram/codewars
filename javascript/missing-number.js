// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


const missingNumber = function(nums) {
  const sum = nums.reduce((acc, val) => acc + val);
  const { length: num } = nums;
  const correctSum = (num * (num + 1)) / 2;
  return correctSum - sum;
}