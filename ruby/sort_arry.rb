# my solution
def sort_array(source_array)
  odd = source_array.select(&:odd?).sort
  source_array.map {|i| i.even? ? i : odd.shift }
end


# best solution

def sort_array(xs)
  odd = xs.select(&:odd?).sort.each
  xs.map{ |x| x.odd? ? odd.next : x }
end