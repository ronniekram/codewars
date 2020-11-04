#my solution

def string_transformer(str)
  str.swapcase.split(/(\s+)/).reverse.join
end 

#best solution

def string_transformer(str)
  str.split(/\b/).reverse.map(&:swapcase).join
end