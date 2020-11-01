#my solution
def data_reverse(data)
  data.each_slice(8).to_a.collect {|d| d.reverse}.flatten.reverse
end

#best solution

def data_reverse(data)
  data.each_slice(8).to_a.reverse.flatten
end