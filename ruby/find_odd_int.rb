# my solution
def find_it(seq)
  seq.each_with_object(Hash.new(0)) { |num ,count| count[num] += 1 }.select {|k, v| k if v.odd?}.flatten[0]
end

# best solution

def find_it(seq)
  seq.detect { |n| seq.count(n).odd? }
end