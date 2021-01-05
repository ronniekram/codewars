# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
  new_nums = nums.each_with_object(Hash.new(0)) do |element, num_hash|
    num_hash[element] += 1
  end 
   new_nums.values.any? {|num| num > 1} ? true : false
end

# Runtime: 84 ms, faster than 11.00% of Ruby online submissions for Contains Duplicate.
# Memory Usage: 214.4 MB, less than 6.70% of Ruby online submissions for Contains Duplicate.