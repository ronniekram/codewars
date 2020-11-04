#my solution
def count_chars(s)
  s.split('').each_with_object(Hash.new(0)) { |n, i| i[n] += 1 }
end

#best solution

def count_chars(s)
  s.chars.uniq.each_with_object({}) { |c, h| h[c] = s.count(c) }
end