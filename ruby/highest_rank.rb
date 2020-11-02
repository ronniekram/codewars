#my solution
def highest_rank(arr)
  arr.sort{|a, b| b <=> a}.max_by {|i| arr.count(i)}
end

#best solution

def highest_rank(arr)
  arr.group_by(&:itself).max_by { |k, v| [v.size, k] } [0]
end