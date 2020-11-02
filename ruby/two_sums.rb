#my solution
def two_sum(numbers, target)
  (0..numbers.count).to_a.combination(2).to_a.select { |a, b| numbers[a].to_i + numbers[b].to_i == target }.flatten
 end


#best solution

def twoSum(numbers, target)
  numbers.each_with_index do |n1, i1|
    numbers.each_with_index do |n2, i2|
      return [i1, i2] if (n1 + n2) == target && i1 != i2
    end
  end
end